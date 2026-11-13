import { ArrowDownUp } from 'lucide-react'
import { useMemo, useState, type ReactNode } from 'react'
import {
  analytics,
  candidates,
  cascade,
  departments,
  employees,
  leaveRequests,
  onboardingSteps,
} from '../../content/systems'

function DemoFrame({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return (
    <section className="demo" aria-label={`${title}, interactive demonstration with synthetic data`}>
      <div className="demo-bar">
        <span className="t">{title}</span>
        <span className="tag">Demonstration: synthetic data</span>
      </div>
      {children}
      <p className="demo-note">{note ?? 'Harbourline Group is fictional. Changes you make here reset when you leave the page.'}</p>
    </section>
  )
}

function Tabs<T extends string>({ tabs, value, onChange, label }: { tabs: readonly T[]; value: T; onChange: (t: T) => void; label: string }) {
  return (
    <div className="demo-tabs" role="tablist" aria-label={label}>
      {tabs.map((t) => (
        <button key={t} role="tab" aria-selected={t === value} onClick={() => onChange(t)}>
          {t}
        </button>
      ))}
    </div>
  )
}

/* ---------------- HRIS ---------------- */

export function HrisDemo() {
  const tabs = ['Dashboard', 'Employees', 'Leave approvals', 'Probation'] as const
  const [tab, setTab] = useState<(typeof tabs)[number]>('Dashboard')
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All departments')
  const [decisions, setDecisions] = useState<Record<string, 'Approved' | 'Declined'>>({})
  const [msg, setMsg] = useState('')

  const balances = useMemo(() => {
    const b: Record<string, number> = {}
    employees.forEach((e) => (b[e.name] = e.leaveLeft))
    leaveRequests.forEach((r) => {
      if (decisions[r.id] === 'Approved' && r.type === 'Annual') b[r.employee] -= r.days
    })
    return b
  }, [decisions])

  const list = employees.filter(
    (e) => (dept === 'All departments' || e.dept === dept) && (e.name + e.role + e.id).toLowerCase().includes(query.toLowerCase()),
  )
  const pending = leaveRequests.filter((r) => !decisions[r.id]).length
  const onProbation = employees.filter((e) => e.stage === 'Probation')

  const decide = (id: string, who: string, d: 'Approved' | 'Declined') => {
    setDecisions((x) => ({ ...x, [id]: d }))
    setMsg(d === 'Approved' ? `Approved. ${who} has been notified and their balance is updated.` : `Declined. ${who} has been notified.`)
  }

  return (
    <DemoFrame title="Harbourline HRIS">
      <Tabs tabs={tabs} value={tab} onChange={setTab} label="HRIS sections" />
      <div className="demo-body" role="tabpanel">
        {tab === 'Dashboard' && (
          <>
            <div className="demo-kpis">
              <div className="kpi"><div className="v">120</div><div className="l">Employees</div></div>
              <div className="kpi"><div className="v">{pending}</div><div className="l">Leave requests waiting</div></div>
              <div className="kpi"><div className="v">{onProbation.filter((e) => (e.probationDays ?? 99) <= 30).length}</div><div className="l">Probation reviews due in 30 days</div></div>
              <div className="kpi"><div className="v">94%</div><div className="l">Check-ins logged this month</div></div>
            </div>
            <h4 style={{ marginBottom: 'var(--s-3)' }}>What the system sent this week</h4>
            <ul className="ticks">
              <li>Probation reminder to Sales lead: Tunde Bakare’s review is due in 12 days</li>
              <li>Monthly check-in reminders to 14 managers</li>
              <li>Learning deadline reminders to 6 employees</li>
              <li>Birthday note to People &amp; Admin for 2 colleagues</li>
            </ul>
          </>
        )}

        {tab === 'Employees' && (
          <>
            <div className="field-inline">
              <label className="sr-only" htmlFor="hris-q">Search employees</label>
              <input id="hris-q" placeholder="Search by name, role or ID" value={query} onChange={(e) => setQuery(e.target.value)} />
              <label className="sr-only" htmlFor="hris-d">Department</label>
              <select id="hris-d" value={dept} onChange={(e) => setDept(e.target.value)}>
                <option>All departments</option>
                {departments.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="Employee records">
              <table>
                <thead>
                  <tr><th>ID</th><th>Name</th><th>Department</th><th>Role</th><th>Stage</th><th>Leave left</th></tr>
                </thead>
                <tbody>
                  {list.map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td style={{ color: 'var(--ink)' }}>{e.name}</td>
                      <td>{e.dept}</td>
                      <td>{e.role}</td>
                      <td><span className={`pill ${e.stage === 'Probation' ? 'pill--warn' : e.stage === 'Onboarding' ? 'pill--info' : 'pill--ok'}`}>{e.stage}</span></td>
                      <td>{balances[e.name]} days</td>
                    </tr>
                  ))}
                  {list.length === 0 && (
                    <tr><td colSpan={6}>No employees match. Clear the search or choose another department.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab === 'Leave approvals' && (
          <>
            <p className="small muted">You are viewing the approval queue as a line manager. Approve a request to see the balance update on the Employees tab.</p>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="Leave requests">
              <table>
                <thead><tr><th>Request</th><th>Employee</th><th>Type</th><th>Dates</th><th>Days</th><th>Decision</th></tr></thead>
                <tbody>
                  {leaveRequests.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td style={{ color: 'var(--ink)' }}>{r.employee}</td>
                      <td>{r.type}</td>
                      <td>{r.from} to {r.to}</td>
                      <td>{r.days}</td>
                      <td>
                        {decisions[r.id] ? (
                          <span className={`pill ${decisions[r.id] === 'Approved' ? 'pill--ok' : 'pill--warn'}`}>{decisions[r.id]}</span>
                        ) : (
                          <span style={{ display: 'inline-flex', gap: 6 }}>
                            <button className="mini-btn mini-btn--ok" onClick={() => decide(r.id, r.employee, 'Approved')}>Approve</button>
                            <button className="mini-btn" onClick={() => decide(r.id, r.employee, 'Declined')}>Decline</button>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="live" role="status" aria-live="polite">{msg}</p>
            {Object.keys(decisions).length > 0 && (
              <button className="mini-btn" onClick={() => { setDecisions({}); setMsg('Queue reset.') }}>Reset queue</button>
            )}
          </>
        )}

        {tab === 'Probation' && (
          <>
            <p className="small muted">Managers are reminded 30 days and 7 days before each probation ends.</p>
            <ul className="rule-list">
              {onProbation
                .sort((a, b) => (a.probationDays ?? 0) - (b.probationDays ?? 0))
                .map((e) => {
                  const d = e.probationDays ?? 0
                  const pct = Math.max(4, Math.min(100, 100 - (d / 90) * 100))
                  return (
                    <li key={e.id} style={{ display: 'grid', gap: 8 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                        <span><strong style={{ fontWeight: 500 }}>{e.name}</strong> <span className="muted small">{e.role}</span></span>
                        <span className={`pill ${d <= 30 ? 'pill--warn' : 'pill--info'}`}>{d} days left{d <= 30 ? ', reminder sent' : ''}</span>
                      </div>
                      <div className="bar" role="img" aria-label={`${Math.round(pct)}% of probation complete`}><span style={{ width: `${pct}%` }} /></div>
                    </li>
                  )
                })}
            </ul>
          </>
        )}
      </div>
    </DemoFrame>
  )
}

/* ---------------- Scorecard ---------------- */

export function ScorecardDemo() {
  const [i, setI] = useState(0)
  const [scores, setScores] = useState({ kpi: 4, competence: 3.5, behaviour: 4.5 })
  const c = cascade[i]
  const weights = { kpi: 0.5, competence: 0.3, behaviour: 0.2 }
  const total = scores.kpi * weights.kpi + scores.competence * weights.competence + scores.behaviour * weights.behaviour
  const band = total >= 4.5 ? 'Exceptional' : total >= 3.75 ? 'Strong' : total >= 3 ? 'Meets expectations' : 'Development needed'

  const rows: { key: keyof typeof scores; label: string }[] = [
    { key: 'kpi', label: 'KPI achievement (50%)' },
    { key: 'competence', label: 'Job competence (30%)' },
    { key: 'behaviour', label: 'Behaviour and values (20%)' },
  ]

  return (
    <DemoFrame title="Harbourline performance scorecard" note="Objectives, KPIs and weights are illustrative and belong to the fictional Harbourline Group.">
      <div className="demo-body">
        <div className="split split--even" style={{ gap: 'var(--s-6)' }}>
          <div>
            <h4 style={{ marginBottom: 'var(--s-3)' }}>Follow an objective down to a role</h4>
            <div className="field-inline">
              <label htmlFor="persp" className="small">Perspective</label>
              <select id="persp" value={i} onChange={(e) => setI(Number(e.target.value))}>
                {cascade.map((x, n) => <option key={x.perspective} value={n}>{x.perspective}</option>)}
              </select>
            </div>
            <div className="cascade" aria-live="polite">
              <div className="cascade-level"><div className="k">Organisational objective</div><div className="v">{c.objective}</div></div>
              <div className="cascade-level"><div className="k">{c.dept} objective</div><div className="v">{c.deptObjective}</div></div>
              <div className="cascade-level">
                <div className="k">KPIs for the {c.role}</div>
                <ul className="ticks" style={{ marginTop: 6 }}>{c.kpis.map((k) => <li key={k}>{k}</li>)}</ul>
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--s-3)' }}>Score a six-monthly assessment</h4>
            <div className="weights">
              {rows.map((r) => (
                <div className="weight-row" key={r.key}>
                  <label htmlFor={`w-${r.key}`} className="small">{r.label}</label>
                  <output htmlFor={`w-${r.key}`} className="small" style={{ fontVariantNumeric: 'tabular-nums' }}>{scores[r.key].toFixed(1)} / 5</output>
                  <input id={`w-${r.key}`} type="range" min={1} max={5} step={0.5} value={scores[r.key]} onChange={(e) => setScores((s) => ({ ...s, [r.key]: Number(e.target.value) }))} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--s-5)', display: 'flex', gap: 'var(--s-4)', alignItems: 'baseline', flexWrap: 'wrap' }} aria-live="polite">
              <span className="score-total">{total.toFixed(2)}</span>
              <span>out of 5, <strong style={{ fontWeight: 500 }}>{band}</strong></span>
            </div>
            <p className="small muted" style={{ marginTop: 'var(--s-3)' }}>
              {total < 3.5
                ? 'Development recommendation: agree one learning action against the weakest component and review it at the next monthly check-in.'
                : 'Development recommendation: agree a stretch goal for the next half-year and record it in the development plan.'}
            </p>
          </div>
        </div>
        <h4 style={{ margin: 'var(--s-6) 0 var(--s-3)' }}>Review rhythm</h4>
        <div className="table-wrap" tabIndex={0} role="region" aria-label="Review rhythm">
          <table>
            <thead><tr><th>Review</th><th>When</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Check-in</td><td>Monthly</td><td>Track progress and remove obstacles</td></tr>
              <tr><td>Quarterly review</td><td>Every three months</td><td>Assess KPIs and adjust targets</td></tr>
              <tr><td>Management assessment</td><td>Every six months</td><td>Weighted score, summary and development needs</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DemoFrame>
  )
}

/* ---------------- Learning hub ---------------- */

export function LearningHubDemo() {
  const tabs = ['Onboarding pathway', 'Development plan', 'Resources'] as const
  const [tab, setTab] = useState<(typeof tabs)[number]>('Onboarding pathway')
  const allItems = onboardingSteps.flatMap((p) => p.items)
  const [done, setDone] = useState<Set<string>>(() => new Set(onboardingSteps[0].items.slice(0, 2)))
  const pct = Math.round((done.size / allItems.length) * 100)
  const toggle = (x: string) =>
    setDone((s) => {
      const n = new Set(s)
      if (n.has(x)) n.delete(x)
      else n.add(x)
      return n
    })

  return (
    <DemoFrame title="Harbourline people hub">
      <Tabs tabs={tabs} value={tab} onChange={setTab} label="Hub sections" />
      <div className="demo-body" role="tabpanel">
        {tab === 'Onboarding pathway' && (
          <>
            <p className="small muted">Viewing as Ibrahim Musa, Operations Associate, week one. His manager sees the same progress.</p>
            <div style={{ display: 'grid', gap: 6, margin: 'var(--s-4) 0 var(--s-5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className="small">
                <span>Onboarding progress</span>
                <span aria-live="polite">{pct}% complete</span>
              </div>
              <div className="bar"><span style={{ width: `${pct}%` }} /></div>
            </div>
            <div className="phase-grid">
              {onboardingSteps.map((p) => (
                <fieldset key={p.phase} style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-md)', padding: 'var(--s-3) var(--s-4)', margin: 0 }}>
                  <legend className="small" style={{ fontWeight: 600, padding: '0 6px' }}>{p.phase}</legend>
                  <ul className="check-list">
                    {p.items.map((x) => (
                      <li key={x}>
                        <label>
                          <input type="checkbox" checked={done.has(x)} onChange={() => toggle(x)} />
                          <span>{x}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              ))}
            </div>
          </>
        )}
        {tab === 'Development plan' && (
          <>
            <p className="small muted">Kelechi Obi, Support Specialist. Each activity traces back to a skill gap from a review.</p>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="Development plan">
              <table>
                <thead><tr><th>Skill gap</th><th>Activity</th><th>Source</th><th>Due</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>Handling escalations</td><td>De-escalation course, 4 hours</td><td>Quarterly review</td><td>30 Nov</td><td><span className="pill pill--info">In progress</span></td></tr>
                  <tr><td>Product knowledge</td><td>Service catalogue SOP walkthrough</td><td>Monthly check-in</td><td>20 Nov</td><td><span className="pill pill--ok">Completed</span></td></tr>
                  <tr><td>Written communication</td><td>Business writing module</td><td>Employee request</td><td>15 Dec</td><td><span className="pill">Not started</span></td></tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {tab === 'Resources' && (
          <div className="phase-grid">
            {[
              ['Policies', 'Leave, conduct, remote work, data protection'],
              ['Standard operating procedures', 'Step-by-step guides for each department'],
              ['Role playbooks', 'Scripts, content calendars and people to learn from, by role'],
              ['Recorded sessions', 'Welcome talks and product walkthroughs to watch any time'],
            ].map(([t, d]) => (
              <div key={t} style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-md)', padding: 'var(--s-4)' }}>
                <h4>{t}</h4>
                <p className="small muted" style={{ margin: '4px 0 0' }}>{d}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </DemoFrame>
  )
}

/* ---------------- Recruitment ---------------- */

type Key = 'screening' | 'assessment' | 'interview' | 'total'

export function RecruitmentDemo() {
  const [sortKey, setSortKey] = useState<Key>('total')
  const rows = candidates
    .map((c) => ({ ...c, total: c.screening + c.assessment + c.interview }))
    .sort((a, b) => b[sortKey] - a[sortKey])
  const cols: { key: Key; label: string }[] = [
    { key: 'screening', label: 'CV screening /20' },
    { key: 'assessment', label: 'Assessment /40' },
    { key: 'interview', label: 'Interview /40' },
    { key: 'total', label: 'Total /100' },
  ]
  const stages = ['Requisition', 'Screening', 'Assessment', 'Interview', 'Decision', 'Onboarding handover']
  return (
    <DemoFrame title="Harbourline recruitment: Customer Experience Officer">
      <div className="demo-body">
        <ol className="chips" aria-label="Recruitment stages" style={{ marginBottom: 'var(--s-5)' }}>
          {stages.map((s, n) => (
            <li key={s} style={n === 3 ? { background: 'var(--ink)', color: 'var(--on-ink)', borderColor: 'var(--ink)' } : undefined}>
              {n + 1}. {s}
            </li>
          ))}
        </ol>
        <p className="small muted">Sort by any stage to see how the ranking shifts. Candidate D has the strongest assessment but not the strongest overall score, which is why decisions use combined evidence.</p>
        <div className="table-wrap" tabIndex={0} role="region" aria-label="Candidate comparison">
          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                {cols.map((c) => (
                  <th key={c.key} aria-sort={sortKey === c.key ? 'descending' : 'none'}>
                    <button className="sort-btn" onClick={() => setSortKey(c.key)}>
                      {c.label} <ArrowDownUp aria-hidden="true" />
                    </button>
                  </th>
                ))}
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <td style={{ color: 'var(--ink)' }}>{r.name}</td>
                  <td>{r.screening}</td>
                  <td>{r.assessment}</td>
                  <td>{r.interview}</td>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{r.total}</td>
                  <td>
                    <span className={`pill ${r.total >= 80 ? 'pill--ok' : r.total >= 74 ? 'pill--info' : ''}`}>
                      {r.total >= 80 ? 'Offer' : r.total >= 74 ? 'Reserve' : 'Decline'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DemoFrame>
  )
}

/* ---------------- Analytics ---------------- */

function Bars({ data, max, suffix = '' }: { data: { label: string; value: number }[]; max: number; suffix?: string }) {
  const rowH = 30
  return (
    <svg viewBox={`0 0 360 ${data.length * rowH}`} role="img" aria-label={data.map((d) => `${d.label} ${d.value}${suffix}`).join(', ')}>
      {data.map((d, n) => {
        const w = (d.value / max) * 200
        return (
          <g key={d.label} transform={`translate(0 ${n * rowH})`}>
            <text x={0} y={18}>{d.label}</text>
            <rect x={130} y={7} width={200} height={14} rx={3} fill="var(--wash)" />
            <rect x={130} y={7} width={w} height={14} rx={3} fill="var(--accent)" />
            <text x={130 + w + 6} y={18} style={{ fill: 'var(--ink)' }}>{d.value}{suffix}</text>
          </g>
        )
      })}
    </svg>
  )
}

function Movement() {
  const { months, joiners, leavers } = analytics.movement
  const W = 360, H = 150, pad = 24, max = 3
  const x = (i: number) => pad + (i * (W - pad * 2)) / (months.length - 1)
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2)
  const line = (arr: number[]) => arr.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Joiners and leavers by month. Joiners total ${joiners.reduce((a, b) => a + b)}, leavers total ${leavers.reduce((a, b) => a + b)}.`}>
      {[0, 1, 2, 3].map((v) => (
        <g key={v}>
          <line x1={pad} x2={W - pad} y1={y(v)} y2={y(v)} stroke="var(--line)" />
          <text x={4} y={y(v) + 4}>{v}</text>
        </g>
      ))}
      <path d={line(joiners)} fill="none" stroke="var(--accent)" strokeWidth={2} />
      <path d={line(leavers)} fill="none" stroke="var(--ink)" strokeWidth={2} strokeDasharray="4 4" />
      {months.map((m, i) => (i % 2 === 0 ? <text key={m} x={x(i)} y={H - 4} textAnchor="middle">{m}</text> : null))}
      <text x={W - pad} y={y(joiners[joiners.length - 1]) - 8} textAnchor="end" style={{ fill: 'var(--accent)' }}>Joiners</text>
      <text x={W - pad - 60} y={y(2) - 4} textAnchor="end" style={{ fill: 'var(--ink)' }}>Leavers</text>
    </svg>
  )
}

export function AnalyticsDemo() {
  return (
    <DemoFrame title="Harbourline people dashboard" note="Every figure here is invented for illustration. Groups smaller than five people would not be shown separately in a real dashboard.">
      <div className="demo-body">
        <div className="demo-kpis">
          <div className="kpi"><div className="v">120</div><div className="l">Employees</div></div>
          <div className="kpi"><div className="v">41 days</div><div className="l">Average time to hire</div></div>
          <div className="kpi"><div className="v">31%</div><div className="l">Annual leave unused at Q3</div></div>
          <div className="kpi"><div className="v">3.6 / 5</div><div className="l">Engagement pulse</div></div>
        </div>
        <div className="charts">
          <div className="chart">
            <h4>Headcount by department</h4>
            <Bars data={analytics.headcount} max={50} />
            <p className="meaning"><strong>What it suggests:</strong> Operations holds 38% of the workforce, so it carries the largest capacity and retention risk. <strong>Decision:</strong> where to focus workforce planning first.</p>
          </div>
          <div className="chart">
            <h4>Joiners and leavers, last 12 months</h4>
            <Movement />
            <p className="meaning"><strong>What it suggests:</strong> 14 joiners against 9 leavers, but 5 of the 9 left Sales within their first year. <strong>Decision:</strong> review Sales onboarding and role clarity.</p>
          </div>
          <div className="chart">
            <h4>Learning completed on time</h4>
            <Bars data={analytics.learning} max={100} suffix="%" />
            <p className="meaning"><strong>What it suggests:</strong> most teams are on track; Sales and Operations lag. <strong>Decision:</strong> managers in those teams follow up at the next check-in.</p>
          </div>
          <div className="chart">
            <h4>Operational exceptions</h4>
            <ul className="ticks">
              <li>6 probation reviews overdue</li>
              <li>4 employees with no check-in logged this month</li>
              <li>2 senior roles open longer than 60 days</li>
            </ul>
            <p className="meaning"><strong>Decision:</strong> HR escalates overdue reviews to managers this week; leadership decides whether to widen senior sourcing.</p>
          </div>
        </div>
      </div>
    </DemoFrame>
  )
}

export const demoBySlug: Record<string, () => ReactNode> = {
  hris: () => <HrisDemo />,
  scorecard: () => <ScorecardDemo />,
  'learning-hub': () => <LearningHubDemo />,
  recruitment: () => <RecruitmentDemo />,
  analytics: () => <AnalyticsDemo />,
}
