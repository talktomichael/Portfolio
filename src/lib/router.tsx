import { createContext, useCallback, useContext, useEffect, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'

// Two modes. "path" gives clean URLs (/case-studies/custom-hris) for the deployed site.
// "hash" uses plain #names (#case-custom-hris) for hosts that cannot rewrite URLs,
// such as the Claude preview. Set VITE_ROUTER=hash at build time to switch.
export const MODE: 'path' | 'hash' = import.meta.env.VITE_ROUTER === 'hash' ? 'hash' : 'path'

export type Route =
  | { name: 'home' | 'about' | 'philosophy' | 'experience' | 'case-studies' | 'systems' | 'contact' | 'not-found' }
  | { name: 'case-study'; slug: string }
  | { name: 'system'; slug: string }

const simple = ['about', 'philosophy', 'experience', 'case-studies', 'systems', 'contact'] as const

export function parse(): Route {
  if (MODE === 'hash') {
    const h = decodeURIComponent(location.hash.replace(/^#/, ''))
    if (!h || h === 'home') return { name: 'home' }
    if ((simple as readonly string[]).includes(h)) return { name: h as (typeof simple)[number] }
    if (h.startsWith('case-')) return { name: 'case-study', slug: h.slice(5) }
    if (h.startsWith('system-')) return { name: 'system', slug: h.slice(7) }
    return { name: 'not-found' }
  }
  const p = location.pathname.replace(/\/+$/, '') || '/'
  if (p === '/') return { name: 'home' }
  const parts = p.split('/').filter(Boolean)
  if (parts.length === 1 && (simple as readonly string[]).includes(parts[0])) return { name: parts[0] as (typeof simple)[number] }
  if (parts.length === 2 && parts[0] === 'case-studies') return { name: 'case-study', slug: parts[1] }
  if (parts.length === 2 && parts[0] === 'systems') return { name: 'system', slug: parts[1] }
  return { name: 'not-found' }
}

export function href(r: Route): string {
  if (MODE === 'hash') {
    if (r.name === 'home') return '#home'
    if (r.name === 'case-study') return `#case-${r.slug}`
    if (r.name === 'system') return `#system-${r.slug}`
    return `#${r.name}`
  }
  if (r.name === 'home') return '/'
  if (r.name === 'case-study') return `/case-studies/${r.slug}`
  if (r.name === 'system') return `/systems/${r.slug}`
  return `/${r.name}`
}

/** The top-level section a route belongs to, for the active state in the navigation. */
export function section(r: Route): string {
  if (r.name === 'case-study') return 'case-studies'
  if (r.name === 'system') return 'systems'
  return r.name
}

type Ctx = { route: Route; go: (r: Route) => void }
const RouterCtx = createContext<Ctx>({ route: { name: 'home' }, go: () => {} })

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(parse)

  useEffect(() => {
    const onChange = () => setRoute(parse())
    const evt = MODE === 'hash' ? 'hashchange' : 'popstate'
    window.addEventListener(evt, onChange)
    return () => window.removeEventListener(evt, onChange)
  }, [])

  const go = useCallback((r: Route) => {
    if (MODE === 'hash') {
      location.hash = href(r).slice(1)
    } else {
      history.pushState(null, '', href(r))
      setRoute(parse())
    }
  }, [])

  return <RouterCtx.Provider value={{ route, go }}>{children}</RouterCtx.Provider>
}

export const useRouter = () => useContext(RouterCtx)

type LinkProps = { to: Route } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { go } = useRouter()
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    go(to)
  }
  return (
    <a href={href(to)} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
