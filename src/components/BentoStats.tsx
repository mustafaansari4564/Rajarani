import { motion } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Users, 
  CheckCircle, 
  Cpu, 
  Sparkles, 
  Youtube,
  Scissors,
  TrendingUp,
  Map
} from "lucide-react";

export default function BentoStats() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-dark-border/60 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-1 bg-dark-card border border-dark-border px-3 py-1 rounded-full text-xs text-cyber-pink font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 animate-spin" /> Metrics Dashboard
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
            Tailoring <span className="text-cyber-pink">Empowerment</span> in Numbers
          </h3>
        </div>
        <p className="max-w-md text-gray-400 text-xs md:text-sm mt-4 md:mt-0 font-medium">
          Raja Rani Coaching is not just a stitching class. Priya & Mohit Prasad have created a decentralized fashion startup ecosystem across India!
        </p>
      </div>

      {/* THREE-COLUMN COMPACT BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD 1: EXCITING GRADUATES GROWTH (Cyber Pink glow) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-[280px] group transition-all"
        >
          {/* Neon Grid Layer */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-grid-sewing opacity-20 pointer-events-none" />
          
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-cyber-pink/15 border border-cyber-pink/30 flex items-center justify-center text-cyber-pink overflow-hidden">
              <Users className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-[10px] uppercase font-mono text-gray-500 bg-dark-obsidian px-2.5 py-1 rounded-md border border-dark-border tracking-wider">
              Bestseller Alumni
            </span>
          </div>

          <div className="my-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white">45,000+</div>
            <div className="text-xs font-mono text-cyber-pink font-bold flex items-center gap-1.5 mt-2">
              <TrendingUp className="w-4 h-4" /> 182% YoY Startup Launches
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Home-makers and tailoring enthusiasts who successfully set up lucrative local boutique stores after online masterclass certification.
          </p>
        </motion.div>

        {/* CARD 2: SOCIAL COMMUNITY REACH (Acid neon glow) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-[280px] group transition-all"
        >
          {/* Absolute Glow Ring back */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-acid/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-acid/15 border border-acid/30 flex items-center justify-center text-acid">
              <Scissors className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-mono text-gray-500 bg-dark-obsidian px-2.5 py-1 rounded-md border border-dark-border tracking-wider">
              Direct Community
            </span>
          </div>

          <div className="my-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white">1.2 Million+</div>
            <div className="flex items-center gap-3 mt-2 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1 text-white">
                <Instagram className="w-3.5 h-3.5 text-cyber-pink" /> Insta
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="flex items-center gap-1 text-white">
                <Youtube className="w-3.5 h-3.5 text-red-500" /> YouTube
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Followers learning tailoring on social platforms. Priya's daily drafting reels regularly clock over 5M+ views nationwide.
          </p>
        </motion.div>

        {/* CARD 3: AHMEDABAD OFFLINE ACADEMY COORD (Purple neon glow) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-[280px] group transition-all"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid-sewing opacity-20 pointer-events-none" />

          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-cyber-purple/15 border border-cyber-purple/30 flex items-center justify-center text-cyber-purple">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-mono text-gray-500 bg-dark-obsidian px-2.5 py-1 rounded-md border border-dark-border tracking-wider">
              Ahmedabad Hub
            </span>
          </div>

          <div className="my-4">
            <div className="text-base font-display font-black text-white leading-tight">Shivranjani Studio</div>
            <div className="text-[10px] font-mono text-cyber-purple font-bold mt-1 uppercase tracking-wider">
              Gujarat HQ (Ashram Area)
            </div>
            <span className="text-xs text-gray-300 block mt-2">
              Opp. Seema Hall, Near Satellite Cross, Ahmedabad
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-dark-border/60 pt-3 mt-1">
            <span className="text-[10px] text-gray-500 uppercase font-mono">Hands-on Sewing</span>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono font-bold text-acid hover:underline flex items-center gap-1.5 interactive-hover"
            >
              <Map className="w-3.5 h-3.5" /> Navigate Center
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
