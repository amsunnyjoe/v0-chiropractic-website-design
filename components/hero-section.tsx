import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const trustItems = [
  "Home Service Available",
  "Natural Pain Relief",
  "Professional Care",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Professional Chiropractic Care For Better Movement, Pain Relief &amp; Wellness
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            Safe, personalized chiropractic treatments designed to restore
            balance, improve posture, and help you live pain-free.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#appointment"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request Appointment
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[3/4]">
            <Image
              src="/images/hero-chiro.jpg"
              alt="Professional chiropractic care treatment session"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
