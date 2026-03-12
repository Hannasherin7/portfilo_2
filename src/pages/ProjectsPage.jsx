import { Link } from 'react-router-dom'
import { projects } from '../portfolioData'

function ProjectsPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1>Selected work across Laravel, MERN, and product-style web systems.</h1>
        <p className="lede narrow">
          These projects reflect how I think about structure, workflows, and user-facing clarity.
        </p>
      </section>

      <section className="project-listing">
        {projects.map((project, index) => (
          <article className={`project-row ${index % 2 === 0 ? 'left' : 'right'}`} key={project.slug}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-row-body">
              <p className="card-label">{project.eyebrow}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <ul className="mini-tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                Open case study
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage
