import React from "react";
import { Mail, Heart } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/10 dark:border-outline/5 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <div 
            className="flex items-center gap-2 cursor-pointer w-fit"
            onClick={() => setActiveTab("home")}
          >
            <img 
              alt="Connectors Logo" 
              className="h-8 w-8 rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShZCqSHxd2ll50B0RCnGsXQzGKWy-60z0tBU8sIZvCuvVjqJ8Rx-cVmoH1YGidh-ldpsYTKNmQlBEC1uFP7L5uWYEYGc6173bsvaRRC2V9TNHoQ4cgcvctpMkIJ8Vh-5_QZ9_JiUCpnaKVBPiY2IjAnKDeB1AsQaiv9r0Bsi6o9T8l_i1EsLapu20_2CYcJlrRC24PcCz_4H5UunGMHAQJ5diCPOAHpcMmkRMnEAs46zolql7pZLRyl-K_FL3aWTO4JWXD5L5IHY"
            />
            <span className="font-extrabold text-xl text-primary dark:text-primary-fixed-dim">
              Connectors
            </span>
          </div>
          <p className="text-on-surface-variant dark:text-on-surface-variant/80 text-sm max-w-sm leading-relaxed">
            Connect with verified college seniors in real time. Get first-hand feedback on academics, branch options, placements, and campus culture before making your decisions.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Twitter">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="GitHub">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Mail"><Mail size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant dark:text-on-surface-variant/80">
            <li>
              <button onClick={() => setActiveTab("home")} className="hover:text-primary transition-colors">Home</button>
            </li>
            <li>
              <button onClick={() => setActiveTab("compare")} className="hover:text-primary transition-colors">College Comparison</button>
            </li>
            <li>
              <button onClick={() => setActiveTab("find-mentor")} className="hover:text-primary transition-colors">Find Mentors</button>
            </li>
            <li>
              <button onClick={() => setActiveTab("become-mentor")} className="hover:text-primary transition-colors">Become a Mentor</button>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant dark:text-on-surface-variant/80">
            <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ Support</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-outline-variant/10 dark:border-outline/5 text-center text-xs text-on-surface-variant/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Connectors. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> for the future tech generation.
        </p>
      </div>
    </footer>
  );
};
