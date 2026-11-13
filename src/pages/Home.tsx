import { ArrowRight, Mail } from 'lucide-react'
import { Linkedin } from '../components/Icons'
import { useCallback, useState } from 'react'
import { CvButton } from '../components/Chrome'
import { CaseStudyCard, Framework, Reveal } from '../components/Shared'
import { SystemMap } from '../components/SystemMap'
import { Typewriter } from '../components/Typewriter'
import { caseStudies } from '../content/caseStudies'
import { roles } from '../content/experience'
import { capabilities, learning, principles } from '../content/practice'
import { site, typewriterStatements } from '../content/site'
import { systems } from '../content/systems'
import { usePageMeta } from '../lib/hooks'
import { Link } from '../lib/router'

const statements = typewriterStatements.map((s) => s.text)

function CapabilityFigure({ n }: { n: number }) {
  const stroke = 'var(--signal)'
  if (n === 0)
    // strategy cascading into roles
    return (
      <svg viewBox="0 0 120 70" aria-hidden="true" fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="45" y="4" width="30" height="12" rx="2" />
        <path d="M60 16v10M24 26h72M24 26v8M60 26v8M96 26v8" />
        <rect x="10" y="34" width="28" height="10" rx="2" /><rect x="46" y="34" width="28" height="10" rx="2" /><rect x="82" y="34" width="28" height="10" rx="2" />
        <path d="M17 44v8M31 44v8M53 44v8M67 44v8M89 44v8M103 44v8" opacity=".6" />
        <circle cx="17" cy="56" r="3" /><circle cx="31" cy="56" r="3" /><circle cx="53" cy="56" r="3" /><circle cx="67" cy="56" r="3" /><circle cx="89" cy="56" r="3" /><circle cx="103" cy="56" r="3" />
      </svg>
    )
  if (n === 1)
    // process flowing through an automated step
    return (
      <svg viewBox="0 0 120 70" aria-hidden="true" fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="4" y="27" width="22" height="16" rx="2" />
        <path d="M26 35h12" />
        <rect x="38" y="20" width="30" height="30" rx="4" />
        <path d="M46 35l5 5 9-10" />
        <path d="M68 35h12M80 35l12-16M80 35l12 16M80 35h12" />
        <rect x="92" y="12" width="22" height="12" rx="2" /><rect x="92" y="29" width="22" height="12" rx="2" /><rect x="92" y="46" width="22" height="12" rx="2" />
      </svg>
    )
  // people, information and performance held together
  return (
    <svg viewBox="0 0 120 70" aria-hidden="true" fill="none" stroke={stroke} strokeWidth="1.5">
      <circle cx="44" cy="28" r="18" /><circle cx="76" cy="28" r="18" /><circle cx="60" cy="48" r="18" />
      <circle cx="60" cy="35" r="3" fill={stroke} />
    </svg>
  )
}

