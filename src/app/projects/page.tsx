import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCurran from '@/images/logos/curran.svg'
import logoDls from '@/images/logos/dls.svg'
import logoTastebuds from '@/images/logos/tastebuds-ai.svg'
import logoDarkFolders7 from '@/images/logos/darkfolders7.png'
import logoNoSlowAnimations from '@/images/logos/noslowanimations.png'

const projects = [
  {
    name: 'Tastebuds AI',
    description:
      'Recipe generation app that makes it fun to try new dishes in the kitchen.',
    link: { href: 'https://www.tastebudsai.com', label: 'tastebudsai.com' },
    logo: logoTastebuds,
    year: '2024-2025',
  },
  {
    name: 'Curran Online',
    description: "Client's website selling high-end outdoor furniture.",
    link: { href: 'https://www.curranonline.com', label: 'curranonline.com' },
    logo: logoCurran,
    year: '2018-2023',
  },
  {
    name: 'Sisalcarpet.com',
    description: "Client's website selling custom area rugs and flooring.",
    link: { href: 'https://www.sisalcarpet.com', label: 'sisalcarpet.com' },
    logo: logoCurran,
    year: '2018-2023',
  },
  {
    name: 'Dental-Labor Singhof',
    description: "Client's website offering dental technician services.",
    link: {
      href: 'https://www.dentallabor-singhof.de/',
      label: 'dentallabor-singhof.de',
    },
    logo: logoDls,
    year: '2023',
  },
  {
    name: 'DarkFolders7',
    description: 'Jailbreak tweak that turns folders dark on iOS 7 & 8.',
    link: {
      href: 'https://github.com/singhofmarco/DarkFolders7',
      label: 'github.com',
    },
    logo: logoDarkFolders7,
    year: '2013',
  },
  {
    name: 'NoSlowAnimations',
    description:
      'Speeds up animations on jailbroken iOS 7-9 with 2+ mio downloads.',
    link: {
      href: 'https://github.com/singhofmarco/NoSlowAnimations',
      label: 'github.com',
    },
    logo: logoNoSlowAnimations,
    year: '2013',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've made because I thought they were cool.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've Made"
      intro="I love building things with code, from full applications and websites to small tools I enjoy using myself. Here are a few of them. If you’re looking for a developer who can take your project from idea to finished product (0 to 1), let's chat."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="flex gap-x-3">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="h-9 w-9" />
              </div>
              <div>
                <h2 className="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">
                    {project.name}
                  </Card.Link>
                </h2>
                <span className="sr-only">Year</span>
                <Card.Eyebrow>{project.year}</Card.Eyebrow>
              </div>
            </div>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
