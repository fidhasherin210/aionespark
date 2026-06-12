import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import contactOffice from "@/assets/contact-office.jpg";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    title: "Aione Spark — Modern Web Design & Digital Growth",
    meta: [
      { name: "description", content: "Aione Spark builds modern, high-performance websites and digital solutions to grow your business online." },
      { property: "og:title", content: "Aione Spark — Modern Web Design & Digital Growth" },
      { property: "og:description", content: "We create fast, responsive and scalable websites for startups and businesses." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: " info@aionespark.com" },
  { icon: Phone, label: "Phone", value: " +91 9744494677" },
  { icon: MapPin, label: "Address", value: "Elettil,Calicut" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `
*New Contact Form Message*

👤 Name: ${name}
📧 Email: ${email}
🏢 Company: ${company}

💬 Message:
${message}
`;

    const whatsappUrl = `https://wa.me/919744494677?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
    form.reset();

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Say hello"
        title="Let's build"
        accent="Together"
        subtitle="Tell us about your project — we typically reply within one business day."
      />

      <section className="relative z-10 mx-auto mt-16 grid max-w-5xl gap-6 px-6 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          {channels.map((c) => (
            <div
              key={c.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 text-sm font-semibold">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-brand/40 bg-surface-elevated p-6 md:col-span-3"
          style={{ boxShadow: "var(--shadow-brand)" }}
        >
          <h2 className="text-xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll get back within 24 hours.
          </p>

          <div className="mt-5 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Name"
                id="name"
                placeholder="your name"
              />

              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="your email address"
              />
            </div>

            <Field
              label="Company"
              id="company"
              placeholder="company name"
            />

            <div>
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project…"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02]"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "var(--shadow-brand)",
              }}
            >
              {sent ? "Message sent ✓" : "Send message"}

              {!sent && (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand"
      />
    </div>
  );
}
