import RevealSection from '../components/RevealSection'
import { education, experience, extras, profile, skills } from '../portfolioData'

const skillGroups = Object.entries(skills)

function AboutPage() {
  return (
    <main className="page inner-page about-editorial-page">
      <RevealSection className="about-editorial-hero" delay={40}>
        <div className="about-editorial-copy">
          <p className="eyebrow">About</p>
          <h1>Software developer focused on clarity, structure, and dependable systems.</h1>
          <p className="lede">{profile.intro}</p>
          <p className="about-editorial-note">{profile.personalStatement}</p>
        </div>

        <aside className="about-editorial-meta">
          <div className="about-editorial-meta-block">
            <p className="card-label">Currently</p>
            <h2>{profile.shortName}</h2>
            <p>{profile.summary}</p>
          </div>

          <div className="about-editorial-meta-list">
            <div>
              <p className="card-label">Location</p>
              <p>{profile.location}</p>
            </div>
            <div>
              <p className="card-label">Email</p>
              <p>{profile.email}</p>
            </div>
            <div>
              <p className="card-label">Phone</p>
              <p>{profile.phone}</p>
            </div>
          </div>
        </aside>
      </RevealSection>

      <RevealSection className="about-editorial-section" delay={80}>
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Recent roles and the work behind them.</h2>
        </div>

        <div className="about-editorial-timeline">
          {experience.map((item) => (
            <article className="about-editorial-row" key={item.role}>
              <div className="about-editorial-period">{item.period}</div>
              <div className="about-editorial-role">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <div className="about-editorial-body">
                <p>{item.description}</p>
                <ul className="bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="about-editorial-section" delay={120}>
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Tools, stacks, and fundamentals I keep returning to.</h2>
        </div>

        <div className="about-editorial-skills">
          {skillGroups.map(([group, items]) => (
            <article className="about-editorial-skill-group" key={group}>
              <p className="group-title">{group}</p>
              <div className="about-editorial-chip-wrap">
                {items.map((item) => (
                  <span className="about-editorial-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="about-editorial-grid" delay={160}>
        <article className="about-editorial-panel">
          <p className="card-label">Education</p>
          {education.map((item) => (
            <div key={item.school} className="about-editorial-panel-block">
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <p>
                {item.period} - {item.detail}
              </p>
            </div>
          ))}
        </article>

        <article className="about-editorial-panel">
          <p className="card-label">Strengths</p>
          <div className="about-editorial-chip-wrap">
            {extras.traits.map((item) => (
              <span className="about-editorial-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="about-editorial-panel">
          <p className="card-label">Beyond work</p>
          <div className="about-editorial-chip-wrap">
            {extras.interests.concat(extras.activities).map((item) => (
              <span className="about-editorial-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </RevealSection>
    </main>
  )
}

export default AboutPage
