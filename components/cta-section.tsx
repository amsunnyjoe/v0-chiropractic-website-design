import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mx-auto mb-6 h-px w-12 bg-primary/60" />
        <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
          Take The First Step Toward Better Movement and Wellness
        </h2>
        <div className="mt-8">
          <Link
            href="#appointment"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
