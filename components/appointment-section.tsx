"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Home,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqndqqd";

const reassurance = [
  { icon: MessageCircle, text: "Personalized care" },
  { icon: CalendarDays, text: "Flexible scheduling" },
  { icon: Home, text: "Home service available" },
  { icon: Clock, text: "Fast response" },
];

type FieldErrors = Record<string, string>;

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};

  const fullName = (form.get("fullName") as string)?.trim();
  if (!fullName) errors.fullName = "Full name is required.";

  const phone = (form.get("phone") as string)?.trim();
  if (!phone) errors.phone = "Phone number is required.";

  const email = (form.get("email") as string)?.trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const service = (form.get("service") as string)?.trim();
  if (!service) errors.service = "Please select a service.";

  const date = (form.get("date") as string)?.trim();
  if (!date) errors.date = "Please choose a preferred date.";

  return errors;
}

function parseFormspreeError(data: unknown): string {
  if (data && typeof data === "object") {
    const payload = data as {
      error?: string;
      errors?: Array<{ message?: string }>;
    };
    if (payload.error) return payload.error;
    const message = payload.errors?.[0]?.message;
    if (message) return message;
  }
  return "Something went wrong. Please try again.";
}

export default function AppointmentSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const isSubmitting = status === "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setServerError("");
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("submitting");

    formData.append("_subject", "New Appointment Request — Divine Chiro Care");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      let message = "Something went wrong. Please try again.";
      try {
        message = parseFormspreeError(await res.json());
      } catch {
        // Non-JSON error response from Formspree
      }
      setServerError(message);
      setStatus("error");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  function handleSubmitAnother() {
    setStatus("idle");
    setErrors({});
    setServerError("");
    formRef.current?.reset();
  }

  if (status === "success") {
    return (
      <section id="appointment" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border/60 bg-card p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Appointment Request Sent
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Thank you for reaching out to Divine Chiro Care. We have received
              your request and will contact you shortly to confirm your session
              and discuss your treatment needs.
            </p>
            <button
              type="button"
              onClick={handleSubmitAnother}
              className="mt-2 inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-primary/60" />
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            Request An Appointment
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Fill out the form below and we will contact you to confirm your
            session, discuss your treatment needs, and finalize arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          {/* Form */}
          <div className="min-w-0">
            <form
              ref={formRef}
              className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-8"
              onSubmit={handleSubmit}
              noValidate
              aria-busy={isSubmitting}
            >
              {serverError && status === "error" && (
                <div
                  role="alert"
                  className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.fullName ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-destructive">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234..."
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.phone ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.email ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Preferred Service <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.service ? "border-destructive" : "border-input"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Chiropractic Care and Spinal Adjustment</option>
                    <option>Full Body Alignment</option>
                    <option>Neck and Back Pain Relief</option>
                    <option>Posture Correction</option>
                    <option>Joint and Muscle Therapy</option>
                    <option>Wellness and Rehabilitation</option>
                    <option>Home Service Session</option>
                    <option>Personalized Treatment Plan</option>
                  </select>
                  {errors.service && (
                    <p id="service-error" className="text-xs text-destructive">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground">
                    Preferred Date <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.date ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.date && (
                    <p id="date-error" className="text-xs text-destructive">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-sm font-medium text-foreground">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Your area in Lagos"
                    disabled={isSubmitting}
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="concern" className="text-sm font-medium text-foreground">
                  Describe Your Concern
                </label>
                <textarea
                  id="concern"
                  name="concern"
                  rows={4}
                  placeholder="Tell us about your pain or wellness goals..."
                  disabled={isSubmitting}
                  className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>

          {/* Right side */}
          <div className="flex min-w-0 flex-col gap-6 lg:gap-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted/15 shadow-sm">
              <Image
                src="/images/practitioner-table-treatment-2.png"
                alt="Chiropractor providing table treatment to a patient at Divine Chiro Care"
                fill
                className="object-cover object-[48%_40%] sm:object-[50%_38%] lg:object-[50%_42%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-3 sm:gap-4">
              {reassurance.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
