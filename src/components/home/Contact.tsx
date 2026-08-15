'use client'

import { contact } from '@/data/story'
import { FormEvent, useState } from 'react'
import { FaGithub, FaLinkedin, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: 'Portfolio message' }),
      })
      setStatus(res.ok ? "Sent — I'll get back to you soon." : 'Something went wrong. Try again?')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Something went wrong. Try again?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Get in touch" title="Let's build something" />
      <div className="card-hard mx-auto max-w-xl p-7">
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className="input-hard"
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Your email"
            className="input-hard"
          />
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="What should we build?"
            className="input-hard resize-none"
          />
          <button type="submit" disabled={loading} className="btn-hard btn-hard-dark w-full justify-center">
            {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
            {loading ? 'Sending…' : 'Send it'}
          </button>
          {status && (
            <p className="text-center font-body text-sm" style={{ color: 'var(--ink-soft)' }}>
              {status}
            </p>
          )}
        </form>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-6"
          style={{ borderTop: '3px solid var(--ink)' }}
        >
          <a href={`mailto:${contact.email}`} className="btn-hard text-xs">
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-hard text-xs">
            <FaGithub /> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-hard text-xs">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
