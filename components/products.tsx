import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  { 
    title: "Roller Blinds", 
    img: "/roller-blinds.jpg",
    desc: "Simple, stylish, and practical — roller blinds provide sleek light control with minimal fuss, perfect for modern interiors."
  },
  { 
    title: "Roman Blinds", 
    img: "/roman-blinds.jpg",
    desc: "Elegant folds that add warmth and sophistication. Roman blinds are ideal for creating a soft, luxurious feel in any room."
  },
  { 
    title: "Sheer Curtains", 
    img: "/sheer-curtains.jpg",
    desc: "Let the light in while keeping your privacy. Sheer curtains create an airy, tranquil atmosphere that softens every space."
  },
  { 
    title: "Blackout Curtains", 
    img: "/blackout-curtains.png",
    desc: "Block out unwanted light and noise for restful sleep. Perfect for bedrooms, nurseries, and media rooms."
  },
  { 
    title: "Plantation Shutters", 
    img: "/plantation-shutters.jpg",
    desc: "Classic style meets durability. Plantation shutters offer timeless beauty and excellent light control with a premium finish."
  },
]

const motorised = {
  title: "Motorised Blinds",
  img: "/26.gif",
  desc: "Effortless comfort with a touch of luxury — adjust your blinds with a remote or app for smart living convenience."
}

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-serif text-3xl md:text-4xl">Products & Services</h2>
        <p className="text-sm opacity-80">Serving Melbourne & Victoria</p>
      </div>

      {/* Regular Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
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
              src={motorised.img} 
              alt={motorised.title} 
              className="w-full h-full object-contain rounded-br-2xl rounded-tr-2xl  md:object-cover max-h-[500px]" 
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">{motorised.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base opacity-80 leading-relaxed">{motorised.desc}</p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
