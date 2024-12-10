interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'Portfolio Website',
    description: `My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a blog section with MDX support and GitHub Discussions integration for comments.`,
    href: 'https://github.com/ketankshukla/ketan-portfolio',
  },
]

export default projectsData
