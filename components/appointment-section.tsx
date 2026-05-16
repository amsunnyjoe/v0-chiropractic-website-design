"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Home,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

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

export default function AppointmentSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/Samueloguche774@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setServerError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
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
              onClick={() => setStatus("idle")}
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

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Form */}
          <div className="flex-1">
            <form
              className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-8"
              onSubmit={handleSubmit}
              noValidate
            >
              {serverError && (
                <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
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
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring ${
                      errors.fullName ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive">{errors.fullName}</p>
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
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring ${
                      errors.phone ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
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
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring ${
                      errors.email ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Preferred Service <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring ${
                      errors.service ? "border-destructive" : "border-input"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Chiropractic Care &amp; Spinal Adjustment</option>
                    <option>Full Body Alignment</option>
                    <option>Neck &amp; Back Pain Relief</option>
                    <option>Posture Correction</option>
                    <option>Joint &amp; Muscle Therapy</option>
                    <option>Wellness &amp; Rehabilitation</option>
                    <option>Home Service Session</option>
                    <option>Personalized Treatment Plan</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-destructive">{errors.service}</p>
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
                    className={`rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring ${
                      errors.date ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-destructive">{errors.date}</p>
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
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
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
                  className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? (
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
          <div className="flex flex-1 flex-col gap-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/appointment.jpg"
                alt="Wellness consultation at Divine Chiro Care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
