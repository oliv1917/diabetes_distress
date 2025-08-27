import { BADGES, EX, toast, logEvent } from './app.js';
import { Store, capArray } from './storage.js';

export function renderTexts(state, t) {
  document.getElementById("brandTitle").textContent = t("brandTitle");
  document.getElementById("brandSubtitle").textContent = t("brandSubtitle");
  document.getElementById("modulesTitle").textContent = t("modules");
  document.getElementById("footerText").textContent = t("footer").replace("YEAR", new Date().getFullYear());
  const homeBtn = document.getElementById("homeBtn");
  homeBtn.setAttribute("aria-label", t("home"));
  const sr = homeBtn.querySelector(".sr-only");
  if (sr) sr.textContent = t("home");
  const dataBtn = document.getElementById("dataBtn");
  if (dataBtn) {
    dataBtn.setAttribute("aria-label", t("data"));
    const sr2 = dataBtn.querySelector(".sr-only");
    if (sr2) sr2.textContent = t("data");
  }
  document.getElementById("langSelect").value = state.lang;
}

export function renderSidebar(state, Lang, navigateTo) {
  const list = document.getElementById("moduleList");
  list.innerHTML = "";
  Lang[state.lang].modulesData.forEach((m, mi) => {
    const done = m.pages.filter(p => !!state.completed[p.id]).length;
    const pct = Math.round((done / m.pages.length) * 100);
    const div = document.createElement("div");
    div.className = "mod";
    div.innerHTML = '<div><div class="t">' + m.title + '</div><div class="tiny">' + m.goal + '</div><div class="progressbar"><i style="width:' + pct + '%"></i></div></div><div class="badge">' + pct + '%</div>';
    div.onclick = () => navigateTo(mi, 0);
    list.appendChild(div);
  });
}

export function renderHome(state, t, overallProgress) {
  const main = document.getElementById("main");
  const pctNum = Math.round(overallProgress(state) * 100);
  const pages = Object.keys(state.completed).length;

  // ==== Streak heatmap (last 30 days) ====
  let streakHtml = '';
  const dayCounts = {};
  if (state.timeline) {
    state.timeline.forEach(ev => {
      const key = ev.t.slice(0, 10);
      dayCounts[key] = (dayCounts[key] || 0) + 1;
    });
  }

  const days = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ key, count: dayCounts[key] || 0 });
  }
  const max = days.reduce((m, d) => Math.max(m, d.count), 0);
  const cells = days.map(d => {
    const lvl = d.count ? Math.ceil((d.count / (max || 1)) * 4) : 0;
    return '<span title="' + d.key + ': ' + d.count + '" class="streak-cell level-' + lvl + '"></span>';
  }).join('');
  const streakCount = (state.streak && state.streak.count) || 0;
  const lbl = (state.lang === 'da' ? 'Stime' : 'Streak') + ' ' + streakCount;
  streakHtml = '<div id="streakText" title="' + lbl + '" aria-label="' + lbl + '"><span class="streak-grid"></span></div>';

  const unlocked = new Set(state.badges || []);
  const badges = BADGES.map(b => {
    const name = b.n;
    const isUnlocked = unlocked.has(name);
    const label = isUnlocked ? '🏅&nbsp;' + name : name;
    const cls = isUnlocked ? 'chip' : 'chip locked';
    return '<span class="' + cls + '">' + label + '</span>';
  }).join('');

  const recent = state.timeline && state.timeline.length
    ? state.timeline.slice(-6).reverse().map(ev => {
        const dt = new Date(ev.t);
        const when = dt.toLocaleString();
        return '<div class="item" style="gap:12px;"><div><div class="tiny">' + when + '</div><div>' + ev.what + '</div></div></div>';
      }).join('')
    : '<div class="tiny">' + (state.lang === "da" ? "Din aktivitet vises her." : "Your activity will show here.") + '</div>';

  main.innerHTML = ''
    + '<div class="page">'
      + '<div class="hero"><h1>' + t("welcome") + '</h1><p class="muted">' + t("subtitle") + '</p></div>'
      + '<section class="content">'
        + streakHtml
        + '<div class="kpi">'
          + '<div class="tile"><div class="big">' + pctNum + '%</div><div class="tiny">' + t("overall") + '</div></div>'
          + '<div class="tile"><div class="big">' + pages + '</div><div class="tiny">' + t("pagesDone") + '</div></div>'
          + '<div class="tile"><div class="big">' + ((state.badges && state.badges.slice(-1)[0]) || t("none")) + '</div><div class="tiny">' + t("latestBadge") + '</div></div>'
        + '</div>'
        + '<div class="row" style="align-items:center">'
          + '<div class="progress-ring" style="--p:' + pctNum + '%"><b>' + pctNum + '%</b></div>'
          + '<div class="notice" style="flex:1;min-width:240px;">' + t("notEmergency") + '</div>'
        + '</div>'
        // Stress slider for daily distress tracking
        + '<article class="flow"><label for="stressSlider">' + t("stressToday") + '</label><div class="row" style="align-items:center;gap:12px;"><input id="stressSlider" type="range" min="0" max="10" value="5"><span class="chip" id="stressVal">5</span><button class="primary" id="stressSave">' + t("save") + '</button></div></article>'
        + '<article class="flow"><h2>' + t("badgesTitle") + '</h2><div class="badgebar" id="badgeBar">' + badges + '</div></article>'
        + '<article class="flow"><h2>' + t("activityTitle") + '</h2><div class="timeline" id="timeline">' + recent + '</div></article>'
      + '</section>'
    + '</div>';

  const heatmapEl = document.querySelector('#streakText .streak-grid');
  if (heatmapEl) {
    if (max === 0) {
      heatmapEl.textContent = t('noStreakData');
      const parent = document.getElementById('streakText');
      if (parent) {
        parent.setAttribute('aria-label', t('noStreakData'));
        parent.setAttribute('title', t('noStreakData'));
      }
    } else {
      heatmapEl.innerHTML = cells;
    }
  }

  const sliderEl = document.getElementById("stressSlider");
  const valChip = document.getElementById("stressVal");
  const saveBtn = document.getElementById("stressSave");
  if (sliderEl && valChip && saveBtn) {
    sliderEl.oninput = () => {
      valChip.textContent = sliderEl.value;
    };
    saveBtn.onclick = () => {
      const rating = +sliderEl.value;
      const id = 'm1p2';
      if (!state.exercises) state.exercises = {};
      if (!state.exercises[id]) state.exercises[id] = {};
      if (!state.exercises[id].trend) state.exercises[id].trend = [];
      state.exercises[id].trend.push({ d: new Date().toISOString().slice(0,10), v: rating });
      capArray(state.exercises[id].trend);
      logEvent('Distress ' + rating + '/10');
      Store.save(state);
      toast(EX[state.lang].saved);
    };
  }
}
export function renderData(state, t) {
  const main = document.getElementById("main");
  main.innerHTML = ''
    + '<div class="page">'
    +   '<div class="hero"><h1>' + t("dataTitle") + '</h1></div>'
    +   '<section class="content flow">'
    +     '<p>' + t("dataInfo") + '</p>'
    +     '<div class="cta-row">'
    +       '<button id="downloadBtn">' + t("downloadData") + '</button>'
    +       '<div class="spacer"></div>'
    +       '<button class="ghost" id="clearBtn">' + t("clearData") + '</button>'
    +     '</div>'
    +   '</section>'
    + '</div>';
}
