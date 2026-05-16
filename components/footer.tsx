import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "#appointment", label: "Book Appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl font-bold text-background">
              Divine Chiro Care
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-background/60">
              Professional chiropractic care and wellness services in Lagos,
              Nigeria. Restoring balance, improving posture, and helping you
              live pain-free.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-background/80">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-background/80">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>+234 801 234 5678</li>
              <li>hello@divinechirocare.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://instagram.com/divinechirocare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Instagram
              </Link>
              <Link
                href="https://tiktok.com/@divinechirocare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                TikTok
              </Link>
              <Link
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Divine Chiro Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
