import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl">Kena Blinds</h3>
          <p className="mt-3 text-sm">Premium blinds and curtains across Melbourne & Victoria.</p>
        </div>

        <div>
          <h4 className="font-serif">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> kenablinds21@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +61 466 212 796
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Melbourne, VIC, Australia
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif">Follow</h4>
          <div className="mt-3 flex items-center gap-4">
            <Link
              href="https://www.instagram.com/kenablinds/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="h-5 w-5" /> Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61575724593841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Facebook className="h-5 w-5" /> Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t">
        © {new Date().getFullYear()} Kena Blinds. All rights reserved.
      </div>
    </footer>
  )
}
