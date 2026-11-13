import { memo, useEffect, useState } from 'react'
import { usePageVisible, usePrefersReducedMotion } from '../lib/hooks'

type Props = {
  statements: string[]
  typeMs?: number
  deleteMs?: number
  pauseMs?: number
  /** Called when a new statement starts, so other parts of the hero can follow along. */
  onIndexChange?: (i: number) => void
}

type Phase = 'typing' | 'pausing' | 'deleting'

/**
 * Types each statement, pauses, erases it and moves on.
 * - The longest statement is rendered invisibly in the same grid cell, so the
 *   block never changes height between statements.
 * - The animated text is hidden from assistive technology; a static sentence
 *   carries the meaning instead, so screen readers don't hear every character.
 * - It stops when the tab is hidden and shows a still statement if the visitor
 *   prefers reduced motion.
 */
function TypewriterImpl({ statements, typeMs = 42, deleteMs = 22, pauseMs = 2300, onIndexChange }: Props) {
  const reduced = usePrefersReducedMotion()
  const visible = usePageVisible()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')

  const current = statements[index]

  useEffect(() => {
    onIndexChange?.(index)
  }, [index, onIndexChange])

  useEffect(() => {
    if (reduced || !visible) return
    let t: number
    if (phase === 'typing') {
      if (count < current.length) {
        // Slightly slower after punctuation reads as more natural.
        const prev = current[count - 1]
        const delay = prev === ',' ? typeMs * 5 : typeMs + Math.random() * 18
        t = window.setTimeout(() => setCount((c) => c + 1), delay)
      } else {
        t = window.setTimeout(() => setPhase('deleting'), pauseMs)
      }
    } else if (phase === 'deleting') {
      if (count > 0) {
        t = window.setTimeout(() => setCount((c) => c - 1), deleteMs)
      } else {
        t = window.setTimeout(() => {
          setIndex((i) => (i + 1) % statements.length)
          setPhase('typing')
        }, 260)
      }
    }
    return () => window.clearTimeout(t)
  }, [phase, count, current, reduced, visible, typeMs, deleteMs, pauseMs, statements.length])

  const shown = reduced ? statements[0] : current.slice(0, count)

  return (
    <p className="typewriter">
      <span className="sr-only">{statements[0]}</span>
      {/* Every statement is laid out invisibly in the same cell, so the block takes
          the height of whichever one wraps to the most lines at the current width. */}
      {statements.map((s) => (
        <span className="tw-sizer" aria-hidden="true" key={s}>
          {s}
          <span className="tw-cursor" />
        </span>
      ))}
      <span className="tw-live" aria-hidden="true">
        {shown}
        {!reduced && <span className="tw-cursor" />}
      </span>
    </p>
  )
}

export const Typewriter = memo(TypewriterImpl)
