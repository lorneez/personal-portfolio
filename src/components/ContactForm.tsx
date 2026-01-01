import { useMemo, useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkognqeg'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    const n = name.trim()
    const e = email.trim()
    const m = message.trim()
    return n.length >= 2 && isValidEmail(e) && m.length >= 10 && status !== 'sending'
  }, [name, email, message, status])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg(null)

    if (!canSubmit) {
      if (!isValidEmail(email)) setErrorMsg('Invalid email.')
      else if (message.trim().length < 10) setErrorMsg('Message must be at least 10 characters.')
      else setErrorMsg('Please fill required fields.')
      return
    }

    setStatus('sending')

    try {
      const formData = new FormData()
      formData.append('name', name.trim())
      formData.append('email', email.trim())
      formData.append('message', message.trim())

      // extras (nice in inbox)
      formData.append('_subject', 'New message from lornezhang.me')
      formData.append('page', window.location.pathname)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) throw new Error('Send failed')

      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
      setErrorMsg('Failed to send. Try again in a moment.')
    }
  }

  return (
    <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12 overflow-hidden">
      {/* File Tab Header (matches Bio) */}
      <div className="flex items-center justify-between mb-6 -mt-2 sm:-mt-4 md:-mt-6 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 py-2 bg-terminal-bg border-b border-terminal-border">
        <div className="flex items-center gap-2 px-3 py-1 bg-terminal-bgLight border-t-2 border-terminal-cyan rounded-t text-xs sm:text-sm font-mono">
          <span className="text-terminal-text">Contact.tsx</span>
        </div>
        <div className="text-xs text-terminal-comment font-mono hidden sm:block">
          TypeScript JSX • 60-ish lines
        </div>
      </div>

      {/* “Imports” */}
      <div className="mb-6 space-y-1 text-xs sm:text-sm font-mono">
        <p className="text-terminal-purple">
          <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
          <span className="text-terminal-blue">name</span><span className="text-terminal-text">, </span>
          <span className="text-terminal-blue">email</span><span className="text-terminal-text">, </span>
          <span className="text-terminal-blue">message</span> <span className="text-terminal-text">{`}`}</span>
          <span className="text-terminal-purple"> from </span>
          <span className="text-terminal-orange">'@/humans'</span>
        </p>
        <p className="text-terminal-purple">
          <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
          <span className="text-terminal-blue">deliver</span> <span className="text-terminal-text">{`}`}</span>
          <span className="text-terminal-purple"> from </span>
          <span className="text-terminal-orange">'formspree'</span>
        </p>
      </div>

      {/* Function Declaration */}
      <h2 className="text-xl sm:text-2xl font-display font-bold text-terminal-yellow mb-4">
        <span className="text-terminal-purple">export function</span>{' '}
        <span className="text-terminal-yellow">ContactMe</span>
        <span className="text-terminal-text">() {`{`}</span>
      </h2>

      {/* Code-style body with line numbers */}
      <div className="pl-4 sm:pl-6 space-y-4 text-terminal-text leading-relaxed font-mono text-xs sm:text-sm overflow-x-auto break-words">
        <div className="flex gap-4">
          <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">1</span>
          <p className="flex-1">
            <span className="text-terminal-comment">// </span>
            If you want to reach me, drop a message here.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Row: name + email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-4">
              <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">2</span>
              <div className="flex-1 space-y-1">
                <div className="text-terminal-blue">name <span className="text-terminal-red">*</span></div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-md bg-terminal-bg border border-terminal-border px-3 py-2 text-terminal-text placeholder:text-terminal-comment focus:outline-none focus:ring-2 focus:ring-terminal-cyan/40"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">3</span>
              <div className="flex-1 space-y-1">
                <div className="text-terminal-blue">email <span className="text-terminal-red">*</span></div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@domain.com"
                  className="w-full rounded-md bg-terminal-bg border border-terminal-border px-3 py-2 text-terminal-text placeholder:text-terminal-comment focus:outline-none focus:ring-2 focus:ring-terminal-cyan/40"
                  required
                />
              </div>
            </div>
          </div>

          {/* Row: message */}
          <div className="flex gap-4">
            <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">5</span>
            <div className="flex-1 space-y-1">
              <div className="text-terminal-blue">message <span className="text-terminal-red">*</span></div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                placeholder="What’s up?"
                className="w-full rounded-md bg-terminal-bg border border-terminal-border px-3 py-2 text-terminal-text placeholder:text-terminal-comment focus:outline-none focus:ring-2 focus:ring-terminal-cyan/40 resize-y"
                required
              />
              <div className="text-xs text-terminal-comment">
                <span className="text-terminal-comment">// </span>
                min 10 chars • {message.trim().length}/500
              </div>
            </div>
          </div>

          {/* Status */}
          {errorMsg && (
            <div className="flex gap-4">
              <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">6</span>
              <div className="flex-1 rounded-md border border-terminal-red/40 bg-terminal-red/10 px-3 py-2 text-terminal-red">
                {errorMsg}
              </div>
            </div>
          )}

          {status === 'sent' && (
            <div className="flex gap-4">
              <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">6</span>
              <div className="flex-1 rounded-md border border-terminal-green/40 bg-terminal-green/10 px-3 py-2 text-terminal-green">
                Sent. I’ll get back to you.
              </div>
            </div>
          )}

          {/* Button */}
          <div className="flex gap-4 items-center">
            <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">7</span>
            <div className="flex-1 flex items-center gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-mono text-sm border transition-colors
                  ${canSubmit
                    ? 'bg-terminal-cyan/15 border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/25'
                    : 'bg-terminal-bg border-terminal-border text-terminal-comment cursor-not-allowed'
                  }`}
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>

              <span className="text-xs text-terminal-comment">
                <span className="text-terminal-comment">// </span>
                {status === 'idle' && 'delivers via Formspree'}
                {status === 'sending' && 'posting…'}
                {status === 'error' && 'retry'}
                {status === 'sent' && 'done'}
              </span>
            </div>
          </div>
        </form>

        {/* Close return + function (to match Bio vibe) */}
        <div className="flex gap-4">
          <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">8</span>
          <p className="flex-1 text-terminal-purple">
            <span className="text-terminal-purple">return</span> <span className="text-terminal-text">{`{ sent: `}</span>
            <span className={status === 'sent' ? 'text-terminal-green' : 'text-terminal-comment'}>
              {status === 'sent' ? 'true' : 'false'}
            </span>
            <span className="text-terminal-text">{` }`}</span>
          </p>
        </div>
      </div>

      <div className="text-xl sm:text-2xl font-display font-bold text-terminal-text mt-4">
        {`}`}
      </div>
    </div>
  )
}