export default function Home() {
  usePageMeta(site.name, `${site.name}: ${site.role}. ${site.intro}`, '/')
  const [stage, setStage] = useState(typewriterStatements[0].stage)
  const onIndex = useCallback((i: number) => setStage(typewriterStatements[i].stage), [])

  const featured = caseStudies.filter((c) => c.featured)
  const selectedRoles = roles.filter((r) => r.featured)

  return (
    <>
      {/* 1. Hero */}
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div>
            <h1 id="hero-title" className="hero-name">{site.name}</h1>
            <p className="hero-role">{site.role}</p>
            <Typewriter statements={statements} onIndexChange={onIndex} />
            <p className="hero-intro">{site.intro}</p>
            <div className="actions">
              <Link to={{ name: 'case-studies' }} className="btn btn--accent">Explore my work</Link>
              <CvButton />
              <a className="btn btn--secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
          <SystemMap active={stage} />
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="band" aria-labelledby="intro-title">
        <div className="wrap split">
          <div>
            <h2 id="intro-title">People Operations is how an organisation actually runs.</h2>
          </div>
          <div className="prose">
            <p className="lede" style={{ color: 'var(--ink)' }}>
              I don’t see People Operations as a collection of administrative tasks. I see it as the function that connects people, processes, performance, information and technology so a business can operate well.
            </p>
            <p>
              Most of my work starts with something that isn’t running smoothly. Leave tracked across messages. Reviews that happen when someone remembers. New hires learning the job by asking around. None of it is dramatic, but together it makes an organisation slower, less fair and too dependent on a few people.
            </p>
            <p>
              I map how things happen today, find where they break, design a clearer way, and build the tools that make it easy to follow. I’m not a software engineer. My strength is the combination: People Operations knowledge, systems thinking and the practical ability to build.
            </p>
            <Link to={{ name: 'about' }} className="text-link">More about me <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* 3. What I work on */}
      <section className="band band--ink" aria-labelledby="work-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="work-title">What I work on</h2>
            <p>Three connected capabilities. Each one is stronger because of the other two.</p>
          </div>
          <div className="capabilities">
            {capabilities.map((c, n) => (
              <Reveal key={c.title} className="capability">
                <div className="capability-figure"><CapabilityFigure n={n} /></div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="ticks">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How I think */}
      <section className="band" aria-labelledby="think-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="think-title">How I think</h2>
            <p>Six principles guide my work. These three come up most often.</p>
          </div>
          <ul className="rule-list">
            {principles.filter((p) => ['structure', 'strategy', 'sustainability'].includes(p.id)).map((p) => (
              <li key={p.id} className="principle-row">
                <h3>{p.title}</h3>
                <div>
                  <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-2)' }}>{p.belief}</p>
                  <p>{p.evidence}</p>
                </div>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 'var(--s-5)' }}>
            <Link to={{ name: 'philosophy' }} className="text-link">Read all six principles <ArrowRight aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      {/* 5. My approach */}
      <section className="band band--wash" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="approach-title">My approach</h2>
            <p>Every People Operations problem I take on moves through the same six stages. Select a stage to see it in practice.</p>
          </div>
          <Framework />
        </div>
      </section>

      {/* 6. Selected experience */}
      <section className="band" aria-labelledby="exp-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="exp-title">Selected experience</h2>
            <p>Three organisations, three different People Operations problems.</p>
          </div>
          <ol className="exp-list">
            {selectedRoles.map((r) => (
              <li key={r.org} className="exp-item">
                <div className="exp-meta">
                  <strong>{r.period}</strong>
                  <span>{r.place}</span>
                </div>
                <div className="exp-body">
                  <h3>{r.title}</h3>
                  <p className="org">{r.org}</p>
                  <p style={{ color: 'var(--ink-soft)' }}>{r.summary}</p>
                </div>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 'var(--s-5)' }}>
            <Link to={{ name: 'experience' }} className="text-link">See full experience <ArrowRight aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      {/* 7. Featured case studies */}
      <section className="band" aria-labelledby="cs-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="cs-title">Featured case studies</h2>
            <p>The thinking behind the work: what I found, what I built, and what I learned.</p>
          </div>
          <ul className="cs-list cs-list--two">
            {featured.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} />)}
          </ul>
          <p style={{ marginTop: 'var(--s-5)' }}>
            <Link to={{ name: 'case-studies' }} className="text-link">All six case studies <ArrowRight aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      {/* 8. Systems */}
      <section className="band band--wash" aria-labelledby="sys-title">
        <div className="wrap split">
          <div className="band-head" style={{ marginBottom: 0 }}>
            <h2 id="sys-title">Systems and demonstrations</h2>
            <p>Five working demonstrations, rebuilt independently for a fictional company with synthetic data, so you can see how the systems behave without anything confidential.</p>
            <div className="actions">
              <Link to={{ name: 'systems' }} className="btn btn--primary">Try the demonstrations</Link>
            </div>
          </div>
          <ul className="rule-list">
            {systems.map((s) => (
              <li key={s.slug} style={{ display: 'grid', gap: 4 }}>
                <Link to={{ name: 'system', slug: s.slug }} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-md)', color: 'var(--ink)', textDecoration: 'none' }}>
                  {s.name}
                </Link>
                <span className="small muted">{s.problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Professional development */}
      <section className="band" aria-labelledby="dev-title">
        <div className="wrap">
          <div className="band-head">
            <h2 id="dev-title">Professional development</h2>
            <p>What I’ve studied follows what I’ve needed in practice, and goes straight back into the work.</p>
          </div>
          <div className="learn-grid">
            {learning.slice(0, 4).map((l) => (
              <div key={l.area} className="learn-item">
                <h3>{l.area}</h3>
                <span className="src">{l.sources.join('; ')}</span>
                <p><span className="applied">Applied in:</span> {l.applied}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 'var(--s-5)' }}>
            <Link to={{ name: 'about' }} className="text-link">Learning and technical skills <ArrowRight aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      {/* 10. Closing */}
      <section className="band band--ink" aria-labelledby="cta-title">
        <div className="wrap split">
          <h2 id="cta-title" style={{ fontSize: 'var(--fs-2xl)' }}>Let’s build better ways of working.</h2>
          <div>
            <p className="lede">
              If you’re hiring for People Operations, or your HR processes need structure and better systems, I’d like to hear about it.
            </p>
            <div className="actions" style={{ marginTop: 'var(--s-6)' }}>
              <Link to={{ name: 'contact' }} className="btn btn--primary"><Mail aria-hidden="true" /> Contact me</Link>
              <a className="btn btn--secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
              <CvButton />
            </div>
            <p className="small" style={{ marginTop: 'var(--s-5)' }}>
              Or email <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
