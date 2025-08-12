import React, { useState } from "react";

// --- Simple UI atoms (no external deps to keep this file self-contained) ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
    {children}
  </span>
);

const Button = ({ children, href = "#", variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";
  const styles = {
    primary:
      "bg-white text-indigo-950 hover:bg-slate-100 focus:ring-white/60 focus:ring-offset-indigo-900",
    secondary:
      "bg-indigo-600/20 text-white hover:bg-indigo-600/30 ring-1 ring-white/20",
    ghost:
      "text-white/90 hover:text-white",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href !== undefined) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }) => (
  <div className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}>
    {eyebrow && (
      <div className="flex items-center gap-2 justify-center">
        <Badge>{eyebrow}</Badge>
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
    {subtitle && (
      <p className="mx-auto max-w-2xl text-base text-white/70">{subtitle}</p>
    )}
  </div>
);

// --- Logo (image + wordmark) ---
const LOGO_URL = "https://drive.google.com/uc?export=download&id=1RmahS5V2DNJpyBjf3HhdfdvacG85FCP0"; // or move /public/logo.svg
const Logo = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-3 text-white ${className}`}>
    <img src={LOGO_URL} alt="JustPath" className="h-8 w-auto select-none"/>
  </div>
);

// --- Main Page ---
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [email, setEmail] = useState("");

  const features = [
    {
      title: "Checkout inteligente",
      desc: "Ofrece la mejor opción de envío en tiempo real según zona, costo y promesas de entrega.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5h18M7 5v14m10-14v14M3 19h18"/>
        </svg>
      ),
    },
    {
      title: "Orquestación de carriers",
      desc: "Asignación automática por reglas + aprendizaje con datos reales de performance.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h10"/>
        </svg>
      ),
    },
    {
      title: "Etiquetas y tracking",
      desc: "Genera etiquetas, crea fulfillments y publica eventos de envío en tiempo real.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7l9-4 9 4v6a9 9 0 11-18 0V7z"/>
        </svg>
      ),
    },
    {
      title: "Analytics operativa",
      desc: "KPIs de costo por paquete, SLA, NPS del delivery y recomendaciones de mejora.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19V5m6 14V9m6 10V3"/>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "¿Se integra con Shopify y Mercado Libre?",
      a: "Sí. Ofrecemos apps nativas y webhooks para sincronizar órdenes, crear fulfillments y actualizar estados automáticamente.",
    },
    {
      q: "¿Cómo se cobra?",
      a: "Modelo por volumen: fee por paquete y plan de plataforma. Para el MVP, contáctanos y te armamos un plan a medida.",
    },
    {
      q: "¿Puedo usar mis contratos con carriers?",
      a: "Claro. Enlazamos tus cuentas para cotizar y despachar con tus tarifas negociadas.",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white relative">
      {/* --- Top gradient background --- */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(50%_30%_at_100%_10%,rgba(99,102,241,0.25),transparent_60%)]" />

      {/* --- Navbar --- */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-indigo-950/70">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-white/90 md:flex">
            <a href="#features" className="hover:text-white">Características</a>
            <a href="#how" className="hover:text-white">Cómo funciona</a>
            <a href="#integrations" className="hover:text-white">Integraciones</a>
            <a href="#pricing" className="hover:text-white">Precios</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button href="#demo" variant="secondary">Ver demo</Button>
            <Button href="#cta">Empezar</Button>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/20"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-indigo-950/95">
            <Container className="py-4">
              <div className="grid gap-3">
                <a href="#features" className="rounded-xl px-3 py-2 hover:bg-white/5">Características</a>
                <a href="#how" className="rounded-xl px-3 py-2 hover:bg-white/5">Cómo funciona</a>
                <a href="#integrations" className="rounded-xl px-3 py-2 hover:bg-white/5">Integraciones</a>
                <a href="#pricing" className="rounded-xl px-3 py-2 hover:bg-white/5">Precios</a>
                <div className="flex gap-3 pt-2">
                  <Button href="#demo" variant="secondary" className="flex-1">Ver demo</Button>
                  <Button href="#cta" className="flex-1">Empezar</Button>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* --- Hero --- */}
      <section className="relative">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Software‑Defined Logistic Operations</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Optimiza tus envíos con IA: <span className="text-white/80">menos costo, más SLA</span>
            </h1>
            <p className="mt-4 text-base text-white/80">
              Checkout inteligente, orquestación de carriers, etiquetas y tracking en tiempo real. Inspirado en la claridad de Veeqo, diseñado para LATAM.
            </p>

            <div id="demo" className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Gracias! Te compartimos la demo por email.");
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button href={undefined} className="sm:min-w-[160px]">Ver demo</Button>
              </form>
              <p className="mt-3 text-xs text-white/60">Sin spam. Solo la demo.</p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button href="#features" variant="secondary">Explorar features</Button>
              <Button href="#cta">Empezar ahora</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- Product screenshots (mockups) --- */}
      <section id="product" className="border-t border-white/10 bg-indigo-900/20">
        <Container className="py-20 sm:py-28">
          <SectionTitle eyebrow="Producto" title="Una consola simple para operar" subtitle="Mockups ilustrativos hasta tener capturas reales del MVP."/>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Dashboard mock */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span>Dashboard</span>
                <span>Hoy</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-sm text-white/80">Órdenes</div>
                  <div className="mt-1 text-3xl font-bold">1,284</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-sm text-white/80">Costo/paquete</div>
                  <div className="mt-1 text-3xl font-bold">US$ 1.72</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 sm:col-span-2">
                  <div className="text-sm text-white/80">SLA por carrier</div>
                  <div className="mt-3 h-40 w-full rounded-lg bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Order detail mock */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span>Orden #ORD‑3941</span>
                <span>Estado: En tránsito</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4 sm:col-span-2">
                  <div className="text-sm text-white/80">Línea de tiempo</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>• Label creada (Conectamos)</li>
                    <li>• Pick‑up confirmado</li>
                    <li>• En tránsito → Evento Shopify</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-sm text-white/80">Carrier sugerido</div>
                  <div className="mt-2 rounded-lg bg-white/10 p-3 text-sm">Lalamove — $ 120 — 24‑48h</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 sm:col-span-3">
                  <div className="text-sm text-white/80">Mapa (placeholder)</div>
                  <div className="mt-3 h-40 w-full rounded-lg bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- Trust bar --- */}
      <section className="border-y border-white/10 bg-indigo-900/30">
        <Container className="py-10">
          <div className="grid grid-cols-2 items-center gap-6 text-white/70 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10–15%</div>
              <div className="text-xs">Ahorro típico en costo de envío</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">+98%</div>
              <div className="text-xs">Órdenes con tracking actualizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24h</div>
              <div className="text-xs">Go‑live promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">#</div>
              <div className="text-xs">Carriers locales y globales</div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- Features --- */}
      <section id="features" className="relative">
        <Container className="py-20 sm:py-28">
          <SectionTitle
            eyebrow="Todo en uno"
            title="Checkout, asignación, etiquetas y tracking"
            subtitle="Inspirado en la claridad de Veeqo, diseñado para logística de última milla en LATAM."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- How it works --- */}
      <section id="how" className="border-t border-white/10 bg-indigo-900/20">
        <Container className="py-20 sm:py-28">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="De la orden al entregado, sin fricción"
            subtitle="Conecta tu tienda, define reglas y deja que nuestra IA ejecute."
          />
          <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Conectá canales",
                desc: "Shopify, Mercado Libre, VTEX y APIs custom.",
              },
              {
                step: "2",
                title: "Asignación automática",
                desc: "Reglas por CP + performance histórica por carrier.",
              },
              { step: "3", title: "Operá", desc: "Etiquetas, fulfillments y tracking real‑time." },
            ].map((s) => (
              <li key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold">
                  {s.step}
                </div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* --- Integrations --- */}
      <section id="integrations">
        <Container className="py-20 sm:py-28">
          <SectionTitle
            eyebrow="Integraciones"
            title="Conecta tus carriers y herramientas"
            subtitle="Trabajamos con operadores locales y globales, ERPs y sistemas de WMS/OMS."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="grid h-24 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/60">
                <span className="text-sm">Logo {i + 1}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- Pricing / CTA --- */}
      <section id="pricing" className="border-t border-white/10 bg-gradient-to-b from-indigo-900/30 to-indigo-950">
        <Container className="py-20 sm:py-28">
          <SectionTitle
            eyebrow="Precios simples"
            title="Pagás por lo que enviás"
            subtitle="Planes por volumen + fee por paquete. Empezá gratis y escalá cuando lo necesites."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-white/70">Hasta 2,000 órdenes/mes</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Checkout inteligente</li>
                <li>• 2 carriers conectados</li>
                <li>• Etiquetas y tracking</li>
                <li>• Analytics básica</li>
              </ul>
              <Button href="#cta" className="mt-6 w-full">Empezar</Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 ring-2 ring-white/20">
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="mt-1 text-sm text-white/70">Más de 2,000 órdenes/mes</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Todo lo de Starter</li>
                <li>• Reglas avanzadas y SLA</li>
                <li>• Eventos proactivos de entrega</li>
                <li>• Soporte prioritario</li>
              </ul>
              <Button href="#cta" className="mt-6 w-full">Agendar demo</Button>
            </div>
          </div>

          {/* Email capture */}
          <div id="cta" className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <p className="text-sm text-white/80">Dejanos tu correo y te enviamos la demo en 3 minutos.</p>
            <form
              className="mt-3 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Gracias! Te escribimos a ${email}`);
                setEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/40"
              />
              <Button href={undefined} className="sm:min-w-[160px]">Enviar demo</Button>
            </form>
          </div>
        </Container>
      </section>

      {/* --- Testimonial --- */}
      <section className="border-t border-white/10">
        <Container className="py-20 sm:py-28">
          <div className="rounded-2xl bg-white/5 p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-[auto,1fr] sm:items-center">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600" />
              <blockquote className="text-lg text-white">
                “Con JustPath automatizamos la asignación de envíos y bajamos el costo por paquete sin perder SLA. La implementación tomó menos de 24 horas.”
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* --- FAQ --- */}
      <section className="border-t border-white/10 bg-indigo-900/20">
        <Container className="py-20 sm:py-28">
          <SectionTitle title="Preguntas frecuentes" subtitle="Si necesitás algo puntual, escribinos y armamos tu caso." />
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {faqs.map((item, idx) => (
              <details key={idx} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-white/90">
                  {item.q}
                  <span className="ml-4 grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-white/70 transition group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/10 bg-indigo-950">
        <Container className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <Logo className="h-7" />
              <p className="max-w-sm text-sm text-white/70">
                Software‑Defined Logistic Operations para e‑commerce. Simple, eficiente y escalable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-white">Producto</div>
                <a href="#features" className="block text-white/70 hover:text-white">Características</a>
                <a href="#integrations" className="block text-white/70 hover:text-white">Integraciones</a>
                <a href="#pricing" className="block text-white/70 hover:text-white">Precios</a>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-white">Compañía</div>
                <a href="#" className="block text-white/70 hover:text-white">Nosotros</a>
                <a href="#" className="block text-white/70 hover:text-white">Contacto</a>
                <a href="#" className="block text-white/70 hover:text-white">Privacidad</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} JustPath.ai. Todos los derechos reservados.
          </div>
        </Container>
      </footer>
    </div>
  );
}
