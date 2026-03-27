import { Link } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { projects } from '../portfolioData'

function ProjectsPage() {
  return (
    <main className="page inner-page site-editorial-page">
      <RevealSection className="site-editorial-page-hero" delay={40}>
        <p className="eyebrow">Projects</p>
        <h1>Selected work across programming-focused builds and product-style systems.</h1>
        <p className="lede">
          These projects reflect how I think about workflows, clarity, and system structure.
        </p>
      </RevealSection>

      <RevealSection className="site-editorial-project-list" delay={90}>
        {projects.map((project, index) => (
          <article className="site-editorial-project-row" key={project.slug}>
            <div className="site-editorial-project-index">0{index + 1}</div>
            <div className="site-editorial-project-head">
              <p className="card-label">{project.eyebrow}</p>
              <h2>{project.name}</h2>
            </div>
            <p className="site-editorial-project-summary">{project.summary}</p>
            <Link className="text-link" to={`/projects/${project.slug}`}>
              Open case study
            </Link>
          </article>
        ))}
      </RevealSection>
    </main>
  )
}

export default ProjectsPage
