import { Download, Menu, X } from 'lucide-react'
import { Linkedin } from './Icons'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { site } from '../content/site'
import { Link, MODE, section, useRouter, type Route } from '../lib/router'

export const navItems: { to: Route; label: string }[] = [
  { to: { name: 'home' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'philosophy' }, label: 'Philosophy' },
  { to: { name: 'experience' }, label: 'Experience' },
  { to: { name: 'case-studies' }, label: 'Case Studies' },
  { to: { name: 'systems' }, label: 'Systems & Demonstrations' },
  { to: { name: 'contact' }, label: 'Contact' },
]

/**
 * Download CV. On the deployed site this downloads the real PDF. The Claude
 * preview blocks downloads, so there the button explains that instead of
 * silently doing nothing.
 */
export function CvButton({ className = 'btn btn--secondary', children }: { className?: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false)
  const label = children ?? (
    <>
      <Download aria-hidden="true" /> Download CV
    </>
  )
  if (MODE === 'path') {
    return (
      <a className={className} href={site.cvPath} download={site.cvFileName} type="application/pdf">
        {label}
      </a>
    )
  }
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && (
        <Dialog onClose={() => setOpen(false)} title="CV download">
          <p>This preview can’t download files. On the published site, this button downloads {site.cvFileName}.</p>
          <p>
            You can also reach Michael on <a href={site.linkedin}>LinkedIn</a> or at {site.email}.
          </p>
        </Dialog>
      )}
    </>
  )
}

export function Dialog({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-t" onClick={(e) => e.stopPropagation()}>
        <h2 id="dlg-t" style={{ fontSize: 'var(--fs-lg)' }}>{title}</h2>
        {children}
        <div className="actions">
          <button ref={ref} className="btn btn--primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export function Nav() {
  const { route } = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const current = section(route)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile panel whenever the page changes, and on Escape.
  useEffect(() => setOpen(false), [route])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap">
          <Link to={{ name: 'home' }} className="brand" aria-label="Michael Ebong, home">
            <span className="brand-mark" aria-hidden="true">ME</span>
            <span className="brand-name">Michael Ebong</span>
          </Link>
          <nav aria-label="Main">
            <ul className="nav-links">
              {navItems.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} aria-current={current === n.to.name ? 'page' : undefined}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-tools">
            <a className="icon-btn" href={site.linkedin} aria-label="LinkedIn profile (opens LinkedIn)" target="_blank" rel="noopener noreferrer">
              <Linkedin aria-hidden="true" />
            </a>
            <CvButton className="btn btn--primary btn--cv" />
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-expanded={open}
              aria-controls="mobile-panel"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-panel" className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((n) => (
              <li key={n.label}>
                <Link to={n.to} aria-current={current === n.to.name ? 'page' : undefined} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="actions">
          <CvButton className="btn btn--primary" />
          <a className="btn btn--secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>Michael Ebong</h2>
            <p style={{ marginTop: 'var(--s-2)' }}>{site.role}</p>
            <p className="small">{site.location}</p>
          </div>
          <nav aria-label="Footer">
            <ul>
              {navItems.map((n) => (
                <li key={n.label}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <CvButton className="footer-cv" >Download CV</CvButton>
            </li>
          </ul>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Michael Ebong</span>
          <span>Demonstrations use fictional organisations and synthetic data.</span>
        </div>
      </div>
    </footer>
  )
}
