import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  { title: "Roller Blinds", img: "/roller-blinds.jpg" },
  { title: "Venetian Blinds", img: "/venetian-blinds.jpg" },
  { title: "Vertical Blinds", img: "/vertical-blinds.jpg" },
  { title: "Roman Blinds", img: "/roman-blinds.jpg" },
  { title: "Sheer Curtains", img: "/sheer-curtains.jpg" },
  { title: "Blackout Curtains", img: "/blackout-curtains.png" },
  { title: "Plantation Shutters", img: "/plantation-shutters.jpg" },
]

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-serif text-3xl md:text-4xl">Products & Services</h2>
        <p className="text-sm opacity-80">Serving Melbourne & Victoria</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <img src={p.img || "/placeholder.svg"} alt={p.title} className="h-44 w-full object-cover" />
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-80">
                Custom measured, professionally installed, with a finish that complements your interior.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
