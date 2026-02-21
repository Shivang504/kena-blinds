"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/cms-types";
import { defaultContent } from "@/lib/cms-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, LayoutGrid, SlidersHorizontal, Sparkles } from "lucide-react";

type Status = "idle" | "loading" | "saving" | "success" | "error";
type UploadStatus = "idle" | "uploading" | "error";

export default function CmsPage() {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [status, setStatus] = useState<Status>("loading");
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");

  async function uploadImage(file: File) {
    setUploadStatus("uploading");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/cms/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const data = (await res.json()) as { url: string };
      setUploadStatus("idle");
      return data.url;
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("error");
      return "";
    }
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch("/api/cms/site-content", { cache: "no-store" });
        const data = (await res.json()) as SiteContent;
        if (active) {
          setContent(data);
          setStatus("idle");
        }
      } catch (error) {
        console.error("Failed to load CMS content:", error);
        if (active) {
          setStatus("error");
        }
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  async function handleSave() {
    setStatus("saving");
    try {
      const res = await fetch("/api/cms/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) {
        throw new Error("Save failed");
      }
      setStatus("success");
      setTimeout(() => setStatus("idle"), 1500);
    } catch (error) {
      console.error("Failed to save CMS content:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10 flex flex-col gap-6 lg:flex-row">
        <aside className="w-full lg:w-64">
          <div className="rounded-2xl border bg-background/90 shadow-sm p-5 space-y-6 sticky top-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Kena Blinds</p>
              <h2 className="text-lg font-semibold">CMS Panel</h2>
            </div>
            <nav className="space-y-2 text-sm">
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted" href="#hero">
                <LayoutGrid className="h-4 w-4 text-primary" /> Hero
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted" href="#about">
                <SlidersHorizontal className="h-4 w-4 text-primary" /> About
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted" href="#products">
                <Sparkles className="h-4 w-4 text-primary" /> Products
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted" href="#gallery">
                <Camera className="h-4 w-4 text-primary" /> Gallery
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted" href="#contact">
                <SlidersHorizontal className="h-4 w-4 text-primary" /> Contact
              </a>
            </nav>
            <div className="rounded-xl border bg-muted/50 p-4 text-xs text-muted-foreground">
              Update content, upload images, then save changes to publish.
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <div className="rounded-2xl border bg-background/80 backdrop-blur shadow-sm p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kena Blinds</p>
            <h1 className="font-serif text-3xl md:text-4xl">CMS Panel</h1>
            <p className="text-sm text-muted-foreground">Manage website content and publish updates instantly.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-wrap gap-2 text-xs">
              {status === "saving" && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">Saving...</span>
              )}
              {status === "success" && (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Saved</span>
              )}
              {status === "error" && (
                <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">Error</span>
              )}
              {uploadStatus === "uploading" && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">Uploading image...</span>
              )}
              {uploadStatus === "error" && (
                <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">Upload failed</span>
              )}
            </div>
            <Button onClick={handleSave} className="rounded-full" disabled={status === "saving"}>
              {status === "saving" ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

          {status === "error" && (
          <p className="text-sm text-red-600">There was a problem loading or saving. Please retry.</p>
          )}
          {status === "success" && (
          <p className="text-sm text-green-600">Saved successfully.</p>
          )}
          {uploadStatus === "error" && (
          <p className="text-sm text-red-600">Image upload failed. Please try again.</p>
          )}

      <Card id="hero" className="rounded-2xl border-muted/60 shadow-sm">
        <CardHeader>
          <CardTitle>Hero Slides</CardTitle>
          <p className="text-sm text-muted-foreground">Update the homepage hero carousel content.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {content.hero.map((slide, index) => (
            <div key={`hero-${index}`} className="rounded-xl border border-dashed p-4 grid gap-3 md:grid-cols-4">
              <Input
                placeholder="Image URL"
                value={slide.img}
                onChange={(e) =>
                  setContent((prev) => {
                    const hero = [...prev.hero];
                    hero[index] = { ...hero[index], img: e.target.value };
                    return { ...prev, hero };
                  })
                }
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadImage(file);
                  if (url) {
                    setContent((prev) => {
                      const hero = [...prev.hero];
                      hero[index] = { ...hero[index], img: url };
                      return { ...prev, hero };
                    });
                  }
                  e.currentTarget.value = "";
                }}
              />
              <div className="md:row-span-2 rounded-lg border bg-muted/30 overflow-hidden">
                {slide.img ? (
                  <img src={slide.img} alt="Hero preview" className="h-28 w-full object-cover" />
                ) : (
                  <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">
                    Image preview
                  </div>
                )}
              </div>
              <Input
                placeholder="Headline"
                value={slide.headline}
                onChange={(e) =>
                  setContent((prev) => {
                    const hero = [...prev.hero];
                    hero[index] = { ...hero[index], headline: e.target.value };
                    return { ...prev, hero };
                  })
                }
              />
              <Input
                placeholder="Subheading"
                value={slide.sub}
                onChange={(e) =>
                  setContent((prev) => {
                    const hero = [...prev.hero];
                    hero[index] = { ...hero[index], sub: e.target.value };
                    return { ...prev, hero };
                  })
                }
              />
              <div className="md:col-span-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    setContent((prev) => ({
                      ...prev,
                      hero: prev.hero.filter((_, i) => i !== index),
                    }))
                  }
                >
                  Remove slide
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setContent((prev) => ({
                ...prev,
                hero: [...prev.hero, { img: "", headline: "", sub: "" }],
              }))
            }
          >
            Add slide
          </Button>
        </CardContent>
      </Card>

      <Card id="about" className="rounded-2xl border-muted/60 shadow-sm">
        <CardHeader>
          <CardTitle>About Section</CardTitle>
          <p className="text-sm text-muted-foreground">Edit the company story and hero image.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Heading"
            value={content.about.heading}
            onChange={(e) => setContent((prev) => ({ ...prev, about: { ...prev.about, heading: e.target.value } }))}
          />
          {content.about.paragraphs.map((paragraph, index) => (
            <div key={`about-paragraph-${index}`} className="rounded-xl border border-dashed p-4 space-y-2">
              <Textarea
                rows={3}
                value={paragraph}
                onChange={(e) =>
                  setContent((prev) => {
                    const paragraphs = [...prev.about.paragraphs];
                    paragraphs[index] = e.target.value;
                    return { ...prev, about: { ...prev.about, paragraphs } };
                  })
                }
              />
              <Button
                variant="outline"
                onClick={() =>
                  setContent((prev) => ({
                    ...prev,
                    about: { ...prev.about, paragraphs: prev.about.paragraphs.filter((_, i) => i !== index) },
                  }))
                }
              >
                Remove paragraph
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setContent((prev) => ({
                ...prev,
                about: { ...prev.about, paragraphs: [...prev.about.paragraphs, ""] },
              }))
            }
          >
            Add paragraph
          </Button>
          <div className="grid gap-3 md:grid-cols-3">
            <Input
              placeholder="Image URL"
              value={content.about.image.src}
              onChange={(e) =>
                setContent((prev) => ({
                  ...prev,
                  about: { ...prev.about, image: { ...prev.about.image, src: e.target.value } },
                }))
              }
            />
            <Input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const url = await uploadImage(file);
                if (url) {
                  setContent((prev) => ({
                    ...prev,
                    about: { ...prev.about, image: { ...prev.about.image, src: url } },
                  }));
                }
                e.currentTarget.value = "";
              }}
            />
            <div className="rounded-lg border bg-muted/30 overflow-hidden">
              {content.about.image.src ? (
                <img src={content.about.image.src} alt="About preview" className="h-28 w-full object-cover" />
              ) : (
                <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">
                  Image preview
                </div>
              )}
            </div>
            <Input
              placeholder="Image alt text"
              value={content.about.image.alt}
              onChange={(e) =>
                setContent((prev) => ({
                  ...prev,
                  about: { ...prev.about, image: { ...prev.about.image, alt: e.target.value } },
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card id="products" className="rounded-2xl border-muted/60 shadow-sm">
        <CardHeader>
          <CardTitle>Products & Services</CardTitle>
          <p className="text-sm text-muted-foreground">Maintain product cards and featured item.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              placeholder="Heading"
              value={content.products.heading}
              onChange={(e) =>
                setContent((prev) => ({ ...prev, products: { ...prev.products, heading: e.target.value } }))
              }
            />
            <Input
              placeholder="Tagline"
              value={content.products.tagline}
              onChange={(e) =>
                setContent((prev) => ({ ...prev, products: { ...prev.products, tagline: e.target.value } }))
              }
            />
          </div>

          {content.products.items.map((item, index) => (
            <div key={`product-${index}`} className="rounded-xl border border-dashed p-4 grid gap-3 md:grid-cols-4">
              <Input
                placeholder="Title"
                value={item.title}
                onChange={(e) =>
                  setContent((prev) => {
                    const items = [...prev.products.items];
                    items[index] = { ...items[index], title: e.target.value };
                    return { ...prev, products: { ...prev.products, items } };
                  })
                }
              />
              <Input
                placeholder="Image URL"
                value={item.img}
                onChange={(e) =>
                  setContent((prev) => {
                    const items = [...prev.products.items];
                    items[index] = { ...items[index], img: e.target.value };
                    return { ...prev, products: { ...prev.products, items } };
                  })
                }
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadImage(file);
                  if (url) {
                    setContent((prev) => {
                      const items = [...prev.products.items];
                      items[index] = { ...items[index], img: url };
                      return { ...prev, products: { ...prev.products, items } };
                    });
                  }
                  e.currentTarget.value = "";
                }}
              />
              <div className="md:row-span-2 rounded-lg border bg-muted/30 overflow-hidden">
                {item.img ? (
                  <img src={item.img} alt="Product preview" className="h-28 w-full object-cover" />
                ) : (
                  <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">
                    Image preview
                  </div>
                )}
              </div>
              <Input
                placeholder="Description"
                value={item.desc}
                onChange={(e) =>
                  setContent((prev) => {
                    const items = [...prev.products.items];
                    items[index] = { ...items[index], desc: e.target.value };
                    return { ...prev, products: { ...prev.products, items } };
                  })
                }
              />
              <div className="md:col-span-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    setContent((prev) => ({
                      ...prev,
                      products: { ...prev.products, items: prev.products.items.filter((_, i) => i !== index) },
                    }))
                  }
                >
                  Remove product
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setContent((prev) => ({
                ...prev,
                products: {
                  ...prev.products,
                  items: [...prev.products.items, { title: "", img: "", desc: "" }],
                },
              }))
            }
          >
            Add product
          </Button>

          <div className="space-y-3">
            <div className="rounded-xl border border-dashed p-4 space-y-3">
              <h3 className="font-medium">Featured Product</h3>
            <div className="grid gap-3 md:grid-cols-4">
              <Input
                placeholder="Title"
                value={content.products.featured.title}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    products: { ...prev.products, featured: { ...prev.products.featured, title: e.target.value } },
                  }))
                }
              />
              <Input
                placeholder="Image URL"
                value={content.products.featured.img}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    products: { ...prev.products, featured: { ...prev.products.featured, img: e.target.value } },
                  }))
                }
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadImage(file);
                  if (url) {
                    setContent((prev) => ({
                      ...prev,
                      products: { ...prev.products, featured: { ...prev.products.featured, img: url } },
                    }));
                  }
                  e.currentTarget.value = "";
                }}
              />
              <div className="md:row-span-2 rounded-lg border bg-muted/30 overflow-hidden">
                {content.products.featured.img ? (
                  <img src={content.products.featured.img} alt="Featured preview" className="h-28 w-full object-cover" />
                ) : (
                  <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">
                    Image preview
                  </div>
                )}
              </div>
              <Input
                placeholder="Description"
                value={content.products.featured.desc}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    products: { ...prev.products, featured: { ...prev.products.featured, desc: e.target.value } },
                  }))
                }
              />
            </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card id="gallery" className="rounded-2xl border-muted/60 shadow-sm">
        <CardHeader>
          <CardTitle>Gallery Images</CardTitle>
          <p className="text-sm text-muted-foreground">Upload or link images for the gallery grid.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {content.gallery.map((img, index) => (
            <div key={`gallery-${index}`} className="rounded-xl border border-dashed p-4 grid gap-3 md:grid-cols-4">
              <Input
                placeholder="Image URL"
                value={img.src}
                onChange={(e) =>
                  setContent((prev) => {
                    const gallery = [...prev.gallery];
                    gallery[index] = { ...gallery[index], src: e.target.value };
                    return { ...prev, gallery };
                  })
                }
              />
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const url = await uploadImage(file);
                  if (url) {
                    setContent((prev) => {
                      const gallery = [...prev.gallery];
                      gallery[index] = { ...gallery[index], src: url };
                      return { ...prev, gallery };
                    });
                  }
                  e.currentTarget.value = "";
                }}
              />
              <div className="md:row-span-2 rounded-lg border bg-muted/30 overflow-hidden">
                {img.src ? (
                  <img src={img.src} alt="Gallery preview" className="h-28 w-full object-cover" />
                ) : (
                  <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">
                    Image preview
                  </div>
                )}
              </div>
              <Input
                placeholder="Alt text"
                value={img.alt}
                onChange={(e) =>
                  setContent((prev) => {
                    const gallery = [...prev.gallery];
                    gallery[index] = { ...gallery[index], alt: e.target.value };
                    return { ...prev, gallery };
                  })
                }
              />
              <div className="md:col-span-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    setContent((prev) => ({
                      ...prev,
                      gallery: prev.gallery.filter((_, i) => i !== index),
                    }))
                  }
                >
                  Remove image
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setContent((prev) => ({
                ...prev,
                gallery: [...prev.gallery, { src: "", alt: "" }],
              }))
            }
          >
            Add image
          </Button>
        </CardContent>
      </Card>

      <Card id="contact" className="rounded-2xl border-muted/60 shadow-sm">
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
          <p className="text-sm text-muted-foreground">Manage the contact block and CTA details.</p>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <Input
            placeholder="Heading"
            value={content.contact.heading}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, heading: e.target.value },
              }))
            }
          />
          <Input
            placeholder="Email"
            value={content.contact.email}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, email: e.target.value },
              }))
            }
          />
          <Textarea
            rows={3}
            placeholder="Description"
            value={content.contact.description}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, description: e.target.value },
              }))
            }
          />
          <Input
            placeholder="Phone display"
            value={content.contact.phoneDisplay}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, phoneDisplay: e.target.value },
              }))
            }
          />
          <Input
            placeholder="Phone link (tel:)"
            value={content.contact.phoneLink}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, phoneLink: e.target.value },
              }))
            }
          />
          <Input
            placeholder="Location"
            value={content.contact.location}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, location: e.target.value },
              }))
            }
          />
          <Input
            placeholder="WhatsApp URL"
            value={content.contact.whatsappUrl}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, whatsappUrl: e.target.value },
              }))
            }
          />
        </CardContent>
      </Card>
        </div>
      </div>
    </main>
  );
}
