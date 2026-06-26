import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ShieldCheck, Star, Calendar, GraduationCap, X } from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  college: string;
  collegeType: "IIT" | "NIT" | "IIIT";
  branch: string;
  rating: number;
  reviewsCount: number;
  rankTag?: string;
  verified: boolean;
  avatar: string;
  hourlyRate: number;
  skills: string[];
}

const mockMentors: Mentor[] = [
  {
    id: "1",
    name: "Rohan Sharma",
    college: "IIT Bombay",
    collegeType: "IIT",
    branch: "CSE",
    rating: 4.9,
    reviewsCount: 48,
    rankTag: "JEE Adv Rank 142",
    verified: true,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lv558cLDBnFtlOLAioxpEKzqMsyPmnIjSuv_3CVk8khpAZ_DifLrch0nDp0O9MUQMr9pw9RG2jmvr_yZmtGRSs6wx-qIXtTw38iQBZc1dByPP4jp7QMezg49AvcmlT385DfyWCbc8qf1NE9GQ4wPXxSQ-ywm6yDmMADUtOhYlzOx9wrwJ4JwCygPQpx5faFfrQ39BHRWqokxzmNN1CHZAXpUTkJW-nlbjxjkFMQWl1jDfDxF6P7TR_7VC1rS8mSaLm1a1nlCv6A",
    hourlyRate: 15,
    skills: ["AI/ML", "Competitive Programming", "Algorithms"],
  },
  {
    id: "2",
    name: "Ishani Verma",
    college: "NIT Trichy",
    collegeType: "NIT",
    branch: "Mechanical",
    rating: 4.8,
    reviewsCount: 36,
    verified: true,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUOUmwow5NMiB30r9-SPoHr2CpRkVOopEbytNCDDxPyWYvXttGvu7VHlEg2d8Sd5mgePmCYUaRNLtioz0LlNo9xMOtuoeWSiKdrfhVDlAntXUE13VQh-QAXlH9AyDjmssNnA_VG-CdIDI8BNns7CLrMMVt87yq8Ke5tAPRs8fDHGJkLZM44GnEKZZ-08UoxHVqeGXyx3u07spCDxI_GxtAAuwPDE-cCfAr-FVP3dZqsBzwdWaS6h2vQv7BhCfrIZfivUEpv2jawrc",
    hourlyRate: 12,
    skills: ["CAD/CAM", "Robotics", "Thermo-fluids"],
  },
  {
    id: "3",
    name: "Aman Gupta",
    college: "IIIT Allahabad",
    collegeType: "IIIT",
    branch: "IT",
    rating: 4.7,
    reviewsCount: 22,
    rankTag: "JEE Main 99.8%tile",
    verified: true,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCShZCqSHxd2ll50B0RCnGsXQzGKWy-60z0tBU8sIZvCuvVjqJ8Rx-cVmoH1YGidh-ldpsYTKNmQlBEC1uFP7L5uWYEYGc6173bsvaRRC2V9TNHoQ4cgcvctpMkIJ8Vh-5_QZ9_JiUCpnaKVBPiY2IjAnKDeB1AsQaiv9r0Bsi6o9T8l_i1EsLapu20_2CYcJlrRC24PcCz_4H5UunGMHAQJ5diCPOAHpcMmkRMnEAs46zolql7pZLRyl-K_FL3aWTO4JWXD5L5IHY",
    hourlyRate: 10,
    skills: ["Web Dev", "React", "NodeJS"],
  },
  {
    id: "4",
    name: "Priya Das",
    college: "IIT Delhi",
    collegeType: "IIT",
    branch: "EE",
    rating: 4.9,
    reviewsCount: 41,
    verified: true,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUOUmwow5NMiB30r9-SPoHr2CpRkVOopEbytNCDDxPyWYvXttGvu7VHlEg2d8Sd5mgePmCYUaRNLtioz0LlNo9xMOtuoeWSiKdrfhVDlAntXUE13VQh-QAXlH9AyDjmssNnA_VG-CdIDI8BNns7CLrMMVt87yq8Ke5tAPRs8fDHGJkLZM44GnEKZZ-08UoxHVqeGXyx3u07spCDxI_GxtAAuwPDE-cCfAr-FVP3dZqsBzwdWaS6h2vQv7BhCfrIZfivUEpv2jawrc",
    hourlyRate: 18,
    skills: ["VLSI Design", "Control Systems", "IoT"],
  },
  {
    id: "5",
    name: "Vikram Sen",
    college: "NIT Surathkal",
    collegeType: "NIT",
    branch: "CSE",
    rating: 4.6,
    reviewsCount: 15,
    verified: false,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCShZCqSHxd2ll50B0RCnGsXQzGKWy-60z0tBU8sIZvCuvVjqJ8Rx-cVmoH1YGidh-ldpsYTKNmQlBEC1uFP7L5uWYEYGc6173bsvaRRC2V9TNHoQ4cgcvctpMkIJ8Vh-5_QZ9_JiUCpnaKVBPiY2IjAnKDeB1AsQaiv9r0Bsi6o9T8l_i1EsLapu20_2CYcJlrRC24PcCz_4H5UunGMHAQJ5diCPOAHpcMmkRMnEAs46zolql7pZLRyl-K_FL3aWTO4JWXD5L5IHY",
    hourlyRate: 8,
    skills: ["DBMS", "Linux Kernels", "Cybersecurity"],
  }
];

