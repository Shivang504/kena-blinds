import type { GalleryImage } from "@/lib/cms-types"

type GalleryProps = {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
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
