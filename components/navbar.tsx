"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <header
      id="home"
      className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-serif text-xl tracking-wide">
          <span className="sr-only">Kena Blinds home</span>
          Kena Blinds
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild className="rounded-full">
            <a href="#contact" aria-label="Get a Free Quote">
              Get a Free Quote
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Free Quote
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
