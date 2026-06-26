import { useState } from "react";

type Currency = "INR" | "USD" | "EUR";

const prices: Record<Currency, { starter: string; pro: string; enterprise: string; symbol: string }> = {
  INR: { starter: "499", pro: "999", enterprise: "1999", symbol: "₹" },
  USD: { starter: "6",   pro: "12",  enterprise: "24",   symbol: "$" },
  EUR: { starter: "5",   pro: "11",  enterprise: "22",   symbol: "€" },
};

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>("INR");

  const p = prices[currency];

  const getPrice = (base: string) => {
    if (annual) {
      const num = Math.round(Number(base) * 0.8);
      return String(num);
    }
    return base;
  };

  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-purple-700/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Outer Border */}
        <div className="rounded-[35px] border border-purple-500/40 p-10 bg-[#090909]/90 shadow-[0_0_80px_rgba(168,85,247,.35)]">

          {/* Heading */}
          <h2 className="text-center text-5xl font-bold">
            <span className="text-orange-400">Simple, </span>
            <span className="text-red-400">Transparent </span>
            <span className="text-purple-400">Pricing</span>
          </h2>

          <p className="text-center text-gray-400 mt-4 text-lg">
            Choose the perfect plan for your automation journey
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <span className="text-white text-lg">Monthly</span>

            <button
              id="pricing-billing-toggle"
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle billing period"
              className={`relative w-20 h-10 rounded-full transition duration-300 ${
                annual
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-orange-400 to-pink-500"
              }`}
            >
              <div
                className={`absolute top-1 h-8 w-8 rounded-full bg-white transition-all duration-300 ${
                  annual ? "left-11" : "left-1"
                }`}
              />
            </button>

            <span className="text-green-400 text-lg">Annual</span>

            <span className="bg-green-900/40 text-green-400 border border-green-600 rounded-lg px-3 py-1 text-sm">
              20% OFF
            </span>
          </div>

          {/* Currency */}
          <div className="flex justify-center mt-8">
            <select
              id="pricing-currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-[#141414] border border-purple-500/30 rounded-xl px-6 py-3 text-white outline-none cursor-pointer"
            >
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Starter */}
            <div className="rounded-3xl border border-orange-500/60 bg-[#111111]/80 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(249,115,22,.35)] hover:scale-105 transition-transform duration-300">
              <h3 className="text-orange-400 text-3xl font-bold">Starter</h3>
              <p className="text-gray-400 mt-3">Perfect for getting started</p>

              <div className="mt-8">
                <span className="text-6xl font-bold text-orange-400">
                  {p.symbol}{getPrice(p.starter)}
                </span>
                <p className="text-gray-400 mt-3">/ {annual ? "month (billed annually)" : "month"}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-400">
                <li>✓ 5 mentor sessions/month</li>
                <li>✓ AI college insights</li>
                <li>✓ Email support</li>
              </ul>

              <button
                id="pricing-starter-cta"
                className="mt-10 w-full rounded-full border border-orange-500 py-3 text-white font-semibold hover:bg-orange-500 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl border border-pink-500/70 bg-[#111111]/80 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(236,72,153,.35)] hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap">
                Most Popular
              </span>

              <h3 className="text-pink-400 text-3xl font-bold">Pro</h3>
              <p className="text-gray-400 mt-3">Best for growing teams</p>

              <div className="mt-8">
                <span className="text-6xl font-bold text-pink-500">
                  {p.symbol}{getPrice(p.pro)}
                </span>
                <p className="text-gray-400 mt-3">/ {annual ? "month (billed annually)" : "month"}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-400">
                <li>✓ Unlimited mentor sessions</li>
                <li>✓ Priority booking</li>
                <li>✓ AI placement analysis</li>
                <li>✓ 1-on-1 video calls</li>
              </ul>

              <button
                id="pricing-pro-cta"
                className="mt-10 w-full rounded-full border border-pink-500 py-3 text-white font-semibold hover:bg-pink-500 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="rounded-3xl border border-purple-500/60 bg-[#111111]/80 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(168,85,247,.35)] hover:scale-105 transition-transform duration-300">
              <h3 className="text-purple-300 text-3xl font-bold">Enterprise</h3>
              <p className="text-gray-400 mt-3">For large scale automation</p>

              <div className="mt-8">
                <span className="text-6xl font-bold text-purple-400">
                  {p.symbol}{getPrice(p.enterprise)}
                </span>
                <p className="text-gray-400 mt-3">/ {annual ? "month (billed annually)" : "month"}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-400">
                <li>✓ Everything in Pro</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom integrations</li>
                <li>✓ SLA guarantee</li>
              </ul>

              <button
                id="pricing-enterprise-cta"
                className="mt-10 w-full rounded-full border border-purple-500 py-3 text-white font-semibold hover:bg-purple-500 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
