"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Divine Chiro Care completely changed my life. After years of back pain, I finally found relief through their professional spinal adjustment sessions. The team is incredibly caring and attentive.",
    name: "Adaeze O.",
    role: "Business Owner",
    avatar: "/images/gallery-1.jpg",
  },
  {
    quote:
      "I was skeptical about chiropractic care, but the home service option made it easy to try. The results were immediate. My posture has improved significantly and I sleep so much better now.",
    name: "Chidi E.",
    role: "Software Engineer",
    avatar: "/images/gallery-2.jpg",
  },
  {
    quote:
      "The personalized treatment plan they created for me was exactly what I needed. They truly listen and adapt their approach. I recommend Divine Chiro Care to everyone seeking natural pain relief.",
    name: "Fatima B.",
    role: "Wellness Enthusiast",
    avatar: "/images/gallery-3.jpg",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Desktop: cards grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-xl bg-card p-7 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="flex flex-col gap-5 rounded-xl bg-card p-7 shadow-sm">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonials[active].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === active ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
