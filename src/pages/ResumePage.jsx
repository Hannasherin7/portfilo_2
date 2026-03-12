function ResumePage() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Resume</p>
        <h1>A readable summary plus the downloadable PDF.</h1>
        <div className="hero-actions">
          <a className="button primary" href="/hanna-resume.pdf" download="Hanna-Sherin-Resume.pdf">
            Download resume
          </a>
          <a className="button secondary" href="/hanna-resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
      </section>

      <section className="resume-frame">
        <iframe src="/hanna-resume.pdf" title="Hanna Sherin Resume" />
      </section>
    </main>
  )
}

export default ResumePage
