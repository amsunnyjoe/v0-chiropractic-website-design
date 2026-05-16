import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Armchair } from "lucide-react";

const stats = [
  { icon: Users, label: "Client-Focused Care" },
  { icon: Sparkles, label: "Modern Techniques" },
  { icon: Armchair, label: "Comfortable Sessions" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* Left image */}
        <div className="relative w-full flex-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-chiro.jpg"
              alt="About Divine Chiro Care professional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            About Divine Chiro Care
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl">
            Dedicated To Natural Healing &amp; Better Living
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            At Divine Chiro Care, we believe in the body&apos;s natural ability
            to heal and thrive. Our approach combines evidence-based
            chiropractic techniques with compassionate, personalized care to
            address the root cause of discomfort rather than just the symptoms.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Every patient receives a tailored treatment plan designed around
            their unique needs, lifestyle, and wellness goals. From spinal
            adjustments to rehabilitation exercises, we are committed to helping
            you move better and live better.
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="#appointment"
            className="mt-2 inline-flex w-fit items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
