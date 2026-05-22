import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Course } from "../types";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  UserCheck, 
  Award, 
  BookOpen, 
  CheckCircle,
  TrendingUp,
  Flame
} from "lucide-react";

export const COURSES: Course[] = [
  {
    id: "blouse-masterclass",
    title: "Blouse Masterclass",
    category: "Stitching Academy",
    price: 1499,
    rating: 4.9,
    studentsCount: 15400,
    durationWeeks: 4,
    tagline: "Unleash 28+ Celebrity Sabyasachi & Katori Cuts",
    description: "The ultimate tailoring bestseller. Priya Prasad teaches you mathematical drafting for faultless fit across 28 bespoke styles including padded designer blouses, collars, and princess cuts.",
    difficulty: "Beginner",
    features: ["28+ Master Designs", "Direct Layout Formula", "Personalized Portfolio Support", "Physical Certificate"],
    emojiIcon: "👗",
    colorTheme: "acid",
    syllabus: [
      { title: "Bust & Arm Sizing Principles", duration: "Week 1" },
      { title: "Katori & Double Katori Drafting", duration: "Week 2" },
      { title: "Padded Sabyasachi & Corset Stitching", duration: "Week 3" },
      { title: "Boutique Sourcing & Setup", duration: "Week 4" }
    ]
  },
  {
    id: "kurti-stitching",
    title: "Kurti Masterclass",
    category: "Stitching Academy",
    price: 999,
    rating: 4.8,
    studentsCount: 12100,
    durationWeeks: 3,
    tagline: "Drape 15+ Classic & Fusion Tunic Outfits",
    description: "Tired of mismatch armhole pulls and loose collars? Master perfect darts, side-slit lines, piping alignments, overlapping neck folds, and premium fabric-handling principles.",
    difficulty: "Beginner",
    features: ["15+ Designer Tunics", "Side-Slit Anti-Pucker Formula", "Sleeves Custom Drafting", "RRC Online App Updates"],
    emojiIcon: "👚",
    colorTheme: "pink",
    syllabus: [
      { title: "Standard Kurti Bodice Block", duration: "Week 1" },
      { title: "Side-Slit Alignments & Collars", duration: "Week 2" },
      { title: "Anarkali, Umbrella & Fusion Drafting", duration: "Week 3" }
    ]
  },
  {
    id: "signature-farmas",
    title: "Signature Farma Kit",
    category: "Paper Layout Cuttings",
    price: 1899,
    rating: 4.9,
    studentsCount: 22000,
    durationWeeks: 1,
    tagline: "Error-Free Lay, Mark & Cut Sewing Hacks",
    description: "Forget sketching tape mathematics! Our bestselling physical patterns are engineered in pre-graded acrylic. Lay the Farma template directly on raw fabric, mark, and snip away instantly.",
    difficulty: "Beginner",
    features: ["Sizes 28 to 42 pre-graded", "Heavy Acrylic Washable Material", "100% Fit Guarantee", "No Pattern Sketching Required"],
    emojiIcon: "✂️",
    colorTheme: "purple",
    syllabus: [
      { title: "Pattern Orientation & Saving Fabric", duration: "Module 1" },
      { title: "Farma Alignments on Heavy Fusing", duration: "Module 2" },
      { title: "Perfect Cut-Basting Execution", duration: "Module 3" }
    ]
  },
  {
    id: "boutique-startup",
    title: "Boutique Business Cohort",
    category: "Business & Fashion",
    price: 2499,
    rating: 5.0,
    studentsCount: 8900,
    durationWeeks: 6,
    tagline: "Build a High-Profit Direct-to-Consumer Boutique",
    description: "Transform your stitching into a brand. Mohit Prasad guides you through shop registration, fabric sourcing networks, billing setup, and viral Instagram fashion marketing.",
    difficulty: "Pro",
    features: ["VIP WhatsApp Cohort Link", "Vendor sourcing database", "Client handling formulas", "Instagram growth roadmap"],
    emojiIcon: "👑",
    colorTheme: "acid",
    syllabus: [
      { title: "Boutique Financial Blueprinting", duration: "Week 1" },
      { title: "Premium Fabric Wholesale Sourcing", duration: "Week 2" },
      { title: "Creating Signature Catalogues", duration: "Week 3" },
      { title: "Digital Ads & Instagram Reels", duration: "Weeks 4-6" }
    ]
  },
  {
    id: "embroidery-motifs",
    title: "Embroidery & Borders",
    category: "Creative Designing",
    price: 1200,
    rating: 4.7,
    studentsCount: 6500,
    durationWeeks: 3,
    tagline: "Intricate Flower Motifs & Zardosi Borders",
    description: "Empower garments with royal accents. Learn high-precision chain stitching, hand embroidery, patch placements, and beadworks to raise your garment's market value by 5x.",
    difficulty: "Intermediate",
    features: ["50+ Floral Motifs", "Hand & Machine hybrid skills", "Beading templates", "Certificate of design"],
    emojiIcon: "🪡",
    colorTheme: "pink",
    syllabus: [
      { title: "Basic Hand Needle Grips", duration: "Week 1" },
      { title: "Designer Floral Motif Tracing", duration: "Week 2" },
      { title: "Bling Beads & Borders Applique", duration: "Week 3" }
    ]
  },
  {
    id: "saree-gowns",
    title: "Saree Gowns & Draping",
    category: "Creative Designing",
    price: 1699,
    rating: 4.8,
    studentsCount: 7100,
    durationWeeks: 4,
    tagline: "Redefine Traditional Saree Into Glam Gowns",
    description: "Master modern Indo-Western silhouettes. Learn pre-stitched saree draping, wedding cowl alignments, and structured waistline structuring to build viral party-wear collections.",
    difficulty: "Intermediate",
    features: ["Pre-Stitched Pleat Secrets", "Cowl & Flare drafting", "Built-in petticoat structuring", "Portfolio photoshoot advice"],
    emojiIcon: "🌸",
    colorTheme: "purple",
    syllabus: [
      { title: "Pleats Anchor & Structure Formulas", duration: "Week 1" },
      { title: "Bridal Gown Bodice Merge Cuts", duration: "Week 2" },
      { title: "Cowl Alignments & Shoulder Draping", duration: "Week 3" },
      { title: "Ready-to-Wear Saree Construction", duration: "Week 4" }
    ]
  }
];

