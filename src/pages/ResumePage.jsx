import RevealSection from '../components/RevealSection'

function ResumePage() {
  return (
    <main className="page inner-page site-editorial-page">
      <RevealSection className="site-editorial-page-hero" delay={40}>
        <p className="eyebrow">Resume</p>
        <h1>A readable summary plus the downloadable PDF.</h1>
        <p className="lede">
          You can view the resume online here or download the PDF directly.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/hanna-resume.pdf" download="Hanna-Sherin-Resume.pdf">
            Download resume
          </a>
          <a className="button secondary" href="/hanna-resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
      </RevealSection>

      <RevealSection className="site-editorial-resume-frame" delay={90}>
        <iframe src="/hanna-resume.pdf" title="Hanna Sherin Resume" />
      </RevealSection>
    </main>
  )
}

export default ResumePage
