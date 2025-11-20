import { Link } from 'react-router-dom';
import { LANG } from '../data/content.js';

function moduleProgress(module, completed) {
  const done = module.pages.filter((p) => completed[p.id]).length;
  return Math.round((done / module.pages.length) * 100);
}

function ModulesView({ texts, langKey, completed, embedded = false, onNavigate }) {
  const modules = LANG[langKey].modulesData;

  return (
    <div className={embedded ? '' : 'page'}>
      {!embedded && (
        <div className="hero">
          <h1>{texts.modules}</h1>
          <p className="muted">{texts.progressTitle}</p>
        </div>
      )}
      <div className="content">
        {modules.map((m) => {
          const pct = moduleProgress(m, completed || {});
          return (
            <Link
              key={m.id}
              to={`/modules/${m.id}/${m.pages[0].id}`}
              className="mod"
              onClick={onNavigate}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', alignItems: 'center' }}
            >
              <div>
                <div className="t">
                  {m.icon && `${m.icon} `}
                  {m.title}
                </div>
                <div className="tiny">{m.goal}</div>
                <div className="progressbar">
                  <i style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="badge">{pct}%</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ModulesView;
