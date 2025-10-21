const CARDS = [
  {
    key: "achieve",
    tag: "Achieve",
    title: "Small wins rebuild confidence",
    desc: "Targeted actions help you regain momentum and self-belief.",
    img: "/images/a1.png",
    size: "hero", // spans 2 rows on desktop
  },
  {
    key: "comfort",
    tag: "Comfort",
    title: "Comfort",
    desc: "Soothing experiences that nurture your inner calm",
    img: "/images/a2.png",
    size: "sm",
  },
  {
    key: "move",
    tag: "Move",
    title: "Move",
    desc: "Physical actions to reset your energy and perspective",
    img: "/images/a3.png",
    size: "sm",
  },
  {
    key: "connect",
    tag: "Connect",
    title: "Connect",
    desc: "Build meaningful social interactions that support your emotional health",
    img: "/images/a4.png",
    size: "sm",
  },
  {
    key: "calm",
    tag: "Calm",
    title: "Calm",
    desc: "Grounding techniques to help you find inner peace",
    img: "/images/a5.png",
    size: "sm",
  },
];

function ActionCard({
  tag,
  title,
  desc,
  img,
  className = "",
}: {
  tag: string;
  title: string;
  desc: string;
  img: string;
  className?: string;
}) {
  return (
    <article
      className={[
        "relative rounded-2xl overflow-hidden isolate",
        "min-h-[220px] sm:min-h-[260px] lg:min-h-[260px]",
        "group focus-within:ring-2 focus-within:ring-brand-primary focus-within:outline-none",
        className,
      ].join(" ")}
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/55" aria-hidden />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
        <span className="inline-flex items-center text-white/80 text-xs sm:text-sm font-medium tracking-wide mb-2">
          {tag}
        </span>
        <h3 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight">
          {title}
        </h3>
        <p className="text-white/90 text-sm sm:text-base mt-2 max-w-[46ch]">
          {desc}
        </p>
      </div>

      {/* clickable layer (optional link/action) */}
      <a
        href="#"
        aria-label={`${title} – learn more`}
        className="absolute inset-0"
      />
    </article>
  );
}

export default function ActionsPaths() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm text-ink-600 uppercase tracking-wider mb-2">Actions</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-900 mb-4">
          Five paths to emotional wellness
        </h1>
        <p className="text-ink-600 max-w-2xl mx-auto">
          Personalized strategies to help you navigate your emotional landscape
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left hero spans 3 cols & 2 rows on lg */}
        <div className="lg:col-span-3 lg:row-span-2">
          <ActionCard
            tag={CARDS[0].tag}
            title={CARDS[0].title}
            desc={CARDS[0].desc}
            img={CARDS[0].img}
            className="min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]"
          />
        </div>

       {/* Right side 4 small cards in 2x2 grid on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">
          {CARDS.slice(1).map((c) => (
            <ActionCard
              key={c.key}
              tag={c.tag}
              title={c.title}
              desc={c.desc}
              img={c.img}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
