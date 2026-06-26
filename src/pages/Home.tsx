import React, { useState } from "react";
import { Search, GraduationCap, Code, ShieldCheck, Star, Video, ArrowRight, Sparkles, Users, Award } from "lucide-react";
import PricingSection from "../components/PricingSection";
import HowItWorks from "../components/HowItWorks";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const [collegeSearch, setCollegeSearch] = useState("");
  const [branchSearch, setBranchSearch] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a full router app we'd pass query, for now just go to find-mentor
    setActiveTab("find-mentor");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[50vh] right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-36 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 glass-card rounded-full w-fit font-bold text-xs text-secondary-fixed-dim border border-white/10">
              <ShieldCheck size={14} className="text-secondary-fixed-dim" /> 2,500+ Verified Mentors Active Now
            </span>
            <h1 className="font-extrabold text-5xl lg:text-6xl leading-tight text-on-background tracking-tight">
              Talk to <span className="brand-gradient-text">Real College Mentors</span> in Real Time
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Connect with verified seniors from your dream college and branch before making one of the most important decisions of your life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setActiveTab("find-mentor")}
                className="brand-gradient-bg text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 neon-glow-primary hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
              >
                Find Mentors <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setActiveTab("become-mentor")}
                className="border-2 border-secondary-container text-secondary-fixed-dim hover:bg-secondary-container/10 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                Become a Mentor
              </button>
            </div>
          </div>

          {/* Floating Cards (Animated/Responsive Grid) */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Live Video Indicator Card */}
            <div className="glass-card p-6 rounded-xl flex items-center gap-4 border border-primary/20 neon-glow-primary z-20 w-full max-w-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center shadow-lg animate-pulse">
                <Video className="text-white" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Live Session</h3>
                <p className="text-sm text-on-surface-variant">Ongoing call with 120+ students</p>
              </div>
            </div>

            {/* Rohan Sharma Card */}
            <div className="glass-card p-4 rounded-2xl w-60 floating stagger-1 absolute -top-10 left-4 shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-3">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-primary object-cover" 
                  alt="Rohan Sharma" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7lv558cLDBnFtlOLAioxpEKzqMsyPmnIjSuv_3CVk8khpAZ_DifLrch0nDp0O9MUQMr9pw9RG2jmvr_yZmtGRSs6wx-qIXtTw38iQBZc1dByPP4jp7QMezg49AvcmlT385DfyWCbc8qf1NE9GQ4wPXxSQ-ywm6yDmMADUtOhYlzOx9wrwJ4JwCygPQpx5faFfrQ39BHRWqokxzmNN1CHZAXpUTkJW-nlbjxjkFMQWl1jDfDxF6P7TR_7VC1rS8mSaLm1a1nlCv6A"
                />
                <div>
                  <p className="font-bold text-sm text-on-surface">Rohan Sharma</p>
                  <p className="text-xs text-on-surface-variant">IIT Bombay • CSE</p>
                </div>
              </div>
              <div className="mt-3 flex gap-1">
                <span className="bg-secondary-container/20 text-secondary-fixed-dim px-2 py-0.5 rounded text-[10px] font-semibold">JEE Adv Rank 142</span>
              </div>
            </div>

            {/* Ishani Verma Card */}
            <div className="glass-card p-4 rounded-2xl w-64 floating stagger-2 absolute -bottom-10 right-4 shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-3">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-secondary-container object-cover" 
                  alt="Ishani Verma" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUOUmwow5NMiB30r9-SPoHr2CpRkVOopEbytNCDDxPyWYvXttGvu7VHlEg2d8Sd5mgePmCYUaRNLtioz0LlNo9xMOtuoeWSiKdrfhVDlAntXUE13VQh-QAXlH9AyDjmssNnA_VG-CdIDI8BNns7CLrMMVt87yq8Ke5tAPRs8fDHGJkLZM44GnEKZZ-08UoxHVqeGXyx3u07spCDxI_GxtAAuwPDE-cCfAr-FVP3dZqsBzwdWaS6h2vQv7BhCfrIZfivUEpv2jawrc"
                />
                <div>
                  <p className="font-bold text-sm text-on-surface">Ishani Verma</p>
                  <p className="text-xs text-on-surface-variant">NIT Trichy • Mechanical</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-primary flex items-center gap-1 font-bold text-xs">
                  <Star size={12} className="fill-primary text-primary" /> 4.9
                </span>
                <span className="text-xs text-on-surface-variant">Active Now</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Search Section */}
      <section className="py-8 max-w-7xl mx-auto px-6 relative z-30">
        <form 
          onSubmit={handleSearchSubmit} 
          className="glass-card p-6 rounded-3xl flex flex-col md:flex-row gap-4 items-center shadow-2xl border border-white/10 -mt-16"
        >
          <div className="flex-1 flex items-center gap-3 w-full bg-surface-container-low px-4 py-3 rounded-xl">
            <GraduationCap className="text-on-surface-variant" size={20} />
            <input 
              value={collegeSearch}
              onChange={(e) => setCollegeSearch(e.target.value)}
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface text-sm outline-none placeholder-on-surface-variant/50" 
              placeholder="College or University..." 
              type="text"
            />
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-outline-variant/30"></div>
          <div className="flex-1 flex items-center gap-3 w-full bg-surface-container-low px-4 py-3 rounded-xl">
            <Code className="text-on-surface-variant" size={20} />
            <input 
              value={branchSearch}
              onChange={(e) => setBranchSearch(e.target.value)}
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface text-sm outline-none placeholder-on-surface-variant/50" 
              placeholder="Branch (CSE, Mechanical, AI/ML...)" 
              type="text"
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto brand-gradient-bg hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Search size={16} /> Search Mentors
          </button>
        </form>
      </section>

      {/* Value Pillars Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary-fixed-dim uppercase tracking-widest text-xs font-bold">Why Connectors?</span>
          <h2 className="text-4xl font-extrabold">Make Informed College Choices</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
            Skip the brochures and marketing pages. Get the real, unfiltered student experience directly from campus insiders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold">100% Verified seniors</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Every mentor completes Institutional Email verification before booking sessions. We guarantee active enrollment authenticity.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center text-secondary-fixed-dim">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold">AI Placement Analysis</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Compare placement trends, salaries, recruiter visits, and overall industry alignment using deep semantic college profiles.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-tertiary-container/10 rounded-xl flex items-center justify-center text-tertiary">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold">1-on-1 Video Syncs</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Schedule quick 15-minute video calls to clear your doubts about hostel life, professors, grading, exam preparation, and campus culture.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — Journey Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <PricingSection />

      {/* Interactive Platform Overview Callout */}
      <section className="py-12 max-w-7xl mx-auto px-6 mb-16">
        <div className="glass-card rounded-3xl p-8 lg:p-12 border border-white/10 bg-gradient-to-r from-surface/80 to-surface-container/60 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Award size={18} /> Elite Campus Partnership program
            </div>
            <h3 className="text-3xl font-bold">Are you a senior at an IIT, NIT, or IIIT?</h3>
            <p className="text-on-surface-variant text-sm">
              Empower junior students looking to get into your branch. Earn up to $40/hour hosting interactive Q&A sessions.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab("become-mentor")}
            className="brand-gradient-bg text-white hover:scale-105 active:scale-95 px-8 py-4 rounded-xl font-bold text-sm transition-all"
          >
            Apply to Join as Mentor
          </button>
        </div>
      </section>
    </div>
  );
};
