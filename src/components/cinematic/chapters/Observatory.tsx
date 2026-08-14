'use client'

import { contact } from '@/data/story'
import { motion } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { FaGithub, FaLinkedin, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { RisingParticles } from '../Atmosphere'

export default function Observatory() {
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
        body: JSON.stringify({ ...form, subject: 'Observatory message' }),
      })
      setStatus(res.ok ? 'Message sent into the night.' : 'The signal faded. Try again.')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('The signal faded. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="observatory"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-28"
    >
      <RisingParticles count={28} />

      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="font-body text-[11px] tracking-[0.45em] text-violet-300/45 uppercase">
          Final Chapter
        </p>
        <h2 className="mt-4 font-display text-4xl text-violet-50 md:text-6xl">The Observatory</h2>
        <motion.div
          className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-violet-200/60 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 }}
        />
        <p className="mt-6 font-display text-xl text-violet-100/80 md:text-2xl">
          The next chapter begins with a conversation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel relative z-10 mt-14 w-full max-w-xl p-6 md:p-8"
      >
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className="observatory-input"
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Your email"
            className="observatory-input"
          />
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="What should we build?"
            className="observatory-input resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="glow-btn flex w-full items-center justify-center gap-2"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
            {loading ? 'Sending…' : 'Begin the next chapter'}
          </button>
          {status && <p className="text-center font-body text-sm text-violet-200/70">{status}</p>}
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-violet-300/10 pt-6">
          <a href={`mailto:${contact.email}`} className="glow-btn-ghost text-sm">
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-ghost inline-flex items-center gap-2 text-sm"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-ghost inline-flex items-center gap-2 text-sm"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay: 0.4 }}
        className="relative z-10 mt-16 font-body text-[10px] tracking-[0.4em] text-violet-200/40 uppercase"
      >
        Journey complete · Thank you for traveling
      </motion.p>
    </section>
  )
}
