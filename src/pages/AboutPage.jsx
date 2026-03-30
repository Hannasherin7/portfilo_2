import { useEffect, useMemo, useRef, useState } from 'react'
import RevealSection from '../components/RevealSection'
import { education, experience, extras, profile, skills } from '../portfolioData'

const skillGroups = Object.entries(skills)

function AboutPage() {
  const sections = useMemo(
    () => [
      {
        id: 'intro',
        label: 'About',
        title: 'Personal profile and current snapshot',
        images: [
          '/about-film-intro-1.svg',
          '/about-film-intro-2.svg',
          '/about-film-intro-3.svg',
        ],
      },
      {
        id: 'experience',
        label: 'Experience',
        title: 'Recent roles and project impact',
        images: [
          '/about-film-experience-1.svg',
          '/about-film-experience-2.svg',
          '/about-film-experience-3.svg',
        ],
      },
      {
        id: 'capabilities',
        label: 'Capabilities',
        title: 'Tools, stacks, and technical foundation',
        images: [
          '/about-film-capabilities-1.svg',
          '/about-film-capabilities-2.svg',
          '/about-film-capabilities-3.svg',
        ],
      },
      {
        id: 'details',
        label: 'Details',
        title: 'Education, strengths, and life beyond work',
        images: [
          '/about-film-details-1.svg',
          '/about-film-details-2.svg',
          '/about-film-details-3.svg',
        ],
      },
    ],
    []
  )
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [sectionHeights, setSectionHeights] = useState(() =>
    sections.reduce((accumulator, section) => {
      accumulator[section.id] = 1
      return accumulator
    }, {})
  )
  const [jumpedSection, setJumpedSection] = useState('')
  const sectionRefs = useRef({})

  useEffect(() => {
    const elements = sections.map((section) => sectionRefs.current[section.id]).filter(Boolean)

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visibleEntries.length) {
          return
        }

        const nextSection = visibleEntries[0].target.getAttribute('data-about-section')

        if (nextSection) {
          setActiveSection(nextSection)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: '-12% 0px -12% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    if (!jumpedSection) {
      return undefined
    }

    const timeout = window.setTimeout(() => {
      setJumpedSection('')
    }, 900)

    return () => window.clearTimeout(timeout)
  }, [jumpedSection])

  const jumpToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]

    if (!element) {
      return
    }

    const offset = 28
    const top = window.scrollY + element.getBoundingClientRect().top - offset

    setActiveSection(sectionId)
    setJumpedSection(sectionId)

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const elements = sections.map((section) => sectionRefs.current[section.id]).filter(Boolean)

    if (!elements.length || typeof ResizeObserver === 'undefined') {
      return undefined
    }

    const updateHeights = () => {
      setSectionHeights((previous) => {
        const next = { ...previous }

        elements.forEach((element) => {
          const id = element.getAttribute('data-about-section')

          if (id) {
            next[id] = Math.max(element.offsetHeight, 1)
          }
        })

        return next
      })
    }

    updateHeights()

    const observer = new ResizeObserver(() => {
      updateHeights()
    })

    elements.forEach((element) => observer.observe(element))
    window.addEventListener('resize', updateHeights)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeights)
    }
  }, [sections])

  return (
    <main className="page inner-page about-editorial-page about-film-layout">
      <div className="about-film-content">
        <RevealSection
          className={`about-editorial-hero ${jumpedSection === 'intro' ? 'is-jumped-to' : ''}`}
          delay={40}
          data-about-section="intro"
          ref={(node) => {
            sectionRefs.current.intro = node
          }}
        >
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

        <RevealSection
          className={`about-editorial-section ${jumpedSection === 'experience' ? 'is-jumped-to' : ''}`}
          delay={80}
          data-about-section="experience"
          ref={(node) => {
            sectionRefs.current.experience = node
          }}
        >
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

        <RevealSection
          className={`about-editorial-section ${jumpedSection === 'capabilities' ? 'is-jumped-to' : ''}`}
          delay={120}
          data-about-section="capabilities"
          ref={(node) => {
            sectionRefs.current.capabilities = node
          }}
        >
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

        <RevealSection
          className={`about-editorial-grid ${jumpedSection === 'details' ? 'is-jumped-to' : ''}`}
          delay={160}
          data-about-section="details"
          ref={(node) => {
            sectionRefs.current.details = node
          }}
        >
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
      </div>

      <aside className="about-film-rail" aria-label="Section film preview">
        <div className="about-film-sticky">
          <div className="about-film-strip">
            <div className="about-film-perforation about-film-perforation-top" aria-hidden="true" />
            <div className="about-film-perforation about-film-perforation-bottom" aria-hidden="true" />

            {sections.map((section, index) => (
              <button
                type="button"
                className={`about-film-frame ${activeSection === section.id ? 'is-active' : ''}`}
                key={section.id}
                style={{ flex: `${sectionHeights[section.id] || 1} 1 0%` }}
                onClick={() => jumpToSection(section.id)}
                aria-label={`Jump to ${section.label} section`}
              >
                <div className="about-film-image-stack" aria-hidden="true">
                  {section.images.map((image, imageIndex) => (
                    <div
                      className="about-film-image"
                      key={`${section.id}-${imageIndex}`}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: `center ${18 + imageIndex * 18}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="about-film-caption">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div className="about-film-caption-copy">
                    <span>{section.label}</span>
                    <small>{section.title}</small>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </main>
  )
}

export default AboutPage
