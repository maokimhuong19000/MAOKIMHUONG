import { useRouter } from 'next/router'
import Head from 'next/head'
import { getProjects } from '../../utils/api'

export async function getStaticPaths() {
  const paths = getProjects().map(p => ({ params: { id: p.id.toString() } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = getProjects().find(p => p.id.toString() === params.id)
  return { props: { project } }
}

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:image" content={project.thumbnail} />
      </Head>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </>
  )
}