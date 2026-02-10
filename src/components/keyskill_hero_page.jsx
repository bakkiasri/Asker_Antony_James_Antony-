"use client";

export default function Hero_section() {
  return (
    <main className="min-h-screen -full bg-black">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/hero_imae.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tools & Platforms
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Powering modern digital workflows with the right stack
            </p>

            <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
