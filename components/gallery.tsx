export function Gallery() {
  const images = [
    { src: '/luxury-living-room-with-roller-blinds.jpg', alt: 'Luxury living room with roller blinds' },
    { src: '/modern-kitchen-with-venetian-blinds.jpg', alt: 'Modern kitchen with venetian blinds' },
    { src: '/roman-blinds.jpg', alt: 'Roman blinds in cozy living space' },
    { src: '/sheer-curtains.jpg', alt: 'Sheer curtains filtering natural light' },
    { src: '/plantation-shutters.jpg', alt: 'Plantation shutters for classic style' },
    { src: '/venetian-blinds.jpg', alt: 'Venetian blinds with clean lines' },
    { src: '/vertical-blinds.jpg', alt: 'Vertical blinds for large windows' },
    { src: '/blackout-curtains.png', alt: 'Blackout curtains for bedrooms' },
    { src: '/soft-sheer-curtains-in-sunlit-bedroom.jpg', alt: 'Soft sheer curtains in sunlit bedroom' },
    { src: '/1.jpeg', alt: 'Modern Venetian blinds for home interiors' },
    { src: '/2.jpeg', alt: 'Elegant vertical blinds covering tall windows' },
    { src: '/4.jpeg', alt: 'Soft sheer curtains filtering sunlight in a cozy bedroom' },
    { src: '/5.jpeg', alt: 'Custom-made vertical blinds for large glass doors' },
    { src: '/6.jpeg', alt: 'Elegant sheer drapes adding warmth to interiors' },
    { src: '/7.jpeg', alt: 'Roman blinds with a sophisticated texture' },
    { src: '/9.jpeg', alt: 'Fabric blinds with decorative patterns in living room' },
    { src: '/10.jpeg', alt: 'Layered curtains with blackout and sheer combination' },
    { src: '/12.jpeg', alt: 'Panel blinds ideal for sliding doors and partitions' },
    { src: '/13.jpeg', alt: 'Bamboo blinds enhancing eco-friendly design' },
    { src: '/14.jpeg', alt: 'Pleated blinds offering soft diffused lighting' },
    { src: '/15.jpeg', alt: 'Thermal insulated blinds for energy efficiency' },
    { src: '/16.jpeg', alt: 'Linen curtains in a light-filled modern kitchen' },
    { src: '/17.jpeg', alt: 'Roller blinds with a sleek matte finish' },
    { src: '/18.jpeg', alt: 'Sheer panel curtains adding elegance to dining room' },
    { src: '/19.jpeg', alt: 'Venetian blinds providing adjustable light control' },
    { src: '/20.jpeg', alt: 'Floor-length blackout curtains for privacy and comfort' },
    { src: '/21.jpeg', alt: 'Dual-layer zebra blinds for stylish shading' },
    { src: '/22.jpeg', alt: 'Classic white sheer curtains in minimal décor' },
    { src: '/23.jpeg', alt: 'Patterned blinds complementing cozy living space' },
    { src: '/24.jpeg', alt: 'Textured drapes framing panoramic window view' },
    { src: '/25.jpeg', alt: 'Smart home blinds integrated with voice control' },
  ];
  return (
    <section id='gallery' className='mx-auto max-w-6xl px-4 py-16 md:py-24'>
      <h2 className='font-serif text-3xl md:text-4xl mb-6'>Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {images.map((img, i) => (
          <div key={i} className='overflow-hidden rounded-lg border'>
            <img
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              className='w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
