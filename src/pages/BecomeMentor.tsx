import React, { useState } from "react";
import { DollarSign, HelpingHand, Network, User, Mail, Phone, School, Award, FileText, CheckCircle } from "lucide-react";

export const BecomeMentor: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    gradYear: "2027",
    cgpa: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen py-16">
      {/* Background Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Asymmetric Left side props */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Empower Future Engineers</span>
              <h1 className="font-extrabold text-5xl leading-tight">
                Share your <span className="text-primary">Wisdom.</span> Get Paid.
              </h1>
              <p className="text-on-surface-variant text-base leading-relaxed max-w-md">
                Join the elite network of mentors from top universities and help juniors navigate their technical journeys while scaling your own personal brand.
              </p>
            </div>

            <div className="space-y-4">
              {/* Pillar 1 */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5 hover:translate-x-1.5 transition-transform">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary-fixed-dim shrink-0">
                  <DollarSign size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Earn Money</h3>
                  <p className="text-xs text-on-surface-variant">Set your own rates and get paid for every booking slot.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5 hover:translate-x-1.5 transition-transform">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <HelpingHand size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Help Juniors</h3>
                  <p className="text-xs text-on-surface-variant">Guide them through academic and career hurdles before they commit.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5 hover:translate-x-1.5 transition-transform">
                <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center text-tertiary shrink-0">
                  <Network size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Build Network</h3>
                  <p className="text-xs text-on-surface-variant">Connect with peer mentors across 50+ tier-1 campuses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Form Container */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="glass-card p-10 rounded-2xl border border-primary/20 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h2 className="font-extrabold text-3xl">Application Submitted!</h2>
                <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying to join the Connectors platform. We sent a verification link to your institutional email address. Once verified, we will schedule a quick 10-minute audit call.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="brand-gradient-bg px-6 py-2.5 rounded-full font-bold text-sm text-white hover:scale-105 transition-all"
                >
                  Apply Again / Reset
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 rounded-2xl shadow-2xl relative border border-white/10 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                  <h2 className="text-2xl font-extrabold text-on-surface">Apply to Mentor</h2>
                  <div className="flex gap-1.5">
                    <div className="w-8 h-1 bg-primary rounded-full"></div>
                    <div className="w-4 h-1 bg-outline-variant/30 rounded-full"></div>
                    <div className="w-4 h-1 bg-outline-variant/30 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 pl-11 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-on-surface-variant/40"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
                    </div>
                  </div>

                  {/* Institutional Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Institutional Email</label>
                    <div className="relative">
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 pl-11 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-on-surface-variant/40"
                        placeholder="john.doe@college.edu"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 pl-11 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-on-surface-variant/40"
                        placeholder="+1 (555) 000-0000"
                      />
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
                    </div>
                  </div>

                  {/* College */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">College / University</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 pl-11 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-on-surface-variant/40"
                        placeholder="e.g. IIT Bombay"
                      />
                      <School className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
                    </div>
                  </div>

                  {/* Branch */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Branch / Major</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 pl-11 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-on-surface-variant/40"
                        placeholder="e.g. CSE"
                      />
                      <Award className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
                    </div>
                  </div>

                  {/* Graduation Year */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Graduation Year</label>
                    <div className="relative">
                      <select
                        value={formData.gradYear}
                        onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                        className="w-full bg-surface-container-low/50 border border-outline-variant/30 px-4 py-3 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                      >
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Proof upload */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Institutional ID / Verification Proof</label>
                  <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-surface-container-low/20">
                    <FileText className="mx-auto text-on-surface-variant/50 mb-2" size={32} />
                    <p className="text-sm font-semibold text-on-surface">Upload Student ID PDF / JPG</p>
                    <p className="text-xs text-on-surface-variant/70 mt-1">Must contain your name, photo, and valid enrollment year</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">By submitting, you agree to our verification policies.</span>
                  <button
                    type="submit"
                    className="brand-gradient-bg text-white font-bold text-sm px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
