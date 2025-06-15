import Link from 'next/link'
import { getProjects } from '../utils/api'
import Navbar from "@/components/Navbar";

export async function getStaticProps() {
  const projects = getProjects()
  return { props: { projects } }
}

export default function Projects({ projects }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
<Navbar/>
      <h1>My Projects</h1>
      <p>Here are some of the key projects I've worked on recently.</p>

      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#fff'
            }}
          >
            <h2>{project.title}</h2>
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
            />
            <p>{project.description}</p>
            <Link href={`/projects/${project.id}`}>
              <span style={{ color: '#0070f3', cursor: 'pointer' }}>View Details →</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
