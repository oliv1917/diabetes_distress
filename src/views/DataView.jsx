function downloadBlob(content, fileName) {
  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

function DataView({ texts, onDownload, onClear }) {
  const handleDownload = () => {
    const data = onDownload();
    downloadBlob(data, 'dd-data.json');
  };

  return (
    <div className="page">
      <div className="hero">
        <h1>{texts.dataTitle}</h1>
      </div>
      <section className="content flow">
        <p>{texts.dataInfo}</p>
        <div className="cta-row">
          <button id="downloadBtn" onClick={handleDownload}>
            {texts.downloadData}
          </button>
          <div className="spacer" />
          <button className="ghost" id="clearBtn" onClick={onClear}>
            {texts.clearData}
          </button>
        </div>
      </section>
    </div>
  );
}

export default DataView;
