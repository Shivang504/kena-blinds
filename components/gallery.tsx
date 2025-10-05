export function Gallery() {
  const images = [
    { src: "/elegant-interior-with-curtains.jpg", alt: "Elegant interior with curtains" },
    { src: "/luxury-living-room-with-roller-blinds.jpg", alt: "Luxury living room with roller blinds" },
    { src: "/modern-kitchen-with-venetian-blinds.jpg", alt: "Modern kitchen with venetian blinds" },
    { src: "/roman-blinds.jpg", alt: "Roman blinds in cozy living space" },
    { src: "/sheer-curtains.jpg", alt: "Sheer curtains filtering natural light" },
    { src: "/plantation-shutters.jpg", alt: "Plantation shutters for classic style" },
    { src: "/venetian-blinds.jpg", alt: "Venetian blinds with clean lines" },
    { src: "/vertical-blinds.jpg", alt: "Vertical blinds for large windows" },
    { src: "/blackout-curtains.png", alt: "Blackout curtains for bedrooms" },
    { src: "/soft-sheer-curtains-in-sunlit-bedroom.jpg", alt: "Soft sheer curtains in sunlit bedroom" },
  ]
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg border">
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
