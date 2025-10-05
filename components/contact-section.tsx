"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const EMAIL = "kenablinds21@gmail.com"
const PHONE_DISPLAY = "+61 466 212 796"
const WHATSAPP_URL = "https://wa.me/61466212796"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = "YOUR_SERVICE_ID"
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID"
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: EMAIL,
        },
        PUBLIC_KEY
      )

      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("Email send error:", err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Get a Free Quote</h2>
          <p className="mt-3 leading-relaxed">
            Reach out by email, phone, or WhatsApp. We serve Melbourne and surrounding areas across Victoria.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" /> {EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Melbourne, VIC, Australia
            </li>
          </ul>
          <div className="mt-4">
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-4 md:p-6 space-y-4">
          <div>
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="rounded-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Enquiry"}
          </Button>

          {/* live status updates for screen readers and users */}
          <div aria-live="polite" className="text-sm">
            {status === "success" && (
              <p className="text-green-600">
                Thanks! Your enquiry has been sent successfully. We’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                We couldn’t send your message automatically. You can also email us at {EMAIL} or WhatsApp us via{" "}
                <a
                  className="underline"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  chat
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
