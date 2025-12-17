import clsx from 'clsx'

export function Badge({
  children,
  noHover,
}: {
  children: React.ReactNode
  noHover: boolean
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-500 ring-1 ring-inset  ring-zinc-500/10 transition dark:bg-zinc-400/10 dark:text-zinc-400 dark:ring-zinc-400/20',
        !noHover &&
          'group-hover:bg-zinc-200 group-hover:text-zinc-600 group-hover:dark:bg-zinc-500/10 group-hover:dark:text-zinc-300',
      )}
    >
      {children}
    </span>
  )
}