export const FindMentor: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [selectedCollegeTypes, setSelectedCollegeTypes] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState<Mentor | null>(null);

  const branches = ["CSE", "Mechanical", "AI/ML", "IT", "EE"];
  const collegeTypes = ["IIT", "NIT", "IIIT"];

  const handleBranchToggle = (branch: string) => {
    setSelectedBranches((prev) =>
      prev.includes(branch) ? prev.filter((b) => b !== branch) : [...prev, branch]
    );
  };

  const handleCollegeTypeToggle = (type: string) => {
    setSelectedCollegeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredMentors = useMemo(() => {
    return mockMentors.filter((mentor) => {
      // Search match
      const searchMatch =
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.branch.toLowerCase().includes(searchTerm.toLowerCase());

      // Branch match
      const branchMatch =
        selectedBranches.length === 0 || selectedBranches.includes(mentor.branch) || 
        (selectedBranches.includes("AI/ML") && mentor.skills.includes("AI/ML"));

      // College type match
      const collegeTypeMatch =
        selectedCollegeTypes.length === 0 || selectedCollegeTypes.includes(mentor.collegeType);

      // Rating match
      const ratingMatch = minRating === null || mentor.rating >= minRating;

      // Verified match
      const verifiedMatch = !verifiedOnly || mentor.verified;

      return searchMatch && branchMatch && collegeTypeMatch && ratingMatch && verifiedMatch;
    });
  }, [searchTerm, selectedBranches, selectedCollegeTypes, minRating, verifiedOnly]);

  return (
    <div className="relative min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-80 shrink-0 space-y-6">
          <div className="glass-card rounded-2xl p-6 sticky top-24 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-xl">Filters</h3>
              <SlidersHorizontal className="text-primary" size={18} />
            </div>

            {/* Verified Only Toggle */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/10">
              <span className="text-sm font-semibold text-on-surface">Verified Only</span>
              <button
                type="button"
                onClick={() => setVerifiedOnly(!verifiedOnly)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  verifiedOnly ? "bg-primary" : "bg-surface-container-highest"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    verifiedOnly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Branch Filters */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Branches</label>
              <div className="flex flex-wrap gap-2">
                {branches.map((b) => {
                  const isSelected = selectedBranches.includes(b);
                  return (
                    <button
                      key={b}
                      onClick={() => handleBranchToggle(b)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all ${
                        isSelected
                          ? "bg-secondary-container/30 border-secondary text-secondary-fixed-dim"
                          : "bg-surface-container-high border-white/5 text-on-surface-variant hover:border-primary/50"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* College Types */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">College Type</label>
              <div className="space-y-2">
                {collegeTypes.map((type) => {
                  const isChecked = selectedCollegeTypes.includes(type);
                  return (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group text-sm">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCollegeTypeToggle(type)}
                        className="rounded border-outline-variant/30 text-primary focus:ring-primary/50 bg-surface-container-low w-4 h-4"
                      />
                      <span className="font-semibold text-on-surface-variant group-hover:text-primary transition-colors">{type}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Rating</label>
              <div className="flex gap-2">
                {[4.5, 4.0, 3.5].map((val) => {
                  const isSelected = minRating === val;
                  return (
                    <button
                      key={val}
                      onClick={() => setMinRating(isSelected ? null : val)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold border flex items-center gap-1 transition-all ${
                        isSelected
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-surface-container-high border-white/5 text-on-surface-variant hover:border-primary/50"
                      }`}
                    >
                      {val}+ <Star size={12} className="fill-current" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* Directory Grid */}
        <main className="flex-1 space-y-6">
          {/* Search Header */}
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/10">
            <Search className="text-on-surface-variant" size={20} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface text-sm outline-none placeholder-on-surface-variant/50"
              placeholder="Search mentors by name, college, major, skills..."
              type="text"
            />
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between hover:-translate-y-0.5 transition-all">
                <div className="space-y-4">
                  {/* Avatar and Header */}
                  <div className="flex gap-4 items-start">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-base text-on-surface">{mentor.name}</h4>
                        {mentor.verified && (
                          <span title="Verified Campus Mentor">
                            <ShieldCheck size={16} className="text-primary fill-primary/10" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant font-semibold">
                        {mentor.college} • {mentor.branch}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-primary font-bold">
                        <Star size={12} className="fill-primary" /> {mentor.rating}
                        <span className="text-on-surface-variant/60 font-medium">({mentor.reviewsCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill) => (
                      <span key={skill} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container/10 text-secondary-fixed-dim border border-secondary/15">
                        {skill}
                      </span>
                    ))}
                    {mentor.rankTag && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15">
                        {mentor.rankTag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Rates & Actions */}
                <div className="pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant">Rate</p>
                    <p className="text-base font-extrabold text-on-surface">${mentor.hourlyRate}/hr</p>
                  </div>
                  <button
                    onClick={() => setShowBookingModal(mentor)}
                    className="brand-gradient-bg hover:scale-105 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                  >
                    Connect Call
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <GraduationCap className="mx-auto text-on-surface-variant/40" size={48} />
              <p className="text-on-surface-variant text-base font-semibold">No mentors match your selected filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBranches([]);
                  setSelectedCollegeTypes([]);
                  setMinRating(null);
                  setVerifiedOnly(false);
                }}
                className="text-primary text-sm font-bold underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Booking Mock Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 rounded-2xl border border-primary/25 space-y-4 shadow-2xl relative">
            <button 
              onClick={() => setShowBookingModal(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex gap-4 items-center">
              <img 
                src={showBookingModal.avatar} 
                alt={showBookingModal.name} 
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
              />
              <div>
                <h4 className="font-bold text-lg">{showBookingModal.name}</h4>
                <p className="text-xs text-on-surface-variant">{showBookingModal.college} • {showBookingModal.branch}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-on-surface flex items-center gap-1.5">
                <Calendar size={16} className="text-primary" /> Select Call Slot
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { alert("Slot booked!"); setShowBookingModal(null); }} className="bg-surface-container-high hover:bg-primary hover:text-on-primary-fixed border border-white/5 rounded-lg py-2 text-xs font-semibold transition-all">Tomorrow, 4 PM</button>
                <button onClick={() => { alert("Slot booked!"); setShowBookingModal(null); }} className="bg-surface-container-high hover:bg-primary hover:text-on-primary-fixed border border-white/5 rounded-lg py-2 text-xs font-semibold transition-all">Tomorrow, 6 PM</button>
                <button onClick={() => { alert("Slot booked!"); setShowBookingModal(null); }} className="bg-surface-container-high hover:bg-primary hover:text-on-primary-fixed border border-white/5 rounded-lg py-2 text-xs font-semibold transition-all">Friday, 10 AM</button>
                <button onClick={() => { alert("Slot booked!"); setShowBookingModal(null); }} className="bg-surface-container-high hover:bg-primary hover:text-on-primary-fixed border border-white/5 rounded-lg py-2 text-xs font-semibold transition-all">Friday, 2 PM</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
