import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { BADGES, LANG } from './data/content.js';
import { capArray, clearState, exportState, loadState, saveState } from './state/store.js';
import HomeView from './views/HomeView.jsx';
import ModulesView from './views/ModulesView.jsx';
import ModuleDetailView from './views/ModuleDetailView.jsx';
import DataView from './views/DataView.jsx';
import JournalView from './views/JournalView.jsx';

function overallProgress(state) {
  const modules = LANG[state.lang].modulesData;
  const totalPages = modules.reduce((sum, m) => sum + m.pages.length, 0);
  const done = Object.keys(state.completed || {}).length;
  return totalPages ? done / totalPages : 0;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak(prev, timestamp) {
  const next = { ...prev };
  const day = timestamp.slice(0, 10);
  if (next.streak.last !== day) {
    const yesterday = new Date(timestamp);
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    next.streak.count = next.streak.last === yKey ? (next.streak.count || 0) + 1 : 1;
    next.streak.last = day;
  }
  return next;
}

function App() {
  const [state, setState] = useState(() => loadState());
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const texts = useMemo(() => LANG[state.lang], [state.lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', state.theme === 'light');
  }, [state.theme]);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const handleToggleTheme = () => {
    setState((prev) => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
  };

  const handleLanguageChange = (lang) => {
    setState((prev) => ({ ...prev, lang }));
  };

  const handleLogEvent = (what) => {
    setState((prev) => {
      const now = new Date().toISOString();
      const nextTimeline = [...(prev.timeline || []), { t: now, what }];
      capArray(nextTimeline);
      const updated = updateStreak({ ...prev, timeline: nextTimeline }, now);
      return updated;
    });
  };

  const handleSaveExercise = (pageId, payload) => {
    setState((prev) => {
      const nextExercises = { ...(prev.exercises || {}) };
      nextExercises[pageId] = payload;
      return { ...prev, exercises: nextExercises };
    });
    handleLogEvent(`Saved ${pageId}`);
  };

  const handleCompletePage = (pageId) => {
    setState((prev) => {
      const completed = { ...(prev.completed || {}), [pageId]: true };
      const next = { ...prev, completed };
      const progress = overallProgress(next);
      const unlocked = new Set(next.badges || []);
      BADGES.forEach((badge) => {
        if (progress >= badge.th && !unlocked.has(badge.n)) {
          unlocked.add(badge.n);
        }
      });
      next.badges = Array.from(unlocked);
      return next;
    });
    handleLogEvent(`Completed ${pageId}`);
  };

  const handleClear = () => {
    const reset = clearState();
    setState(reset);
  };

  const handleDistressSave = (rating) => {
    const id = 'm1p2';
    setState((prev) => {
      const nextExercises = { ...(prev.exercises || {}) };
      const entry = nextExercises[id] || {};
      const trend = Array.isArray(entry.trend) ? [...entry.trend] : [];
      trend.push({ d: todayKey(), v: rating });
      capArray(trend);
      nextExercises[id] = { ...entry, trend };
      const now = new Date().toISOString();
      const nextTimeline = [...(prev.timeline || []), { t: now, what: `Distress ${rating}/10` }];
      capArray(nextTimeline);
      const updated = updateStreak({ ...prev, exercises: nextExercises, timeline: nextTimeline }, now);
      return updated;
    });
  };

  const handleDownload = () => exportState(state);

  return (
    <div className="app-shell">
      <header>
        <div className="wrap topbar">
          <button className="ghost" id="menuBtn" aria-label="Menu" onClick={() => setNavOpen((p) => !p)}>
            <span className="sr-only">Menu</span>☰
          </button>
          <Link to="/" className="brand">
            <div className="logo" />
            <div>
              <div>{texts.brandTitle}</div>
              <div className="tiny">{texts.brandSubtitle}</div>
            </div>
          </Link>
          <div className="spacer" />
          <div className={`actions ${navOpen ? 'open' : ''}`} id="topbarActions">
            <NavLink className="pill" to="/">
              🏠 {texts.home}
            </NavLink>
            <NavLink className="pill" to="/modules">
              📚 {texts.modules}
            </NavLink>
            <NavLink className="pill" to="/data">
              💾 {texts.data}
            </NavLink>
            <NavLink className="pill" to="/journal">
              📝 {texts.journal}
            </NavLink>
            <button className="ghost" id="themeToggle" aria-label={texts.theme} onClick={handleToggleTheme}>
              🌓
            </button>
            <select
              id="langSelect"
              className="ghost"
              value={state.lang}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="da">Dansk</option>
              <option value="en">English</option>
            </select>
          </div>
          <button className="ghost" id="moreBtn" aria-label="Menu" onClick={() => setNavOpen((p) => !p)}>
            <span className="sr-only">Menu</span>…
          </button>
        </div>
      </header>

      <div className={`overlay ${navOpen ? 'show' : ''}`} aria-hidden={!navOpen} onClick={() => setNavOpen(false)} />

      <div className="wrap layout">
        <div className={`drawer ${navOpen ? 'open' : ''}`} id="drawer">
          <aside className="card sidebar">
            <h2>{texts.modules}</h2>
            <ModulesView
              embedded
              texts={texts}
              langKey={state.lang}
              completed={state.completed}
              onNavigate={() => setNavOpen(false)}
            />
          </aside>
        </div>
        <main className="card" role="main">
          <Routes>
            <Route
              path="/"
              element={
                <HomeView
                  state={state}
                  texts={texts}
                  onDistressSave={handleDistressSave}
                  overallProgress={() => overallProgress(state)}
                  badges={BADGES}
                />
              }
            />
            <Route
              path="/modules"
              element={<ModulesView texts={texts} langKey={state.lang} completed={state.completed} />}
            />
            <Route
              path="/modules/:moduleId/:pageId"
              element={
                <ModuleDetailView
                  state={state}
                  texts={texts}
                  onSaveExercise={handleSaveExercise}
                  onComplete={handleCompletePage}
                />
              }
            />
            <Route
              path="/modules/:moduleId"
              element={<ModuleDetailView state={state} texts={texts} onSaveExercise={handleSaveExercise} onComplete={handleCompletePage} />}
            />
            <Route
              path="/data"
              element={<DataView texts={texts} onDownload={handleDownload} onClear={handleClear} />}
            />
            <Route path="/journal" element={<JournalView state={state} texts={texts} />} />
          </Routes>
        </main>
      </div>

      <footer className="wrap">
        <div>{texts.footer.replace('YEAR', new Date().getFullYear())}</div>
      </footer>
    </div>
  );
}

export default App;
