import Image from "next/image";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Chiropractic spinal adjustment session", featured: true },
  { src: "/images/gallery-2.jpg", alt: "Posture correction therapy" },
  { src: "/images/gallery-3.jpg", alt: "Wellness stretching exercises" },
  { src: "/images/gallery-4.jpg", alt: "Neck therapy treatment" },
  { src: "/images/gallery-5.jpg", alt: "Rehabilitation exercise therapy" },
  { src: "/images/gallery-6.jpg", alt: "Joint and muscle therapy session" },
];

export default function GallerySection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            Treatment &amp; Wellness Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {/* Featured large image */}
          <div className="col-span-2 row-span-2">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl md:min-h-[400px]">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          {/* Other gallery images */}
          {images.slice(1).map((img) => (
            <div key={img.src} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
