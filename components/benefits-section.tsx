import { Activity, Heart, Home, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Spinal Alignment",
    description: "Improve posture & body balance",
  },
  {
    icon: Heart,
    title: "Pain Relief",
    description: "Natural relief for neck & back pain",
  },
  {
    icon: Home,
    title: "Home Service",
    description: "Professional care from your comfort",
  },
  {
    icon: Leaf,
    title: "Wellness Support",
    description: "Personalized recovery & wellness plans",
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-t border-border/50 bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center gap-4 rounded-xl border border-border/60 bg-card p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
