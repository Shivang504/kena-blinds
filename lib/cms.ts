import { getDb } from "@/lib/mongodb";
import type { SiteContent } from "@/lib/cms-types";
import { defaultContent } from "@/lib/cms-types";

function normalizeContent(input: Partial<SiteContent>): SiteContent {
  return {
    hero: Array.isArray(input.hero) ? input.hero : defaultContent.hero,
    about: {
      heading: input.about?.heading || defaultContent.about.heading,
      paragraphs: Array.isArray(input.about?.paragraphs)
        ? input.about!.paragraphs
        : defaultContent.about.paragraphs,
      image: {
        src: input.about?.image?.src || defaultContent.about.image.src,
        alt: input.about?.image?.alt || defaultContent.about.image.alt,
      },
    },
    products: {
      heading: input.products?.heading || defaultContent.products.heading,
      tagline: input.products?.tagline || defaultContent.products.tagline,
      items: Array.isArray(input.products?.items) ? input.products!.items : defaultContent.products.items,
      featured: {
        title: input.products?.featured?.title || defaultContent.products.featured.title,
        img: input.products?.featured?.img || defaultContent.products.featured.img,
        desc: input.products?.featured?.desc || defaultContent.products.featured.desc,
      },
    },
    gallery: Array.isArray(input.gallery) ? input.gallery : defaultContent.gallery,
    contact: {
      heading: input.contact?.heading || defaultContent.contact.heading,
      description: input.contact?.description || defaultContent.contact.description,
      email: input.contact?.email || defaultContent.contact.email,
      phoneDisplay: input.contact?.phoneDisplay || defaultContent.contact.phoneDisplay,
      phoneLink: input.contact?.phoneLink || defaultContent.contact.phoneLink,
      location: input.contact?.location || defaultContent.contact.location,
      whatsappUrl: input.contact?.whatsappUrl || defaultContent.contact.whatsappUrl,
    },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  const db = await getDb();
  const doc = await db.collection("cms").findOne({ _id: "siteContent" });
  if (!doc) {
    return defaultContent;
  }
  const { _id, ...rest } = doc as { _id: string } & Partial<SiteContent>;
  return normalizeContent(rest);
}

export async function updateSiteContent(content: Partial<SiteContent>) {
  const db = await getDb();
  const normalized = normalizeContent(content);
  await db.collection("cms").updateOne(
    { _id: "siteContent" },
    { $set: normalized },
    { upsert: true }
  );
  return normalized;
}