export default function CircularDisc() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 440) {
        setRadius(100);
      } else if (window.innerWidth < 640) {
        setRadius(130);
      } else if (window.innerWidth < 768) {
        setRadius(160);
      } else if (window.innerWidth < 1024) {
        setRadius(180);
      } else {
        setRadius(220); // Desktop size
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeCourse = COURSES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COURSES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + COURSES.length) % COURSES.length);
  };

  const handleSelectSlice = (index: number) => {
    setActiveIndex(index);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setCheckoutCourse(null);
      setPhoneNumber("");
    }, 4500);
  };

  // Get color values easily based on selected course theme
  const getThemeColors = (theme: "acid" | "pink" | "purple") => {
    switch (theme) {
      case "acid":
        return {
          primary: "text-acid",
          bg: "bg-acid",
          border: "border-acid",
          glow: "glow-acid",
          textBadge: "text-dark-obsidian",
          accentHex: "#dbff00",
          shadowRGB: "rgba(219,255,0,0.5)"
        };
      case "pink":
        return {
          primary: "text-cyber-pink",
          bg: "bg-cyber-pink",
          border: "border-cyber-pink",
          glow: "glow-pink",
          textBadge: "text-white",
          accentHex: "#ff2e93",
          shadowRGB: "rgba(255,46,147,0.5)"
        };
      case "purple":
        return {
          primary: "text-cyber-purple",
          bg: "bg-cyber-purple",
          border: "border-cyber-purple",
          glow: "glow-purple",
          textBadge: "text-white",
          accentHex: "#8a2be2",
          shadowRGB: "rgba(138,43,226,0.5)"
        };
    }
  };

  const activeColors = getThemeColors(activeCourse.colorTheme);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      {/* Dynamic Background Spot Glow that adapts to targeted course */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700 ease-out z-0"
        style={{
          backgroundColor: activeColors.accentHex
        }}
      />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border mb-4">
          <Sparkles className="w-4 h-4 text-acid animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">STITCH DIALS & SEWING SPOOLS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
          Explore Tailoring <span className="text-acid underline decoration-cyber-pink decoration-2">Syllabuses</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
          Click the rotating dial segments below to browse courses. Our interactive spool allows absolute beginners to access master tailoring guides instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: THE INTERACTIVE DIAL (SPINS COMPREHENSIVELY) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center min-h-[520px] relative">
          
          {/* Wheel controls (top row overlay) */}
          <div className="absolute top-0 flex items-center justify-between w-full max-w-[340px] z-20">
            <button 
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-dark-card hover:bg-dark-border border border-dark-border active:scale-95 transition-all text-white group"
              title="Previous Course"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="text-xs font-mono tracking-widest text-gray-400">
              <span className="text-white font-bold">{activeIndex + 1}</span> / {COURSES.length}
            </div>
            <button 
              onClick={handleNext}
              className="p-3.5 rounded-full bg-dark-card hover:bg-dark-border border border-dark-border active:scale-95 transition-all text-white group"
              title="Next Course"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Concentric spinning plate wrapper */}
          <div 
            className="relative flex items-center justify-center mt-12 bg-transparent select-none transition-all duration-300"
            style={{
              width: `${radius * 2 + 80}px`,
              height: `${radius * 2 + 80}px`
            }}
          >
            
            {/* Thread Tape rule rings */}
            <div className="absolute inset-0 rounded-full border border-dark-border opacity-40 animate-[spin_180s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-dark-border/40" />
            <div className="absolute inset-16 rounded-full border border-dark-border/20" />
            
            {/* Spinning Dial Element */}
            <motion.div
              id="tailor-spinning-disc"
              className="w-full h-full relative rounded-full flex items-center justify-center disc-shadow bg-dark-card/50 backdrop-blur-sm border border-dark-border"
              animate={{ rotate: activeIndex * -60 }}
              transition={{ type: "spring", stiffness: 75, damping: 14 }}
            >
              {/* Central hub (Golden Ring representing sewing button/spool) */}
              <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-dark-obsidian border bg-radial from-dark-card to-dark-obsidian border-dark-border flex flex-col items-center justify-center z-10 pointer-events-none shadow-inner">
                <Flame className={`w-5 h-5 sm:w-8 sm:h-8 ${activeColors.primary} animate-bounce`} />
                <span className="text-[8px] sm:text-[10px] font-mono tracking-tighter text-gray-500 mt-1 uppercase">SPINNERS</span>
              </div>

              {/* Course Slices placed radially */}
              {COURSES.map((course, idx) => {
                const angle = idx * 60;
                const rad = (angle * Math.PI) / 180;
                const x = Math.sin(rad) * radius;
                const y = -Math.cos(rad) * radius;

                const isSelected = idx === activeIndex;
                const colors = getThemeColors(course.colorTheme);

                return (
                  <button
                    key={course.id}
                    onClick={() => handleSelectSlice(idx)}
                    className="absolute cursor-pointer outline-none focus:outline-none transition-all group z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Upright counter-rotating visual card */}
                    <motion.div
                      className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center border text-center transition-all p-1.5 sm:p-2 duration-300 ${
                        isSelected 
                          ? `${colors.border} bg-dark-obsidian ${colors.glow} scale-110 sm:scale-115 border-2`
                          : "border-dark-border bg-dark-card hover:border-gray-600 hover:scale-105"
                      }`}
                      animate={{ rotate: activeIndex * 60 - angle }}
                      transition={{ type: "spring", stiffness: 75, damping: 14 }}
                    >
                      <span className="text-lg sm:text-2.5xl md:text-3.5xl mb-0.5 sm:mb-1 filter drop-shadow-md select-none">
                        {course.emojiIcon}
                      </span>
                      <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-tighter block w-full truncate ${
                        isSelected ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      }`}>
                        {course.title.split(" ")[0]}
                      </span>
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-0.5 sm:mt-1 ${
                        isSelected ? colors.bg : "bg-transparent"
                      }`} />
                    </motion.div>
                  </button>
                );
              })}

            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-DENSITY CONTENT SPOTLIGHT (GEN Z CARD) */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Matrix outline corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-grid-sewing opacity-20 pointer-events-none" />

              {/* Tag and Rating Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest ${activeColors.bg} ${activeColors.textBadge}`}>
                  {activeCourse.category.toUpperCase()}
                </span>
                
                <div className="flex items-center gap-2 bg-dark-obsidian border border-dark-border px-3 py-1.5 rounded-full">
                  <span className="text-xs font-mono text-yellow-400">★ {activeCourse.rating.toFixed(1)}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="text-xs font-mono text-gray-400">{(activeCourse.studentsCount / 1000).toFixed(1)}k alumni</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl md:text-3.5xl font-display font-extrabold text-white mb-2 leading-tight">
                {activeCourse.title}
              </h3>
              <p className={`text-sm md:text-base font-medium font-mono ${activeColors.primary} mb-6`}>
                // {activeCourse.tagline}
              </p>

              {/* Paragraph detail */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {activeCourse.description}
              </p>

              {/* Duration and difficulty quick stats */}
              <div className="grid grid-cols-2 gap-4 bg-dark-obsidian border border-dark-border p-4 rounded-2xl mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-dark-card rounded-lg text-gray-400">
                    <Clock className="w-5 h-5 text-acid" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block uppercase">DURATION</span>
                    <span className="text-xs md:text-sm font-semibold text-white">{activeCourse.durationWeeks} {activeCourse.durationWeeks > 1 ? "Weeks" : "Week"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-dark-card rounded-lg text-gray-400">
                    <Award className="w-5 h-5 text-cyber-pink" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block uppercase">EXPERIENCE</span>
                    <span className="text-xs md:text-sm font-semibold text-white">{activeCourse.difficulty} level</span>
                  </div>
                </div>
              </div>

              {/* Key Features included */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">INCLUDED PERKS</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className={`w-4 h-4 ${activeColors.primary} shrink-0 mt-0.5`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Plan Blocks */}
              <div className="mb-8 p-4 bg-dark-obsidian/40 border border-dark-border/60 rounded-2xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> COURSE CURRICULUM ROUTE
                </h4>
                <div className="space-y-2">
                  {activeCourse.syllabus.map((syll, k) => (
                    <div key={k} className="flex items-center justify-between py-2 border-b border-dark-border/40 last:border-0">
                      <span className="text-xs text-gray-200 font-medium">{syll.title}</span>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-dark-card border border-dark-border text-gray-400`}>
                        {syll.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Call to Action (CTA) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2 border-t border-dark-border">
                <div>
                  <span className="text-xs text-gray-500 font-mono block uppercase">SPECIAL ENROLLMENT FEE</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">₹{activeCourse.price}</span>
                    <span className="text-sm text-gray-500 line-through font-mono">₹{activeCourse.price * 2}</span>
                    <span className="text-xs text-acid font-bold font-mono">50% OFF</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutCourse(activeCourse)}
                  className={`px-8 py-4 rounded-xl font-display font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer text-center relative overflow-hidden group w-full sm:w-auto hover:scale-103 shadow-lg active:scale-97 ${activeColors.bg} ${activeColors.textBadge} ${activeColors.glow}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Farma + Join 
                    <ChevronRight className="w-5 h-5 shrink-0" />
                  </span>
                  
                  {/* Glowing core sliding effect */}
                  <div className="absolute inset-0 w-full h-full bg-white/10 -translateX-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CHECKOUT MODAL MOCKUP WITH GEN Z STYLES */}
      <AnimatePresence>
        {checkoutCourse && (
          <div className="fixed inset-0 bg-dark-obsidian/85 backdrop-blur-md flex items-center justify-center p-4 z-40">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 max-w-md w-full relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-acid rounded-full flex items-center justify-center text-dark-obsidian text-3xl mx-auto mb-6 glow-acid animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white mb-3">CONGRATS DESIGNER! 🪡</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Enrollment pending! Priya with team Mohit Prasad will ping your Whatsapp at <span className="font-mono text-acid font-bold">{phoneNumber}</span> in 5 mins to unlock your RRC application credentials and dispatch free custom layout paper farmas!
                  </p>
                  <div className="text-xs font-mono text-gray-500 animate-pulse">
                    Returning to Academy board...
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-display font-extrabold text-white">Academy Booking</h3>
                    <button 
                      onClick={() => setCheckoutCourse(null)}
                      className="p-1 rounded-lg bg-dark-obsidian border border-dark-border hover:bg-dark-border text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-dark-obsidian border border-dark-border rounded-2xl mb-6">
                    <span className="text-3xl">{checkoutCourse.emojiIcon}</span>
                    <div>
                      <span className="text-xs text-gray-400 block font-mono">{checkoutCourse.category}</span>
                      <span className="text-sm font-extrabold text-white">{checkoutCourse.title}</span>
                    </div>
                    <div className="ml-auto font-mono text-acid font-bold">
                      ₹{checkoutCourse.price}
                    </div>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2">WHATSAPP MOBILE NUMBER</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-gray-500 text-sm font-bold">+91</span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="nEnter 10-digit smartphone no."
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-dark-obsidian border border-dark-border hover:border-gray-600 focus:border-acid text-white pl-12 pr-4 py-3 rounded-xl outline-none font-mono text-sm transition-colors"
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 mt-2 block">
                        We send layout download keys and courier tracking via WhatsApp instantly.
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={phoneNumber.length < 10}
                        className="w-full py-4 rounded-xl font-display font-extrabold tracking-wide uppercase text-dark-obsidian bg-acid glow-acid hover:scale-[1.01] active:scale-98 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Confirm Seat & Courier Free Farma
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
