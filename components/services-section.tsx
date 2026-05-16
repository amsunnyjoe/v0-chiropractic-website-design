import {
  Activity,
  AlignVerticalSpaceAround,
  Bone,
  Dumbbell,
  HandHeart,
  Home,
  Notebook,
  StretchHorizontal,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Chiropractic Care & Spinal Adjustment",
    description:
      "Expert spinal adjustments to relieve pain, improve alignment, and restore natural function.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Full Body Alignment",
    description:
      "Comprehensive body alignment therapy to enhance posture and overall structural balance.",
  },
  {
    icon: Activity,
    title: "Neck & Back Pain Relief",
    description:
      "Targeted treatments for chronic or acute neck and back discomfort using proven techniques.",
  },
  {
    icon: StretchHorizontal,
    title: "Posture Correction",
    description:
      "Assess and correct postural imbalances to prevent pain and improve daily movement.",
  },
  {
    icon: HandHeart,
    title: "Joint & Muscle Therapy",
    description:
      "Gentle joint mobilization and muscle therapy for improved flexibility and reduced stiffness.",
  },
  {
    icon: Dumbbell,
    title: "Wellness & Rehabilitation Exercises",
    description:
      "Guided exercises to strengthen your body, speed recovery, and maintain long-term wellness.",
  },
  {
    icon: Home,
    title: "Home Service Sessions",
    description:
      "Receive professional chiropractic care in the comfort of your home with our mobile service.",
  },
  {
    icon: Notebook,
    title: "Personalized Treatment Plans",
    description:
      "Custom treatment strategies built around your health goals, lifestyle, and unique needs.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-primary/60" />
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            Our Chiropractic &amp; Wellness Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Personalized treatment solutions designed to improve movement,
            comfort, and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-base font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
