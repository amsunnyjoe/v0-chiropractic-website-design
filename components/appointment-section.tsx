"use client";

import Image from "next/image";
import { CalendarDays, Clock, Home, MessageCircle } from "lucide-react";

const reassurance = [
  { icon: MessageCircle, text: "Personalized care" },
  { icon: CalendarDays, text: "Flexible scheduling" },
  { icon: Home, text: "Home service available" },
  { icon: Clock, text: "Fast response" },
];

export default function AppointmentSection() {
  return (
    <section id="appointment" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
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
              className="flex flex-col gap-5 rounded-2xl bg-card p-8 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234..."
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Preferred Service
                  </label>
                  <select
                    id="service"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Chiropractic Care & Spinal Adjustment</option>
                    <option>Full Body Alignment</option>
                    <option>Neck & Back Pain Relief</option>
                    <option>Posture Correction</option>
                    <option>Joint & Muscle Therapy</option>
                    <option>Wellness & Rehabilitation</option>
                    <option>Home Service Session</option>
                    <option>Personalized Treatment Plan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-sm font-medium text-foreground">
                    Location
                  </label>
                  <input
                    id="location"
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
                  rows={4}
                  placeholder="Tell us about your pain or wellness goals..."
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Submit Request
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
                  className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm"
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
