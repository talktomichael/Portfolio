import { ArrowRight } from 'lucide-react'
import { useState, type KeyboardEvent, type ReactNode } from 'react'
import type { Block, CaseStudy } from '../content/caseStudies'
import { framework } from '../content/practice'
import { useReveal } from '../lib/hooks'
import { Link } from '../lib/router'

export function Reveal({ children, as: Tag = 'div', className = '' }: { children: ReactNode; as?: 'div' | 'section' | 'li'; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    // @ts-expect-error ref type matches all three tags at runtime
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

export function PageHead({ title, lede, children }: { title: string; lede?: string; children?: ReactNode }) {
  return (
    <header className="page-head wrap">
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  )
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Table">
      <table>
        <thead>
          <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row" style={{ background: 'transparent', whiteSpace: 'normal' }}>{c}</th> : <td key={j}>{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ('p' in b) return <p key={i}>{b.p}</p>
        if ('list' in b) return <ul key={i} className="ticks">{b.list.map((x) => <li key={x}>{x}</li>)}</ul>
        if ('steps' in b) return <ol key={i} className="steps">{b.steps.map((x) => <li key={x}>{x}</li>)}</ol>
        if ('table' in b) return <Table key={i} {...b.table} />
        return <p key={i} className="cs-note">{b.note}</p>
      })}
    </>
  )
}

export function CaseStudyCard({ cs, headingLevel = 3 }: { cs: CaseStudy; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <li className="cs-item">
      <span className="cs-theme">{cs.theme}</span>
      <H style={headingLevel === 2 ? { fontSize: 'var(--fs-lg)' } : undefined}>
        <Link to={{ name: 'case-study', slug: cs.slug }}>{cs.title}</Link>
      </H>
      <span className="cs-org">{cs.org}</span>
      <p>{cs.summary}</p>
      <span className="cs-more" aria-hidden="true">
        Read the case study <ArrowRight />
      </span>
    </li>
  )
}

/** The six-stage framework. A tab list on every screen size; the panel shows a real example. */
export function Framework() {
  const [i, setI] = useState(0)
  const step = framework[i]
  const onKey = (e: KeyboardEvent<HTMLOListElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const n = (i + (e.key === 'ArrowRight' ? 1 : framework.length - 1)) % framework.length
    setI(n)
    document.getElementById(`fw-tab-${n}`)?.focus()
  }
  return (
    <div className="framework">
      <ol className="fw-steps" role="tablist" aria-label="Problem-solving framework" onKeyDown={onKey}>
        {framework.map((s, n) => (
          <li key={s.name} role="presentation">
            <button
              id={`fw-tab-${n}`}
              role="tab"
              aria-selected={n === i}
              aria-controls="fw-panel"
              tabIndex={n === i ? 0 : -1}
              onClick={() => setI(n)}
            >
              <span className="fw-num">Stage {n + 1}</span>
              <span className="fw-name">{s.name}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="fw-panel" id="fw-panel" role="tabpanel" aria-labelledby={`fw-tab-${i}`} key={i}>
        <div className="fw-panel-anim">
          <h3>{step.name}</h3>
          <p>{step.summary}</p>
        </div>
        <div className="fw-panel-anim example">
          <p className="label">In practice</p>
          <p>{step.example}</p>
        </div>
      </div>
      <p className="muted small">This is my working framework, drawn from how I have approached People Operations problems. It is a cycle: Improve leads back to Understand as the organisation changes.</p>
    </div>
  )
}
