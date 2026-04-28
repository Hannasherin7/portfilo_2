import { useEffect, useRef, useState } from 'react'
import RevealSection from '../components/RevealSection'
import { education, experience, extras, profile, skills } from '../portfolioData'

const skillGroups = Object.entries(skills)
const heroHeadline = "Hi, I'm Hanna. I build software that feels clear, dependable, and grounded in strong logic."

function AboutPage() {
  const sectionRefs = useRef([])
  const capabilitiesPanelRef = useRef(null)
  const [heroSoftened, setHeroSoftened] = useState(false)

  useEffect(() => {
    const updateHeroState = () => {
      setHeroSoftened(window.scrollY > 110)
    }

    updateHeroState()
    window.addEventListener('scroll', updateHeroState, { passive: true })

    return () => window.removeEventListener('scroll', updateHeroState)
  }, [])

  useEffect(() => {
    const panel = capabilitiesPanelRef.current

    if (!panel || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return undefined
    }

    let frameId = 0

    const updateFromPointer = (event) => {
      const rect = panel.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      const rotateX = (0.5 - y) * 8
      const rotateY = (x - 0.5) * 10

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        panel.style.setProperty('--capability-x', `${x}`)
        panel.style.setProperty('--capability-y', `${y}`)
        panel.style.setProperty('--capability-rotate-x', `${rotateX}deg`)
        panel.style.setProperty('--capability-rotate-y', `${rotateY}deg`)
      })
    }

    const resetPointer = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        panel.style.setProperty('--capability-x', '0.5')
        panel.style.setProperty('--capability-y', '0.5')
        panel.style.setProperty('--capability-rotate-x', '0deg')
        panel.style.setProperty('--capability-rotate-y', '0deg')
      })
    }

    panel.style.setProperty('--capability-x', '0.5')
    panel.style.setProperty('--capability-y', '0.5')
    panel.style.setProperty('--capability-rotate-x', '0deg')
    panel.style.setProperty('--capability-rotate-y', '0deg')

    panel.addEventListener('pointermove', updateFromPointer)
    panel.addEventListener('pointerleave', resetPointer)

    return () => {
      panel.removeEventListener('pointermove', updateFromPointer)
      panel.removeEventListener('pointerleave', resetPointer)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <main className="page about-page">
      <RevealSection className={`about-hero${heroSoftened ? ' is-softened' : ''}`} delay={40}>
        <div className="about-hero-copy">
          <p className="eyebrow">About</p>
          <h1 className="about-hero-headline about-hero-copy-item">{heroHeadline}</h1>
          <p className="lede narrow">{profile.intro}</p>
          <p className="about-hero-note">
            I currently work on backend-heavy development, and I am especially interested in
            programming-focused work where data structures, algorithms, and system logic matter.
          </p>
        </div>

        <aside className="about-hero-visual" aria-hidden="true">
          <div className="about-tech-cluster cluster-one">
            <span className="cluster-node" />
            <span className="cluster-node" />
            <span className="cluster-node" />
            <span className="cluster-link link-a" />
            <span className="cluster-link link-b" />
          </div>
          <div className="about-tech-cluster cluster-two">
            <span className="cluster-node small" />
            <span className="cluster-node small" />
            <span className="cluster-node small" />
            <span className="cluster-link vertical" />
            <span className="cluster-link horizontal" />
          </div>
          <div className="about-tech-chip chip-one" />
          <div className="about-tech-chip chip-two" />
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
      </RevealSection>

      <RevealSection
        className="about-curtain-section about-story-grid"
        delay={80}
        ref={(node) => {
          sectionRefs.current[0] = node
        }}
      >
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
            <h3>Programming depth with dependable software structure.</h3>
            <p>
              I am most comfortable on projects that need strong logic, structured APIs, and data
              models that stay readable as the system grows.
            </p>
          </div>
          <div className="side-illustration browser-illustration" aria-hidden="true">
            <span className="browser-top" />
            <span className="browser-panel left" />
            <span className="browser-panel right" />
          </div>
        </article>
      </RevealSection>

      <RevealSection
        className="about-curtain-section section split"
        delay={120}
        ref={(node) => {
          sectionRefs.current[1] = node
        }}
      >
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
      </RevealSection>

      <RevealSection
        className="about-curtain-section section about-capabilities"
        delay={160}
        ref={(node) => {
          sectionRefs.current[2] = node
        }}
      >
        <div className="section-heading capabilities-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Tools, stacks, and foundations I keep returning to.</h2>
        </div>
        <article
          className="panel illustrated-panel about-capabilities-panel"
          ref={capabilitiesPanelRef}
        >
          <div className="about-capabilities-frame">
            <span className="capabilities-orbit orbit-one" aria-hidden="true" />
            <span className="capabilities-orbit orbit-two" aria-hidden="true" />
            <span className="capabilities-orbit orbit-three" aria-hidden="true" />
          </div>
          <div className="skill-groups">
            {skillGroups.map(([group, items]) => (
              <div key={group} className="skill-group-card">
                <p className="group-title">{group}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item} className="skill-pill">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="panel-illustration chips-illustration" aria-hidden="true">
            <span />
            <span />
            <span />
            <i className="chip-core" />
          </div>
        </article>
      </RevealSection>

      <RevealSection
        className="about-curtain-section section notes-grid"
        delay={200}
        ref={(node) => {
          sectionRefs.current[3] = node
        }}
      >
        <article className="panel about-info-panel">
          <div className="panel-icon graduate-illustration" aria-hidden="true" />
          <h3>Education</h3>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.school}>
                {item.degree ? <p className="group-title">{item.degree}</p> : null}
                <p>{item.school}</p>
                <p>
                  {item.period} - {item.detail}
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
      </RevealSection>
    </main>
  )
}

export default AboutPage
