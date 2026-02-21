export type HeroSlide = {
  img: string;
  headline: string;
  sub: string;
};

export type AboutContent = {
  heading: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Product = {
  title: string;
  img: string;
  desc: string;
};

export type ProductsContent = {
  heading: string;
  tagline: string;
  items: Product[];
  featured: Product;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ContactContent = {
  heading: string;
  description: string;
  email: string;
  phoneDisplay: string;
  phoneLink: string;
  location: string;
  whatsappUrl: string;
};

export type SiteContent = {
  hero: HeroSlide[];
  about: AboutContent;
  products: ProductsContent;
  gallery: GalleryImage[];
  contact: ContactContent;
};

export const defaultContent: SiteContent = {
  hero: [
    {
      img: "/luxury-living-room-with-roller-blinds.jpg",
      headline: "Transform Your Space with Elegant Blinds",
      sub: "Premium window treatments tailored to your home.",
    },
    {
      img: "/soft-sheer-curtains-in-sunlit-bedroom.jpg",
      headline: "Custom Curtains for Every Home",
      sub: "Beautiful fabrics, perfect fit, seamless installation.",
    },
    {
      img: "/modern-kitchen-with-venetian-blinds.jpg",
      headline: "Designed for Melbourne Living",
      sub: "Serving Melbourne & Victoria with care.",
    },
  ],
  about: {
    heading: "About Kena Blinds",
    paragraphs: [
      "Based in Melbourne, VIC, Kena Blinds provides premium blinds and custom curtains for homes and businesses across Victoria. We focus on elegant design, quality materials, and a smooth installation experience.",
      "From roller and venetian blinds to sheer and blackout curtains, our curated selection enhances light control, privacy, and style.",
    ],
    image: {
      src: "/elegant-interior-with-curtains.jpg",
      alt: "Elegant interior showcasing custom curtains",
    },
  },
  products: {
    heading: "Products & Services",
    tagline: "Serving Melbourne & Victoria",
    items: [
      {
        title: "Roller Blinds",
        img: "/roller-blinds.jpg",
        desc: "Simple, stylish, and practical — roller blinds provide sleek light control with minimal fuss, perfect for modern interiors.",
      },
      {
        title: "Roman Blinds",
        img: "/roman-blinds.jpg",
        desc: "Elegant folds that add warmth and sophistication. Roman blinds are ideal for creating a soft, luxurious feel in any room.",
      },
      {
        title: "Sheer Curtains",
        img: "/sheer-curtains.jpg",
        desc: "Let the light in while keeping your privacy. Sheer curtains create an airy, tranquil atmosphere that softens every space.",
      },
      {
        title: "Blackout Curtains",
        img: "/blackout-curtains.png",
        desc: "Block out unwanted light and noise for restful sleep. Perfect for bedrooms, nurseries, and media rooms.",
      },
      {
        title: "Plantation Shutters",
        img: "/plantation-shutters.jpg",
        desc: "Classic style meets durability. Plantation shutters offer timeless beauty and excellent light control with a premium finish.",
      },
    ],
    featured: {
      title: "Motorised Blinds",
      img: "/26.gif",
      desc: "Effortless comfort with a touch of luxury — adjust your blinds with a remote or app for smart living convenience.",
    },
  },
  gallery: [
    { src: "/luxury-living-room-with-roller-blinds.jpg", alt: "Luxury living room with roller blinds" },
    { src: "/modern-kitchen-with-venetian-blinds.jpg", alt: "Modern kitchen with venetian blinds" },
    { src: "/roman-blinds.jpg", alt: "Roman blinds in cozy living space" },
    { src: "/sheer-curtains.jpg", alt: "Sheer curtains filtering natural light" },
    { src: "/plantation-shutters.jpg", alt: "Plantation shutters for classic style" },
    { src: "/venetian-blinds.jpg", alt: "Venetian blinds with clean lines" },
    { src: "/vertical-blinds.jpg", alt: "Vertical blinds for large windows" },
    { src: "/blackout-curtains.png", alt: "Blackout curtains for bedrooms" },
    { src: "/soft-sheer-curtains-in-sunlit-bedroom.jpg", alt: "Soft sheer curtains in sunlit bedroom" },
    { src: "/1.jpeg", alt: "Modern Venetian blinds for home interiors" },
    { src: "/2.jpeg", alt: "Elegant vertical blinds covering tall windows" },
    { src: "/4.jpeg", alt: "Soft sheer curtains filtering sunlight in a cozy bedroom" },
    { src: "/5.jpeg", alt: "Custom-made vertical blinds for large glass doors" },
    { src: "/6.jpeg", alt: "Elegant sheer drapes adding warmth to interiors" },
    { src: "/7.jpeg", alt: "Roman blinds with a sophisticated texture" },
    { src: "/9.jpeg", alt: "Fabric blinds with decorative patterns in living room" },
    { src: "/10.jpeg", alt: "Layered curtains with blackout and sheer combination" },
    { src: "/12.jpeg", alt: "Panel blinds ideal for sliding doors and partitions" },
    { src: "/13.jpeg", alt: "Bamboo blinds enhancing eco-friendly design" },
    { src: "/14.jpeg", alt: "Pleated blinds offering soft diffused lighting" },
    { src: "/15.jpeg", alt: "Thermal insulated blinds for energy efficiency" },
    { src: "/16.jpeg", alt: "Linen curtains in a light-filled modern kitchen" },
    { src: "/17.jpeg", alt: "Roller blinds with a sleek matte finish" },
    { src: "/18.jpeg", alt: "Sheer panel curtains adding elegance to dining room" },
    { src: "/19.jpeg", alt: "Venetian blinds providing adjustable light control" },
    { src: "/20.jpeg", alt: "Floor-length blackout curtains for privacy and comfort" },
    { src: "/21.jpeg", alt: "Dual-layer zebra blinds for stylish shading" },
    { src: "/22.jpeg", alt: "Classic white sheer curtains in minimal décor" },
    { src: "/23.jpeg", alt: "Patterned blinds complementing cozy living space" },
    { src: "/24.jpeg", alt: "Textured drapes framing panoramic window view" },
    { src: "/25.jpeg", alt: "Smart home blinds integrated with voice control" },
  ],
  contact: {
    heading: "Get a Free Quote",
    description: "Reach out by email, phone, or WhatsApp. We serve Melbourne and surrounding areas across Victoria.",
    email: "kenablinds21@gmail.com",
    phoneDisplay: "+61 466 212 796",
    phoneLink: "tel:+61466212796",
    location: "Melbourne, VIC, Australia",
    whatsappUrl: "https://wa.me/61466212796",
  },
};
