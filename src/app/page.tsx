import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoCurran from '@/images/logos/curran.svg'
import logoGeorgetown from '@/images/logos/georgetown.jpeg'
import logoDos from '@/images/logos/dos.svg'
import logoDLS from '@/images/logos/dls.svg'
import logoLmu from '@/images/logos/lmu.jpeg'

function EducationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
    viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"

        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/90 dark:stroke-zinc-300"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none overflow-hidden items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
        dangerouslySetInnerHTML={{__html: role.company}}>
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Curran Catalog LLC.',
      title: 'Lead Software Engineer',
      logo: logoCurran,
      start: 'Jul 2018',
      end: 'May 2023',
    },
    {
      company: 'Curran Catalog LLC.',
      title: 'Software Engineer Intern',
      logo: logoCurran,
      start: 'Jan 2018',
      end: 'Jun 2018',
    },
  ]

  let education: Array<Role> = [
    {
      company: 'Georgetown University',
      title: 'Master of Science in Computer Science',
      logo: logoGeorgetown,
      start: 'Aug 2024',
      end: 'Dec 2025',
    },
    {
      company: 'Ludwig-Maximilians-Universit&auml;t M&uuml;nchen',
      title: 'Bachelor of Science in Computer Science',
      logo: logoLmu,
      start: 'Sep 2018',
      end: 'Jun 2024',
    },
    {
      company: 'U.S. Department of State',
      title: 'Congress-Bundestag-Youth-Exchange',
      logo: logoDos,
      start: 'Aug 2017',
      end: 'Jul 2018',
    },
  ]

  return (
    <div className="">
      <div className="flex gap-x-24 gap-y-10 flex-col lg:flex-row">
        <div className="w-full">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Experience</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
        </div>
        <div className="w-full">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <EducationIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Education</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {education.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-12 flex gap-x-4 sm:gap-x-10">
        <Button
          href="mailto:marco@singhof.dev"
          variant="primary"
          className="group mt-6 w-full"
        >
          Contact
          <MailIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:stroke-zinc-100 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        <Button
          href="projects"
          variant="secondary"
          className="group mt-6 w-full"
        >
          See Projects
        </Button>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer, amateur cook, and multilingual in code and
            conversation.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Marco, a software engineer based in Washington, D.C. I'm
            passionate about building software that helps people and businesses.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/singhofmarco"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/marco-singhof/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-10 gap-y-20 lg:max-w-none">
          <Resume />
        </div>
      </Container>
    </>
  )
}
