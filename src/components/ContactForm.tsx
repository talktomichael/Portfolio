import { Loader2, Send } from 'lucide-react'
import { useRef, useState, type FormEvent } from 'react'
import { site } from '../content/site'

const ENQUIRY_TYPES = ['Job opportunity', 'HR systems or People Operations project', 'Collaboration or speaking', 'Other'] as const

type Values = { name: string; email: string; organisation: string; enquiry: string; message: string }
type Errors = Partial<Record<keyof Values, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!EMAIL.test(v.email.trim())) e.email = 'Enter an email address like name@company.com.'
  if (!ENQUIRY_TYPES.includes(v.enquiry as (typeof ENQUIRY_TYPES)[number])) e.enquiry = 'Choose what your message is about.'
  if (v.message.trim().length < 20) e.message = 'Write a message of at least 20 characters so I can reply properly.'
  if (v.message.length > 5000) e.message = 'Keep the message under 5,000 characters.'
  return e
}

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; text: string }

/**
 * Sends to Formspree, which emails the message to Michael and applies its own
 * server-side validation and spam filtering. A hidden "_gotcha" field catches
 * simple bots. The success message only appears after Formspree confirms receipt.
 */
export function ContactForm() {
  const [v, setV] = useState<Values>({ name: '', email: '', organisation: '', enquiry: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const formRef = useRef<HTMLFormElement>(null)

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setV((x) => ({ ...x, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(v)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    const gotcha = (formRef.current?.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: v.name.trim(),
          email: v.email.trim(),
          organisation: v.organisation.trim(),
          enquiry: v.enquiry,
          message: v.message.trim(),
          _replyto: v.email.trim(),
          _subject: `Portfolio enquiry: ${v.enquiry}`,
          _gotcha: gotcha ?? '',
        }),
      })
      if (res.ok) {
        setStatus({ kind: 'sent' })
        setV({ name: '', email: '', organisation: '', enquiry: '', message: '' })
        return
      }
      const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null
      const detail = data?.errors?.map((x) => x.message).join(' ')
      setStatus({ kind: 'error', text: detail ? `The message was not sent: ${detail.replace(/\.?$/, ".")}` : 'The message was not sent. The form service returned an error.' })
    } catch {
      setStatus({ kind: 'error', text: 'The message was not sent because the form service could not be reached.' })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div className="form" role="status" aria-live="polite">
        <h2 style={{ fontSize: 'var(--fs-lg)' }}>Message sent</h2>
        <p>Thank you. Your message is in my inbox and I’ll reply to the email address you gave.</p>
        <div className="actions">
          <button className="btn btn--secondary" onClick={() => setStatus({ kind: 'idle' })}>Send another message</button>
        </div>
      </div>
    )
  }

  const sending = status.kind === 'sending'
  const err = (k: keyof Values) =>
    errors[k] ? (
      <span className="err" id={`${k}-err`}>{errors[k]}</span>
    ) : null
  const a11y = (k: keyof Values) => ({ 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <form ref={formRef} className="form" onSubmit={submit} noValidate aria-label="Contact form">
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" value={v.name} onChange={set('name')} required {...a11y('name')} />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" value={v.email} onChange={set('email')} required {...a11y('email')} />
          {err('email')}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="organisation">Organisation <span className="opt">(optional)</span></label>
          <input id="organisation" name="organisation" autoComplete="organization" value={v.organisation} onChange={set('organisation')} />
        </div>
        <div className="field">
          <label htmlFor="enquiry">What is it about?</label>
          <select id="enquiry" name="enquiry" value={v.enquiry} onChange={set('enquiry')} required {...a11y('enquiry')}>
            <option value="">Choose one</option>
            {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          {err('enquiry')}
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={v.message} onChange={set('message')} required maxLength={5000} {...a11y('message')} />
        {err('message')}
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      {status.kind === 'error' && (
        <div className="form-status form-status--err" role="alert">
          {status.text} Please try again, or email <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </div>
      )}
      <div className="actions">
        <button className="btn btn--primary" type="submit" disabled={sending}>
          {sending ? <><Loader2 className="spin" aria-hidden="true" /> Sending</> : <><Send aria-hidden="true" /> Send message</>}
        </button>
        <span className="small muted">Your message comes straight to my inbox.</span>
      </div>
    </form>
  )
}
