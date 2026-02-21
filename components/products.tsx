import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProductsContent } from "@/lib/cms-types"

type ProductsProps = {
  content: ProductsContent
}

export function Products({ content }: ProductsProps) {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-serif text-3xl md:text-4xl">{content.heading}</h2>
        <p className="text-sm opacity-80">{content.tagline}</p>
      </div>

      {/* Regular Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.items.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-80">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Motorised Blinds — Separate Full Width Card */}
      <div className="mt-12">
        <Card className="overflow-hidden flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img 
              src={content.featured.img} 
              alt={content.featured.title} 
              className="w-full h-full object-contain rounded-br-2xl rounded-tr-2xl  md:object-cover max-h-[500px]" 
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">{content.featured.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base opacity-80 leading-relaxed">{content.featured.desc}</p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
