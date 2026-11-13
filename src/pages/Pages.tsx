import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Linkedin } from '../components/Icons'
import { useEffect, useRef, useState } from 'react'
import { ContactForm } from '../components/ContactForm'
import { CvButton } from '../components/Chrome'
import { demoBySlug } from '../components/demos/Demos'
import { Blocks, CaseStudyCard, Framework, PageHead, Table } from '../components/Shared'
import { caseStudies, caseStudyBySlug } from '../content/caseStudies'
import { journey, roles } from '../content/experience'
import { learning, otherLearning, principles, techPrinciples, technical } from '../content/practice'
import { site, whatsappUrl } from '../content/site'
import { confidentialityStatement, fictionalOrg, systemBySlug, systems } from '../content/systems'
import { usePageMeta, usePrefersReducedMotion } from '../lib/hooks'
import { Link } from '../lib/router'

const asset = (f: string) => import.meta.env.BASE_URL + f

/* ---------------- About ---------------- */

export function About() {
  usePageMeta('About', 'How Michael Ebong came to People Operations, what shaped his approach, and where he is heading.', '/about')
  return (
    <>
      <section className="wrap page-head">
        <div className="split">
          <div className="portrait">
            <picture>
              <source type="image/webp" srcSet={`${asset("michael-ebong-560.webp")} 560w, ${asset("michael-ebong-900.webp")} 900w`} sizes="(min-width: 960px) 26rem, 90vw" />
              <img src={asset("michael-ebong-560.jpg")} srcSet={`${asset("michael-ebong-560.jpg")} 560w, ${asset("michael-ebong-900.jpg")} 900w`} sizes="(min-width: 960px) 26rem, 90vw" width={560} height={784} alt="Michael Ebong, smiling, arms folded, in a dark button-down shirt outdoors." />
            </picture>
          </div>
          <div className="prose">
            <h1 style={{ marginBottom: 'var(--s-5)' }}>I build the structure that lets people do their best work.</h1>
            <p className="lede">
              I’m Michael Ebong, a People Operations professional in Lagos. I work on how organisations run: who is responsible for what, how information moves, how performance is defined and reviewed, and whether the processes behind it still work when the person who set them up isn’t in the room.
            </p>
            <p>
              My most recent work has meant rebuilding an HR function from the ground up, connecting a company’s objectives to every employee’s targets with the CEO, designing a learning and development process, and building the HR system and staff self-service portal that hold it together.
            </p>
            <p>
              I’m not a software engineer, and I don’t present myself as one. My strength is the combination: I understand People Operations, I think in systems, and I can build practical tools that put good processes into daily use.
            </p>
            <div className="actions" style={{ marginTop: 'var(--s-5)' }}>
              <CvButton className="btn btn--primary" />
              <a className="btn btn--secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="journey-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="journey-title">How my thinking developed</h2>
            <p>My route into People Operations wasn’t a straight line, and that’s part of why I approach it the way I do.</p>
          </div>
          <ol className="timeline">
            {journey.map((j) => (
              <li key={j.period}>
                <span className="when">{j.period}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--ink" aria-labelledby="value-title">
        <div className="wrap split">
          <div>
            <h2 id="value-title">What I bring</h2>
            <p className="lede" style={{ marginTop: 'var(--s-4)' }}>
              I help organisations move from People Operations that depend on individual effort to People Operations that run on clear structure, reliable information and practical systems.
            </p>
          </div>
          <ul className="ticks" style={{ gap: 'var(--s-3)' }}>
            <li>Understanding how the organisation works before reaching for an HR template</li>
            <li>Finding the gaps: undocumented, inconsistent or single-person processes</li>
            <li>Designing documented, repeatable workflows with clear owners</li>
            <li>Connecting business objectives to individual performance</li>
            <li>Treating the employee lifecycle as one connected journey</li>
            <li>Centralising employee information into one reliable source</li>
            <li>Automating repetitive HR work with Google Workspace tools</li>
            <li>Giving managers simple frameworks for check-ins and reviews</li>
            <li>Building systems that keep running without depending on one person</li>
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="dir-title">
        <div className="wrap split">
          <h2 id="dir-title">Where I’m heading</h2>
          <div className="prose">
            <p>I want to keep growing where strategic People Operations, organisational effectiveness and HR technology meet.</p>
            <p>That means deepening people analytics, moving from tracking HR activity to using workforce information for decisions; strengthening the link between strategy, structure, roles and performance; and continuing to build well-governed HR tools, growing my technical skill steadily rather than claiming expertise I haven’t yet earned.</p>
            <p>The work I’m building toward is owning the design of People Operations for a growing organisation: partnering with leadership on structure and performance while making sure the day-to-day processes are reliable, documented and efficient.</p>
          </div>
        </div>
      </section>

      <section className="band band--wash" aria-labelledby="learn-title" id="learning">
        <div className="wrap">
          <div className="band-head">
            <h2 id="learn-title">Learning and development</h2>
            <p>I hold certificates for each course below. What matters more is what each one changed in my work.</p>
          </div>
          <div className="learn-grid">
            {learning.map((l) => (
              <div key={l.area} className="learn-item">
                <h3>{l.area}</h3>
                <span className="src">{l.sources.join('; ')}</span>
                <p>{l.learned}</p>
                <p><span className="applied">Applied in:</span> {l.applied}</p>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 'var(--s-6)' }}>Also: {otherLearning.join('; ')}.</p>
        </div>
      </section>

      <section className="band" aria-labelledby="tech-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="tech-title">Technical capabilities</h2>
            <p className="level-statement" style={{ color: 'var(--ink)' }}>
              I build practical HR tools with Google Workspace and Apps Script. My strength is designing the process and the data structure, then building the tools that put them to work.
            </p>
          </div>
          <dl className="tech-list">
            {technical.map(([t, d]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

/* ---------------- Philosophy ---------------- */

export function Philosophy() {
  usePageMeta('Philosophy', 'Six principles and a six-stage framework that shape how Michael Ebong approaches People Operations and HR systems.', '/philosophy')
  return (
    <>
      <PageHead
        title="How I approach People Operations"
        lede="Six principles, each learned from something I saw work, or saw fail, in practice. Then the framework I follow and how I think about HR technology."
      />
      <section className="band" aria-label="Principles" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ol className="rule-list">
            {principles.map((p, n) => (
              <li key={p.id} style={{ paddingBlock: 'var(--s-7)' }}>
                <div className="split" style={{ gap: 'var(--s-5)' }}>
                  <div>
                    <p className="small" style={{ color: 'var(--accent-strong)', marginBottom: 'var(--s-2)' }}>Principle {n + 1}</p>
                    <h2 style={{ fontSize: 'var(--fs-xl)' }}>{p.title}</h2>
                    <p className="lede" style={{ marginTop: 'var(--s-4)', fontSize: 'var(--fs-base)' }}>{p.belief}</p>
                  </div>
                  <dl style={{ display: 'grid', gap: 'var(--s-4)', margin: 0 }}>
                    <div><dt className="small muted">Why it matters</dt><dd style={{ margin: 0 }}>{p.why}</dd></div>
                    <div><dt className="small muted">How it shapes my decisions</dt><dd style={{ margin: 0 }}>{p.practice}</dd></div>
                    <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 'var(--s-4)' }}>
                      <dt className="small muted">Where I’ve applied it</dt><dd style={{ margin: 0 }}>{p.evidence}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="band band--wash" aria-labelledby="fw-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="fw-title">My problem-solving framework</h2>
            <p>Six stages, from understanding the organisation to improving what I built.</p>
          </div>
          <Framework />
        </div>
      </section>
      <section className="band" aria-labelledby="tech-p-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="tech-p-title">How I think about HR technology</h2>
            <p>Technology is the last step in solving a People Operations problem, not the first. It should solve an operational problem, not just make a process look modern.</p>
          </div>
          <dl className="tech-list">
            {techPrinciples.map(([t, d]) => (
              <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

/* ---------------- Experience ---------------- */

export function Experience() {
  usePageMeta('Experience', 'Michael Ebong’s experience in People Operations, HR systems and recruitment at Instollar Technologies, Greenfield Catering and EVC Nigeria.', '/experience')
  return (
    <>
      <PageHead title="Experience" lede="People Operations roles across technology, hospitality and real estate, preceded by product marketing work that taught me how organisations create value.">
        <div className="actions" style={{ marginTop: 'var(--s-5)' }}><CvButton className="btn btn--primary" /></div>
      </PageHead>
      <section className="wrap" style={{ paddingBottom: 'var(--s-9)' }}>
        <ol className="exp-list">
          {roles.map((r) => (
            <li key={r.org + r.title} className="exp-item">
              <div className="exp-meta">
                {r.period && <strong>{r.period}</strong>}
                <span>{r.place}</span>
              </div>
              <div className="exp-body">
                <h2 style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--s-1)' }}>{r.title}</h2>
                <p className="org">{r.org}</p>
                <p style={{ color: 'var(--ink-soft)' }}>{r.summary}</p>
                <ul className="ticks" style={{ marginTop: 'var(--s-3)' }}>{r.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                {r.caseStudies.length > 0 && (
                  <div className="links">
                    {r.caseStudies.map((s) => {
                      const cs = caseStudyBySlug(s)!
                      return (
                        <Link key={s} to={{ name: 'case-study', slug: s }} className="text-link">
                          {cs.title} <ArrowRight aria-hidden="true" />
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

/* ---------------- Case studies ---------------- */

export function CaseStudies() {
  usePageMeta('Case Studies', 'Six People Operations case studies: restructuring an HR function, Balanced Scorecard performance management, a custom HRIS, L&D, employee enablement and structured recruitment.', '/case-studies')
  return (
    <>
      <PageHead title="Case studies" lede="Each one follows the same structure: context, challenge, diagnosis, approach, what I built, my part in it, and what I learned. Organisational details are generalised where confidentiality requires it." />
      <section className="wrap" style={{ paddingBottom: 'var(--s-9)' }}>
        <ul className="cs-list cs-list--two">
          {caseStudies.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} headingLevel={2} />)}
        </ul>
      </section>
    </>
  )
}

function useReadingProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])
  return p
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const cs = caseStudyBySlug(slug)
  usePageMeta(cs?.title ?? 'Case study not found', cs?.summary ?? 'This case study does not exist.', `/case-studies/${slug}`)
  const progress = useReadingProgress()
  const reduced = usePrefersReducedMotion()
  const [current, setCurrent] = useState('context')
  const refs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setCurrent(vis[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )
    Object.values(refs.current).forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [slug])

  if (!cs) return <NotFound />
  const idx = caseStudies.findIndex((c) => c.slug === slug)
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length]
  const next = caseStudies[(idx + 1) % caseStudies.length]
  const demo = systemBySlug(cs.demo)!
  const sections = [...cs.sections, { id: 'demonstration', title: 'Related demonstration', blocks: [] }]

  const jump = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    el.querySelector('h2')?.focus({ preventScroll: true })
  }

  return (
    <article>
      <div className="progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className="cs-header">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to={{ name: 'case-studies' }}>Case studies</Link>
            <span aria-hidden="true">/</span>
            <span>{cs.theme}</span>
          </nav>
          <h1>{cs.title}</h1>
          <p className="lede" style={{ marginTop: 'var(--s-5)' }}>{cs.summary}</p>
          <dl className="cs-facts">
            <div><dt>Organisation</dt><dd>{cs.org}</dd></div>
            <div><dt>Role</dt><dd>{cs.role}</dd></div>
            <div><dt>Period</dt><dd>{cs.period}</dd></div>
          </dl>
        </div>
      </header>
      <div className="wrap cs-layout">
        <aside className="toc" aria-label="Sections in this case study">
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <button type="button" aria-current={current === s.id} onClick={() => jump(s.id)}>{s.title}</button>
              </li>
            ))}
          </ol>
        </aside>
        <div>
          {cs.sections.map((s, n) => (
            <section key={s.id} id={s.id} className="cs-section" ref={(el) => { refs.current[s.id] = el }} aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} tabIndex={-1}><span className="n">{n + 1}</span>{s.title}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
          <section id="demonstration" className="cs-section" ref={(el) => { refs.current.demonstration = el }} aria-labelledby="h-demonstration">
            <h2 id="h-demonstration" tabIndex={-1}><span className="n">{cs.sections.length + 1}</span>Related demonstration</h2>
            <p>{demo.explanation}</p>
            <p className="cs-note">The demonstration is independently recreated with a fictional company and synthetic data. It shows the approach, not the employer’s actual system.</p>
            <Link to={{ name: 'system', slug: demo.slug }} className="btn btn--primary">Open the {demo.name} demonstration</Link>
          </section>
          <nav className="pager" aria-label="More case studies">
            <Link to={{ name: 'case-study', slug: prev.slug }}><span className="dir">Previous case study</span><span className="t">{prev.title}</span></Link>
            <Link to={{ name: 'case-study', slug: next.slug }} className="next"><span className="dir">Next case study</span><span className="t">{next.title}</span></Link>
          </nav>
        </div>
      </div>
    </article>
  )
}

/* ---------------- Systems ---------------- */

function Ecosystem() {
  const nodes = [
    { x: 20, label: 'Recruitment', sub: 'brings people in', slug: 'recruitment' },
    { x: 210, label: 'HRIS', sub: 'one employee record', slug: 'hris' },
    { x: 400, label: 'Scorecard', sub: 'links work to strategy', slug: 'scorecard' },
    { x: 590, label: 'Learning Hub', sub: 'develops people', slug: 'learning-hub' },
  ]
  return (
    <figure className="ecosystem">
      <div className="table-wrap" style={{ background: 'var(--surface)', padding: 'var(--s-4)' }}>
        <svg viewBox="0 0 770 230" role="img" aria-label="How the demonstrations connect: recruitment hands new hires to the HRIS; the HRIS supplies employee data to the scorecard and learning hub; development needs flow from the scorecard to the learning hub; everything feeds people analytics." style={{ minWidth: 640 }}>
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill="var(--slate)" />
            </marker>
          </defs>
          {nodes.slice(0, -1).map((n, i) => (
            <line key={i} x1={n.x + 160} y1={50} x2={nodes[i + 1].x - 4} y2={50} stroke="var(--slate)" strokeWidth="1.25" markerEnd="url(#arr)" />
          ))}
          {nodes.map((n) => (
            <g key={n.slug}>
              <rect x={n.x} y={18} width={160} height={64} rx={8} fill={n.slug === 'hris' ? 'var(--ink)' : 'var(--paper)'} stroke="var(--line-strong)" />
              <text x={n.x + 14} y={45} fontSize="15" fill={n.slug === 'hris' ? 'var(--on-ink)' : 'var(--ink)'} fontWeight="500">{n.label}</text>
              <text x={n.x + 14} y={66} fontSize="12" fill={n.slug === 'hris' ? 'var(--on-ink-soft)' : 'var(--slate)'}>{n.sub}</text>
              <line x1={n.x + 80} y1={82} x2={n.x + 80} y2={150} stroke="var(--line-strong)" strokeDasharray="3 4" />
            </g>
          ))}
          <rect x={20} y={150} width={730} height={56} rx={8} fill="var(--accent-wash)" stroke="#bfdcd5" />
          <text x={36} y={176} fontSize="15" fill="var(--accent-strong)" fontWeight="500">People Analytics</text>
          <text x={36} y={195} fontSize="12" fill="var(--ink-soft)">Every module feeds reporting, so leaders see the whole picture</text>
        </svg>
      </div>
      <figcaption className="small muted" style={{ marginTop: 'var(--s-3)' }}>The five demonstrations work as one system, the way People Operations does in practice.</figcaption>
    </figure>
  )
}

export function Systems() {
  usePageMeta('Systems & Demonstrations', 'Interactive, independently recreated People Operations systems: an HRIS, Balanced Scorecard, learning hub, recruitment framework and people analytics, all with synthetic data.', '/systems')
  return (
    <>
      <PageHead title="Systems and demonstrations" lede="Five working demonstrations of the systems I design. Each is rebuilt independently, informed by real work, and filled with synthetic data so nothing confidential is shown.">
        <p className="notice" style={{ marginTop: 'var(--s-6)' }}>{confidentialityStatement}</p>
      </PageHead>
      <section className="wrap" style={{ paddingBottom: 'var(--s-8)' }}>
        <Ecosystem />
        <p className="small muted" style={{ marginTop: 'var(--s-4)' }}>{fictionalOrg}</p>
      </section>
      <section className="wrap" style={{ paddingBottom: 'var(--s-9)' }} aria-label="Demonstrations">
        <ul className="sys-grid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {systems.map((s) => (
            <li key={s.slug} className="sys-card">
              <span className="sys-tier">{s.tier} demonstration</span>
              <h2 style={{ fontSize: 'var(--fs-xl)' }}><Link to={{ name: 'system', slug: s.slug }}>{s.name}</Link></h2>
              <p style={{ color: 'var(--ink-soft)', margin: 0 }}>{s.explanation}</p>
              <dl>
                <div><dt>Problem it addresses</dt><dd>{s.problem}</dd></div>
                <div><dt>Intended users</dt><dd>{s.users.join(', ')}</dd></div>
              </dl>
              <ul className="chips" aria-label="Key capabilities">{s.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
              <span className="cs-more" aria-hidden="true">Explore the demonstration <ArrowRight /></span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export function SystemPage({ slug }: { slug: string }) {
  const s = systemBySlug(slug)
  usePageMeta(s ? s.name : 'Demonstration not found', s ? `${s.name}: an independently recreated People Operations demonstration with synthetic data. ${s.problem}` : 'This demonstration does not exist.', `/systems/${slug}`)
  if (!s) return <NotFound />
  const Demo = demoBySlug[s.slug]
  const idx = systems.findIndex((x) => x.slug === slug)
  const next = systems[(idx + 1) % systems.length]
  return (
    <>
      <header className="cs-header">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to={{ name: 'systems' }}>Systems and demonstrations</Link>
            <span aria-hidden="true">/</span>
            <span>{s.tier}</span>
          </nav>
          <h1>{s.name}</h1>
          <p className="lede" style={{ marginTop: 'var(--s-5)' }}>{s.explanation}</p>
        </div>
      </header>
      <section className="wrap" style={{ paddingBlock: 'var(--s-7)' }} aria-label="Interactive demonstration">
        {Demo()}
      </section>
      <section className="band band--wash" aria-labelledby="basis-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="basis-title">What’s real and what’s recreated</h2>
            <p>Not every feature here was implemented at a previous employer. This is the honest split.</p>
          </div>
          <div className="basis">
            <div><h4>From my professional work</h4><p>{s.basis.real}</p></div>
            <div><h4>Recreated for this portfolio</h4><p>{s.basis.recreated}</p></div>
            <div><h4>Proposed improvements</h4><p>{s.basis.proposed}</p></div>
          </div>
        </div>
      </section>
      <section className="band" aria-labelledby="spec-title">
        <div className="wrap">
          <div className="band-head"><h2 id="spec-title">How it works</h2></div>
          <div className="spec">
            <div>
              <h3>Problem and users</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{s.problem}</p>
              <p className="small muted">Used by: {s.users.join(', ')}.</p>
            </div>
            <div>
              <h3>Workflow</h3>
              <ol className="steps">{s.workflow.map((w) => <li key={w}>{w}</li>)}</ol>
            </div>
            <div>
              <h3>Data structure</h3>
              <ul className="ticks">{s.data.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
            <div>
              <h3>Security and access</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{s.security}</p>
              <h3 style={{ marginTop: 'var(--s-5)' }}>Limitations</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{s.limitations}</p>
            </div>
          </div>
          <div style={{ marginTop: 'var(--s-7)' }}>
            <h3 style={{ fontSize: 'var(--fs-md)', marginBottom: 'var(--s-3)' }}>Related case studies</h3>
            <div className="actions" style={{ gap: 'var(--s-2) var(--s-5)' }}>
              {s.relatedCases.map((c) => (
                <Link key={c} to={{ name: 'case-study', slug: c }} className="text-link">{caseStudyBySlug(c)!.title} <ArrowRight aria-hidden="true" /></Link>
              ))}
            </div>
          </div>
          <nav className="pager" aria-label="More demonstrations" style={{ marginTop: 'var(--s-7)' }}>
            <Link to={{ name: 'systems' }}><span className="dir">Back to</span><span className="t">All demonstrations</span></Link>
            <Link to={{ name: 'system', slug: next.slug }} className="next"><span className="dir">Next demonstration</span><span className="t">{next.name}</span></Link>
          </nav>
        </div>
      </section>
    </>
  )
}

/* ---------------- Contact ---------------- */

export function Contact() {
  usePageMeta('Contact', 'Contact Michael Ebong about People Operations roles, HR systems projects or collaboration. Email, LinkedIn, phone or the contact form.', '/contact')
  return (
    <>
      <PageHead title="Let’s build better ways of working." lede="Hiring for People Operations, or need structure and better systems in your HR? Send a message and it comes straight to me." />
      <section className="wrap" style={{ paddingBottom: 'var(--s-9)' }}>
        <div className="contact-grid">
          <div>
            <ul className="contact-methods">
              <li><span className="k">Email</span><a href={`mailto:${site.email}`}><Mail aria-hidden="true" style={{ display: 'inline', width: '1em', marginRight: 6, verticalAlign: '-2px' }} />{site.email}</a></li>
              <li><span className="k">LinkedIn</span><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" style={{ display: 'inline', width: '1em', marginRight: 6, verticalAlign: '-2px' }} />linkedin.com/in/michael-ebong-21a710196</a></li>
              <li><span className="k">Phone</span><a href={`tel:${site.phoneE164}`}><Phone aria-hidden="true" style={{ display: 'inline', width: '1em', marginRight: 6, verticalAlign: '-2px' }} />{site.phoneDisplay}</a></li>
              <li><span className="k">WhatsApp</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" style={{ display: 'inline', width: '1em', marginRight: 6, verticalAlign: '-2px' }} />Message on WhatsApp</a></li>
              <li><span className="k">Location</span><span>{site.location}</span></li>
            </ul>
            <div className="actions" style={{ marginTop: 'var(--s-6)' }}><CvButton className="btn btn--primary" /></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  usePageMeta('Page not found', 'This page does not exist.', '/404')
  return (
    <PageHead title="This page doesn’t exist." lede="The link may be old or mistyped. Start from the home page or browse the case studies.">
      <div className="actions" style={{ marginTop: 'var(--s-5)', marginBottom: 'var(--s-9)' }}>
        <Link to={{ name: 'home' }} className="btn btn--primary">Go to the home page</Link>
        <Link to={{ name: 'case-studies' }} className="btn btn--secondary">Browse case studies</Link>
      </div>
    </PageHead>
  )
}

export { Table }
