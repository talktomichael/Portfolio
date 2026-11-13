import { BarChart3, Database, GraduationCap, Target, UserPlus, Users } from 'lucide-react'
import { href, useRouter } from '../lib/router'
import type { MouseEvent } from 'react'

type Node = {
  key: string
  label: string
  sub: string
  angle: number
  Icon: typeof Users
  slug: string
}

const R = 138
const C = 200

const outer: Node[] = [
  { key: 'hire', label: 'Hire', sub: 'Assessment', angle: -90, Icon: UserPlus, slug: 'structured-recruitment' },
  { key: 'onboard', label: 'Onboard', sub: 'Enablement', angle: -18, Icon: Users, slug: 'employee-enablement' },
  { key: 'perform', label: 'Perform', sub: 'Scorecard', angle: 54, Icon: Target, slug: 'strategy-to-performance' },
  { key: 'develop', label: 'Develop', sub: 'L&D', angle: 126, Icon: GraduationCap, slug: 'learning-and-development' },
  { key: 'insight', label: 'Insight', sub: 'Reporting', angle: 198, Icon: BarChart3, slug: 'custom-hris' },
]

const pos = (a: number) => ({ x: C + R * Math.cos((a * Math.PI) / 180), y: C + R * Math.sin((a * Math.PI) / 180) })

/**
 * The people system as one connected loop around a single employee record.
 * The hero's typewriter tells the map which stage it is describing; every node
 * links to the case study that shows that stage in practice.
 */
export function SystemMap({ active }: { active: string }) {
  const { go } = useRouter()
  const all = active === 'structure'
  const centreOn = all || active === 'records'
  const isOn = (k: string) => all || active === k

  const open = (e: MouseEvent, slug: string) => {
    e.preventDefault()
    go({ name: 'case-study', slug })
  }

  return (
    <figure className="sysmap">
      <svg viewBox="-20 0 440 410" role="group" aria-label="People system map: hire, onboard, perform, develop and insight, connected through one employee record">
        <circle className="ring" cx={C} cy={C} r={R} />
        {outer.map((n) => {
          const p = pos(n.angle)
          return <line key={`e-${n.key}`} className={`edge ${isOn(n.key) || centreOn ? 'is-on' : ''}`} x1={C} y1={C} x2={p.x} y2={p.y} />
        })}

        <a href={href({ name: 'case-study', slug: 'custom-hris' })} onClick={(e) => open(e, 'custom-hris')} aria-label="Employee record: read the HRIS case study">
          <g className={`node ${centreOn ? 'is-on' : ''}`}>
            <circle cx={C} cy={C} r={46} />
            <Database className="glyph" x={C - 11} y={C - 22} width={22} height={22} stroke="currentColor" style={{ color: centreOn ? 'var(--signal)' : 'var(--accent)' }} />
            <text x={C} y={C + 18} textAnchor="middle" style={{ fill: centreOn ? 'var(--on-ink)' : 'var(--ink)', fontSize: 11 }}>
              One record
            </text>
          </g>
        </a>

        {outer.map((n) => {
          const p = pos(n.angle)
          const on = isOn(n.key)
          const below = p.y > C + 10
          const labelY = below ? p.y + 50 : p.y - 46
          return (
            <a key={n.key} href={href({ name: 'case-study', slug: n.slug })} onClick={(e) => open(e, n.slug)} aria-label={`${n.label}: read the related case study`}>
              <g className={`node ${on ? 'is-on' : ''}`}>
                <circle cx={p.x} cy={p.y} r={30} />
                <n.Icon x={p.x - 11} y={p.y - 11} width={22} height={22} style={{ color: on ? 'var(--signal)' : 'var(--accent)' }} />
                <text x={p.x} y={labelY} textAnchor="middle">{n.label}</text>
                <text className="sub" x={p.x} y={labelY + 15} textAnchor="middle">{n.sub}</text>
              </g>
            </a>
          )
        })}
      </svg>
      <figcaption className="sysmap-caption">Select any stage to see the work behind it.</figcaption>
    </figure>
  )
}
