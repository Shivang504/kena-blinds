import type { AboutContent } from "@/lib/cms-types"

type AboutProps = {
  content: AboutContent
}

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">{content.heading}</h2>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mt-4 leading-relaxed" : "mt-3 leading-relaxed"}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border">
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
