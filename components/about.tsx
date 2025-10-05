export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">About Kena Blinds</h2>
          <p className="mt-4 leading-relaxed">
            Based in Melbourne, VIC, Kena Blinds provides premium blinds and custom curtains for homes and businesses
            across Victoria. We focus on elegant design, quality materials, and a smooth installation experience.
          </p>
          <p className="mt-3 leading-relaxed">
            From roller and venetian blinds to sheer and blackout curtains, our curated selection enhances light
            control, privacy, and style.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border">
          <img
            src="/elegant-interior-with-curtains.jpg"
            alt="Elegant interior showcasing custom curtains"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
