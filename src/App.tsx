import { useEffect, useRef } from 'react'
import { Footer, Nav } from './components/Chrome'
import Home from './pages/Home'
import { About, CaseStudies, CaseStudyPage, Contact, Experience, NotFound, Philosophy, SystemPage, Systems } from './pages/Pages'
import { RouterProvider, useRouter, type Route } from './lib/router'

function Page({ route }: { route: Route }) {
  switch (route.name) {
    case 'home': return <Home />
    case 'about': return <About />
    case 'philosophy': return <Philosophy />
    case 'experience': return <Experience />
    case 'case-studies': return <CaseStudies />
    case 'case-study': return <CaseStudyPage slug={route.slug} />
    case 'systems': return <Systems />
    case 'system': return <SystemPage slug={route.slug} />
    case 'contact': return <Contact />
    default: return <NotFound />
  }
}

function Shell() {
  const { route } = useRouter()
  const main = useRef<HTMLElement>(null)
  const first = useRef(true)
  const key = JSON.stringify(route)

  // On every page change: start at the top and move focus to the main content,
  // so keyboard and screen reader users land on the new page, not the old link.
  useEffect(() => {
    if (first.current) { first.current = false; return }
    window.scrollTo({ top: 0, behavior: 'instant' })
    main.current?.focus({ preventScroll: true })
  }, [key])

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus() }}>Skip to content</a>
      <Nav />
      <main id="main" ref={main} tabIndex={-1} style={{ outline: 'none' }}>
        <Page key={key} route={route} />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  )
}
