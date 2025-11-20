function collectNotes(exercises) {
  const notes = [];
  const walk = (obj) => {
    if (!obj) return;
    Object.values(obj).forEach((v) => {
      if (typeof v === 'string') {
        const trimmed = v.trim();
        if (trimmed) notes.push(trimmed);
      } else if (typeof v === 'object') {
        walk(v);
      }
    });
  };
  walk(exercises);
  return notes;
}

function JournalView({ state, texts }) {
  const notes = collectNotes(state.exercises);

  return (
    <div className="page">
      <div className="hero">
        <h1>{texts.journal}</h1>
      </div>
      <section className="content flow">
        {notes.length === 0 && <div className="tiny">{texts.journalEmpty}</div>}
        {notes.length > 0 && (
          <div className="timeline">
            {notes.map((note, idx) => (
              <div key={`${idx}-${note.slice(0, 10)}`} className="item">
                {note}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default JournalView;
