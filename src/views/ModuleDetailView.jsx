import DOMPurify from 'dompurify';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EX, LANG } from '../data/content.js';

function ExercisePanel({ page, langKey, stored, onSave, texts }) {
  const [note, setNote] = useState(stored?.note || '');
  const [rating, setRating] = useState(stored?.rating ?? 5);
  const [body, setBody] = useState(stored?.body || '');

  useEffect(() => {
    setNote(stored?.note || '');
    setRating(stored?.rating ?? 5);
    setBody(stored?.body || '');
  }, [stored, page.id]);

  const copy = EX[langKey];

  const handleSave = () => {
    const payload = { note };
    if (page.exercise === 'distress-rating') {
      payload.rating = rating;
      payload.body = body;
    }
    onSave(payload);
  };

  return (
    <div className="exercise">
      <h3>{page.title}</h3>
      {page.exercise === 'distress-rating' ? (
        <div className="flow">
          <label className="field">
            <span>{copy.distressQ}</span>
            <input type="range" min="0" max="10" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
            <span className="chip">{rating}</span>
          </label>
          <label className="field">
            <span>{copy.bodyQ}</span>
            <input type="text" value={body} placeholder={copy.drBodyExample} onChange={(e) => setBody(e.target.value)} />
          </label>
          <label className="field">
            <span>{copy.noteQ}</span>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} />
          </label>
        </div>
      ) : (
        <label className="field">
          <span>{copy.noteQ}</span>
          <textarea value={note} placeholder={copy.reframePick} onChange={(e) => setNote(e.target.value)} />
        </label>
      )}
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div className="tiny">{copy.chartHint}</div>
        <button className="primary" onClick={handleSave}>
          {texts.save}
        </button>
      </div>
    </div>
  );
}

function ModuleDetailView({ state, texts, onSaveExercise, onComplete }) {
  const { moduleId, pageId } = useParams();
  const navigate = useNavigate();
  const module = useMemo(() => LANG[state.lang].modulesData.find((m) => m.id === moduleId) || LANG[state.lang].modulesData[0], [
    moduleId,
    state.lang
  ]);
  const page = useMemo(() => {
    const id = pageId || module.pages[0].id;
    return module.pages.find((p) => p.id === id) || module.pages[0];
  }, [module, pageId]);

  const currentIndex = module.pages.findIndex((p) => p.id === page.id);
  const prevPage = currentIndex > 0 ? module.pages[currentIndex - 1] : null;
  const nextPage = currentIndex < module.pages.length - 1 ? module.pages[currentIndex + 1] : null;

  const stored = state.exercises?.[page.id];
  const isComplete = Boolean(state.completed?.[page.id]);

  const handleSave = (payload) => {
    onSaveExercise(page.id, { ...payload, id: page.id });
  };

  const safeBody = page.body ? DOMPurify.sanitize(page.body) : '';

  return (
    <div className="page">
      <div className="hero">
        <h1>
          {module.icon} {module.title}
        </h1>
        <div className="meta">
          <span>{module.goal}</span>
          {isComplete && <span className="chip">{texts.markComplete}</span>}
        </div>
        <div className="mini-progress">
          <div className="bar">
            <i style={{ width: `${Math.round(((currentIndex + 1) / module.pages.length) * 100)}%` }} />
          </div>
          <div className="txt">
            {currentIndex + 1}/{module.pages.length}
          </div>
        </div>
      </div>

      <section className="content flow">
        {page.type === 'read' && (
          <article className="flow" dangerouslySetInnerHTML={{ __html: safeBody }} />
        )}
        {page.type === 'exercise' && (
          <ExercisePanel page={page} langKey={state.lang} stored={stored} onSave={handleSave} texts={texts} />
        )}

        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="row" style={{ gap: '0.5rem' }}>
            {prevPage && (
              <Link className="pill" to={`/modules/${module.id}/${prevPage.id}`}>
                {texts.prev}
              </Link>
            )}
            {nextPage ? (
              <Link className="pill" to={`/modules/${module.id}/${nextPage.id}`}>
                {texts.next}
              </Link>
            ) : (
              <button className="ghost" disabled>
                {texts.finish}
              </button>
            )}
          </div>
          <button className="primary" onClick={() => onComplete(page.id)}>
            {texts.markComplete}
          </button>
        </div>
      </section>
    </div>
  );
}

export default ModuleDetailView;
