import { education, experience, extras, profile, skills } from '../portfolioData'

const skillGroups = Object.entries(skills)

function AboutPage() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About</p>
          <h1>Hi, I&apos;m Hanna. I build web products that feel calm, clear, and dependable.</h1>
          <p className="lede narrow">{profile.intro}</p>
          <p className="about-hero-note">
            I currently work as a PHP Laravel Developer, but I also enjoy building across the full
            stack, especially when interface clarity and backend structure need to work together.
          </p>
        </div>

        <aside className="about-hero-visual" aria-hidden="true">
          <div className="about-badge badge-one">React</div>
          <div className="about-badge badge-two">Laravel</div>
          <div className="about-badge badge-three">MLM</div>
          <div className="about-desk-card">
            <div className="about-window">
              <span />
              <span />
              <span />
            </div>
            <div className="about-desk-illustration">
              <div className="desk-glow" />
              <div className="desk-laptop" />
              <div className="desk-mug" />
              <div className="desk-plant" />
              <div className="desk-book" />
              <div className="mini-person">
                <div className="mini-hair" />
                <div className="mini-head" />
                <div className="mini-body" />
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="about-story-grid">
        <article className="about-story-card feature-panel">
          <div className="about-card-copy">
            <p className="card-label">A quick intro</p>
            <h3>I like thoughtful products more than flashy ones.</h3>
            <p>{profile.personalStatement}</p>
          </div>
          <div className="side-illustration notebook-illustration" aria-hidden="true">
            <span className="note-sheet" />
            <span className="note-line" />
            <span className="note-line second" />
            <span className="note-pin" />
          </div>
        </article>

        <article className="about-story-card feature-panel">
          <div className="about-card-copy">
            <p className="card-label">What keeps me interested</p>
            <h3>Frontend clarity with backend discipline.</h3>
            <p>
              I am most comfortable on projects that need clean user flows, structured APIs, and
              data models that stay readable as the system grows.
            </p>
          </div>
          <div className="side-illustration browser-illustration" aria-hidden="true">
            <span className="browser-top" />
            <span className="browser-panel left" />
            <span className="browser-panel right" />
          </div>
        </article>
      </section>

      <section className="section split">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Recent roles and the kind of work behind them.</h2>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item illustrated-timeline" key={item.role}>
              <div className="timeline-illustration" aria-hidden="true">
                <span className={`timeline-icon ${index === 0 ? 'network' : 'stack'}`} />
              </div>
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.role}
                  <span>{item.company}</span>
                </h3>
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
      </section>

      <section className="section about-capabilities">
        <div className="section-heading capabilities-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Tools, stacks, and foundations I keep returning to.</h2>
        </div>
        <article className="panel illustrated-panel">
          <div className="skill-groups">
            {skillGroups.map(([group, items]) => (
              <div key={group}>
                <p className="group-title">{group}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="panel-illustration chips-illustration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </article>
      </section>

      <section className="section notes-grid">
        <article className="panel about-info-panel">
          <div className="panel-icon graduate-illustration" aria-hidden="true" />
          <h3>Education</h3>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.school}>
                {item.degree ? <p className="group-title">{item.degree}</p> : null}
                <p>{item.school}</p>
                <p>
                  {item.period} • {item.detail}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel about-info-panel">
          <div className="panel-icon star-illustration" aria-hidden="true" />
          <h3>Strengths</h3>
          <ul className="tag-list">
            {extras.traits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel about-info-panel">
          <div className="panel-icon flower-illustration" aria-hidden="true" />
          <h3>Beyond work</h3>
          <ul className="tag-list">
            {extras.interests.concat(extras.activities).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
