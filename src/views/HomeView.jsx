import { useMemo, useState } from 'react';

function buildStreakGrid(timeline) {
  const dayCounts = {};
  (timeline || []).forEach((entry) => {
    const key = entry.t.slice(0, 10);
    dayCounts[key] = (dayCounts[key] || 0) + 1;
  });

  const days = [];
  const today = new Date();
  for (let i = 29; i >= 0; i -= 1) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ key, count: dayCounts[key] || 0 });
  }
  return days;
}

function HomeView({ state, texts, onDistressSave, overallProgress, badges }) {
  const pct = Math.round(overallProgress() * 100);
  const [rating, setRating] = useState(5);

  const streak = useMemo(() => buildStreakGrid(state.timeline), [state.timeline]);
  const maxLevel = streak.reduce((m, d) => Math.max(m, d.count), 0);

  const recent = (state.timeline || []).slice(-6).reverse();

  return (
    <div className="page">
      <div className="hero">
        <h1>{texts.welcome}</h1>
        <p className="muted">{texts.subtitle}</p>
      </div>
      <section className="content">
        <section className="flow" aria-labelledby="streakHeading">
          <h2 id="streakHeading">{texts.streakHeading}</h2>
          <div id="streakText" title={texts.streakHeading} aria-label={texts.streakHeading}>
            <div className="streak-grid">
              {maxLevel === 0 && <span className="tiny">{texts.noStreakData}</span>}
              {maxLevel > 0 &&
                streak.map((d) => {
                  const lvl = Math.min(d.count, 4);
                  return <span key={d.key} title={`${d.key}: ${d.count}`} className={`streak-cell level-${lvl}`} />;
                })}
            </div>
          </div>
          <div className="tiny" id="streakLegend">
            {texts.streakLegendDay}. {texts.streakLegendIntensity}
          </div>
        </section>

        <div className="kpi">
          <div className="tile">
            <div className="big">{pct}%</div>
            <div className="tiny">{texts.overall}</div>
          </div>
          <div className="tile">
            <div className="big">{Object.keys(state.completed || {}).length}</div>
            <div className="tiny">{texts.pagesDone}</div>
          </div>
          <div className="tile">
            <div className="big">{(state.badges || []).slice(-1)[0] || texts.none}</div>
            <div className="tiny">{texts.latestBadge}</div>
          </div>
        </div>

        <div className="row" style={{ alignItems: 'center' }}>
          <div className="progress-ring" style={{ ['--p']: `${pct}%` }}>
            <b>{pct}%</b>
          </div>
          <div className="notice" style={{ flex: 1, minWidth: 240 }}>
            {texts.notEmergency}
          </div>
        </div>

        <article className="flow">
          <label htmlFor="stressSlider">{texts.stressToday}</label>
          <div className="row" style={{ alignItems: 'center', gap: '12px' }}>
            <input
              id="stressSlider"
              type="range"
              min="0"
              max="10"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <span className="chip" id="stressVal">
              {rating}
            </span>
            <button className="primary" id="stressSave" onClick={() => onDistressSave(rating)}>
              {texts.save}
            </button>
          </div>
        </article>

        <article className="flow">
          <h2>{texts.badgesTitle}</h2>
          <div className="badgebar" id="badgeBar">
            {badges.map((b) => {
              const unlocked = (state.badges || []).includes(b.n);
              return (
                <span key={b.n} className={unlocked ? 'chip' : 'chip locked'}>
                  {unlocked ? `🏅 ${b.n}` : b.n}
                </span>
              );
            })}
          </div>
        </article>

        <article className="flow">
          <h2>{texts.activityTitle}</h2>
          <div className="timeline" id="timeline">
            {recent.length === 0 && <div className="tiny">{texts.none}</div>}
            {recent.map((ev, idx) => {
              const dt = new Date(ev.t);
              return (
                <div key={`${ev.t}-${idx}`} className="item" style={{ gap: '12px' }}>
                  <div>
                    <div className="tiny">{dt.toLocaleString()}</div>
                    <div>{ev.what}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}

export default HomeView;
