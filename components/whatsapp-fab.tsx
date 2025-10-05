import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/61466212796"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
