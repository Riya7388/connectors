import React, { useState, useEffect } from "react";
import { Sparkles, Star, BrainCircuit, BarChart3, School, BookOpen, UserCheck, Flame, Download } from "lucide-react";

export const Compare: React.FC = () => {
  const [college1, setCollege1] = useState("IIT Bombay");
  const [branch1, setBranch1] = useState("Computer Science & Engineering");
  const [college2, setCollege2] = useState("IIIT Hyderabad");
  const [branch2, setBranch2] = useState("Computer Science & Engineering");

  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showReport, setShowReport] = useState(true); // default true to show initial loaded state

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowReport(false);
    setLoadingProgress(0);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (loading) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            setShowReport(true);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="relative min-h-screen py-12">
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <section className="text-center mb-16 space-y-4">
          <h1 className="font-extrabold text-5xl text-primary">AI Comparison Engine</h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Compare colleges with deep neural insights. Our AI analyzes placement trends, cultural shifts, and faculty expertise to find your perfect fit.
          </p>
        </section>

        {/* Comparison Inputs Form */}
        <section className="mb-12">
          <form onSubmit={handleCompare} className="glass-card p-8 rounded-2xl relative border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* VS Divider in middle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full kinetic-gradient items-center justify-center font-bold text-lg text-white shadow-lg border-2 border-background z-10">
                VS
              </div>

              {/* College Selection 1 */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary">College Selection 01</label>
                <div className="space-y-3">
                  <div className="relative">
                    <School className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                    <input 
                      value={college1}
                      onChange={(e) => setCollege1(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="Search College Name..."
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-fixed-dim" size={20} />
                    <input 
                      value={branch1}
                      onChange={(e) => setBranch1(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                      placeholder="Branch / Specialization..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* College Selection 2 */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim">College Selection 02</label>
                <div className="space-y-3">
                  <div className="relative">
                    <School className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-fixed-dim" size={20} />
                    <input 
                      value={college2}
                      onChange={(e) => setCollege2(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                      placeholder="Search College Name..."
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                    <input 
                      value={branch2}
                      onChange={(e) => setBranch2(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="Branch / Specialization..."
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button 
                type="submit"
                disabled={loading}
                className="px-8 py-4 kinetic-gradient text-white font-bold rounded-full text-base neon-glow-primary hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles size={18} className="animate-spin-slow" /> Generate Comparison
              </button>
            </div>
          </form>
        </section>

        {/* AI Processing Scanner */}
        {loading && (
          <section className="py-12 animate-fade-in">
            <div className="max-w-xl mx-auto glass-card p-8 rounded-2xl border border-primary/20 text-center relative overflow-hidden ai-scanner">
              <div className="mb-4">
                <BrainCircuit className="mx-auto text-primary animate-pulse" size={48} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-on-surface">AI is Synthesizing Data...</h3>
              <p className="text-on-surface-variant text-sm max-w-sm mx-auto">
                Scanning NIRF rankings, recent placement records, alumni networks, and Reddit sentiment...
              </p>
              <div className="mt-6 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-300" 
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>
          </section>
        )}

        {/* Analysis Output Report */}
        {showReport && !loading && (
          <section className="space-y-8 animate-fade-in">
            {/* Header info */}
            <div className="flex flex-col md:flex-row gap-6 items-center glass-card p-6 rounded-2xl border border-white/10">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <BarChart3 size={32} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-extrabold text-on-surface">{college1} vs. {college2}</h2>
                <p className="text-secondary-fixed-dim text-xs font-semibold">Report ID: #CONN-AI-88291 • Generated just now</p>
              </div>
              <div className="md:ml-auto">
                <button 
                  onClick={() => alert("Report downloaded successfully!")}
                  className="flex items-center gap-1.5 text-primary hover:text-primary/80 hover:underline transition-all text-sm font-semibold"
                >
                  <Download size={16} /> Download Report PDF
                </button>
              </div>
            </div>

            {/* Metrics Table */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/10 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      <th className="p-4">Key Parameters</th>
                      <th className="p-4">{college1}</th>
                      <th className="p-4">{college2}</th>
                      <th className="p-4">AI Insight / Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10 text-sm">
                    {/* Row 1 */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-on-surface flex items-center gap-2">
                        <School size={16} className="text-primary" /> NIRF Engineering Rank
                      </td>
                      <td className="p-4">#3 (IITB)</td>
                      <td className="p-4">#74 (IIITH)</td>
                      <td className="p-4 text-primary font-bold">IIT Bombay (Higher brand value)</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                      <td className="p-4 font-semibold text-on-surface flex items-center gap-2">
                        <Flame size={16} className="text-orange-500" /> Avg Placement Package
                      </td>
                      <td className="p-4">₹23.5 LPA</td>
                      <td className="p-4">₹32.2 LPA</td>
                      <td className="p-4 text-secondary-fixed-dim font-bold">IIIT Hyderabad (+37% higher average)</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-on-surface flex items-center gap-2">
                        <BookOpen size={16} className="text-secondary-fixed-dim" /> Research Output
                      </td>
                      <td className="p-4">High (Broad-spectrum)</td>
                      <td className="p-4">Exceptional (Deep AI/Robotics focus)</td>
                      <td className="p-4 text-secondary-fixed-dim font-bold">IIIT Hyderabad (Research publication yield)</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                      <td className="p-4 font-semibold text-on-surface flex items-center gap-2">
                        <UserCheck size={16} className="text-green-400" /> Faculty-to-Student Ratio
                      </td>
                      <td className="p-4">1:12</td>
                      <td className="p-4">1:9</td>
                      <td className="p-4 text-green-400 font-bold">IIIT Hyderabad (Smaller peer batches)</td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-on-surface flex items-center gap-2">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" /> Alumni Network Rating
                      </td>
                      <td className="p-4">9.8/10 (Global prestige)</td>
                      <td className="p-4">9.2/10 (US tech/Silicon Valley concentration)</td>
                      <td className="p-4 text-primary font-bold">IIT Bombay (Legacy connection)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Summary Card */}
            <div className="glass-card p-6 rounded-2xl border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
                <BrainCircuit size={20} /> AI Synthesis Summary
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                If your primary career objective is deep technical specialization, immediate coding placements in top US/India tech firms, or research in Artificial Intelligence, <strong>{college2}</strong> presents a statistically superior choice. 
                However, if you seek broad campus exposure, entrepreneurship networks, overall brand value, and higher global alumni reach across diversified fields, <strong>{college1}</strong> maintains its tier-1 legacy advantage.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
