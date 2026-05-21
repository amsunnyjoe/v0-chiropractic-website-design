import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const reasons = [
  "Safe and Natural Care",
  "Personalized Treatments",
  "Relaxing Environment",
  "Mobile Home Service",
  "Affordable Wellness Packages",
  "Modern Chiropractic Techniques",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* Left image */}
        <div className="relative w-full flex-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/practitioner-treatment.png"
              alt="Divine Chiro Care practitioner providing arm treatment to a patient"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl">
            Why Clients Choose Divine Chiro Care
          </h2>
          <ul className="flex flex-col gap-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-base text-foreground">{reason}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#appointment"
            className="mt-4 inline-flex w-fit items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
