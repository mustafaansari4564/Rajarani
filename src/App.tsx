import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlowingCursor from "./components/GlowingCursor";
import CircularDisc from "./components/CircularDisc";
import BentoStats from "./components/BentoStats";
import Chatbot from "./components/Chatbot";
import { 
  Sparkles, 
  Scissors, 
  HelpCircle, 
  Play, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  ShoppingBag, 
  Smartphone,
  Check,
  Instagram,
  Youtube
} from "lucide-react";

export default function App() {
  const [activeDraft, setActiveDraft] = useState<"katori" | "princess" | "sleeves">("katori");
  const [bustSize, setBustSize] = useState<number>(36);
  const [neckDepth, setNeckDepth] = useState<number>(6.5);
  const [marginAllowance, setMarginAllowance] = useState<number>(2.0);
  const [isTracing, setIsTracing] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<string>("PERFECT FITTING GUARANTEED");

  // Dynamic advice based on user sizing sliders and parameters
  useEffect(() => {
    const totalCircumference = (bustSize * 1.05).toFixed(1);
    if (bustSize < 32) {
      setTestResult(`Petite Boutique Grid (Chest ~${totalCircumference}") — Ideal 1.25" armhole allowance`);
    } else if (bustSize > 40) {
      setTestResult(`Comfort Luxury Cut (Chest ~${totalCircumference}") — Custom 0.5" dart apex pucker adjustment`);
    } else {
      setTestResult(`Master Silhouette (Chest ~${totalCircumference}") — Absolute ${marginAllowance}" side seam margin`);
    }
  }, [bustSize, marginAllowance]);

  // Precise Indian Couture drafting formulas (in inches / cm, mapped to our scalable vector plane)
  const neckWidthFormula = (bustSize / 12).toFixed(2);  // "गला चौड़ाई"
  const chestFormula = ((bustSize / 4) + marginAllowance).toFixed(2);  // "छाती 1/4 + मार्जिन"
  const armholeFormula = ((bustSize / 6) + 0.75).toFixed(2);  // "मुड्ढा लंबाई"
  const shoulderFormula = ((bustSize * 0.15) + 0.25).toFixed(2); // "हाफ शोल्डर कन्ध"

  // Scaling Factor for visual SVG coordinates (designed for a 300x280 coordinate blueprint workspace)
  const scale = 1 + (bustSize - 36) * 0.024;

  return (
    <div className="min-h-screen bg-dark-obsidian text-gray-200 font-sans selection:bg-acid selection:text-dark-obsidian transition-colors duration-500 relative bg-grid-sewing">
      
      {/* GLOWING CURSOR PARTICLES */}
      <GlowingCursor />

      {/* RAINBOW SEAM HIGHLIGHT LINE */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-gradient-to-r from-acid via-cyber-pink to-cyber-purple z-50 pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="sticky top-0 w-full z-35 bg-dark-obsidian/75 backdrop-blur-md border-b border-dark-border py-4 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-acid to-cyber-pink p-[1px] flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-dark-obsidian flex items-center justify-center text-xl font-bold">
                🪡
              </div>
            </div>
            <div>
              <span className="font-display font-black text-sm md:text-base text-white tracking-wider flex items-center gap-1">
                RAJA RANI <span className="text-acid uppercase tracking-tighter text-[9px] border border-acid/30 px-1 py-0.2 rounded bg-acid/5 animate-pulse">ACADEMY</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gray-500 block uppercase">FIT COUTURE LAB</span>
            </div>
          </div>

          {/* Social Shortcut Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/916351112680" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono font-bold text-gray-300 hover:text-acid flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border interactive-hover transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5 text-acid" /> <span className="hidden xs:inline">Ask Priya Via </span>WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* GEN-Z MARQUEE SEWING TICKER */}
      <div className="w-full bg-dark-card/90 border-b border-dark-border/80 overflow-hidden py-3.5 select-none flex whitespace-nowrap relative z-10">
        <div className="flex gap-16 text-[10px] sm:text-xs font-mono font-black text-gray-400 uppercase tracking-widest animate-marquee shrink-0">
          <span>⚡ TAILORING IS NOT BORING</span>
          <span className="text-acid">★ CHOOSE FASHION COUTURE</span>
          <span>⚡ 1M+ DIGITAL STITCHERS COMMUNITY</span>
          <span className="text-cyber-pink">★ 100% PERFECT FIT FARMA</span>
          <span>⚡ BY PRIYA & MOHIT PRASAD</span>
          <span className="text-cyber-purple">★ BOUTIQUE ENTREPRENEURSHIP VIBES</span>
        </div>
        <div className="flex gap-16 text-[10px] sm:text-xs font-mono font-black text-gray-400 uppercase tracking-widest animate-marquee shrink-0" aria-hidden="true">
          <span>⚡ TAILORING IS NOT BORING</span>
          <span className="text-acid">★ CHOOSE FASHION COUTURE</span>
          <span>⚡ 1M+ DIGITAL STITCHERS COMMUNITY</span>
          <span className="text-cyber-pink">★ 100% PERFECT FIT FARMA</span>
          <span>⚡ BY PRIYA & MOHIT PRASAD</span>
          <span className="text-cyber-purple">★ BOUTIQUE ENTREPRENEURSHIP VIBES</span>
        </div>
      </div>

      {/* HERO HERO SECTION: INTRO LEVEL & SEAM DRAFTING SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* HERO LEFT: PUNCHY COPY */}
        <div className="lg:col-span-6 relative">
          <div className="absolute -top-[120px] -left-[100px] w-72 h-72 bg-cyber-pink/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border mb-6">
            <Sparkles className="w-4 h-4 text-acid" />
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">REIMAGINED FOR FUTURE BOUTIQUE STARS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white leading-none mb-6">
            Stitch Like <span className="text-acid text-glow">A Queen</span>. <br />
            Earn Like <span className="text-cyber-pink italic">A Boss</span>.
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Skip tedious boring formulas. Raja Rani Stitching Academy delivers ready-made physical Farma stencils and video masterclasses by Priya Prasad to help you cut clothing flawlessly from Day 1. Start your high-profit boutique right from home!
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#courses-section"
              className="px-8 py-4 rounded-2xl bg-acid text-dark-obsidian font-display font-extrabold tracking-wide uppercase text-center interactive-hover cursor-pointer shadow-lg hover:scale-103 active:scale-97 transition-all glow-acid"
            >
              Browse Stitch Spool ↓
            </a>
            <a 
              href="https://wa.me/916351112680"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-dark-card hover:bg-dark-border text-white border border-dark-border font-display font-extrabold tracking-wide uppercase text-center interactive-hover cursor-pointer transition-all"
            >
              Get Free Farma Pack
            </a>
          </div>

          {/* Sizing badges feedback */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-dark-border/60">
            <div className="flex -space-x-2.5">
              <span className="w-8 h-8 rounded-full bg-cyber-pink border-2 border-dark-obsidian flex items-center justify-center text-xs">🪡</span>
              <span className="w-8 h-8 rounded-full bg-acid border-2 border-dark-obsidian flex items-center justify-center text-xs text-dark-obsidian font-bold">👗</span>
              <span className="w-8 h-8 rounded-full bg-cyber-purple border-2 border-dark-obsidian flex items-center justify-center text-xs">✂️</span>
            </div>
            <div>
              <span className="text-xs text-white font-bold block">100% Fit Guarantee Formulas</span>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Trusted by 10 Lakh+ tailoring startups</span>
            </div>
          </div>
        </div>

        {/* HERO RIGHT: INTERACTIVE DRAFTING CAD VECTOR TOOL */}
        <div id="cad-simulator-block" className="lg:col-span-6">
          <div className="bg-dark-card border border-dark-border rounded-3xl p-5 md:p-6 relative overflow-hidden transition-all duration-300 shadow-2xl hover:border-dark-border/80">
            <div className="absolute top-0 right-0 w-32 h-32 bg-grid-sewing opacity-20 pointer-events-none" />
            
            {/* Simulation Header with extra interactive action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dark-border pb-4 mb-6">
              <div>
                <span className="text-[9px] font-mono text-acid block uppercase tracking-wider">// DYNAMIC COUTURE VECTOR CAD v1.8</span>
                <span className="text-sm font-black text-white uppercase tracking-wider">Perfect Fit Blueprint Plotter</span>
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                {(["katori", "princess", "sleeves"] as const).map((block) => (
                  <button
                    key={block}
                    onClick={() => {
                      setActiveDraft(block);
                      setIsTracing(false);
                    }}
                    className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider font-extrabold rounded-lg transition-all cursor-pointer ${
                      activeDraft === block 
                        ? "bg-gradient-to-r from-cyber-pink to-cyber-purple text-white shadow-lg shadow-cyber-pink/20" 
                        : "bg-dark-obsidian hover:bg-dark-border text-gray-400 border border-dark-border hover:text-white"
                    }`}
                  >
                    {block === "katori" ? "🪡 Katori ब्लाउज" : block === "princess" ? "✂️ Princess कट" : "📐 Sleeves बाजू"}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic drafting stage background with Grid, rulers and coordinates */}
            <div className="bg-dark-obsidian/95 border border-dark-border/60 rounded-2xl h-[300px] p-4 flex flex-col items-center justify-center relative overflow-hidden select-none">
              
              {/* Drafting Grid Lines */}
              <div className="absolute inset-0 bg-grid-sewing opacity-25 pointer-events-none" />
              
              {/* Coordinate rulers on the edges */}
              <div className="absolute top-0 left-0 w-full h-3 border-b border-dark-border/40 flex justify-between px-4 text-[7px] font-mono text-gray-600">
                <span>0.00</span><span>50px</span><span>100px</span><span>150px</span><span>200px</span><span>250px</span><span>300px</span>
              </div>
              <div className="absolute top-0 left-0 h-full w-3 border-r border-dark-border/40 flex flex-col justify-between py-6 text-[7px] font-mono text-gray-600">
                <span>0</span><span>60</span><span>120</span><span>180</span><span>240</span>
              </div>

              {/* Dynamic calculations coordinates math box overlay (Upper Left) */}
              <div className="absolute top-4 left-4 z-20 bg-dark-card/90 border border-dark-border/60 px-2 py-1 rounded text-[8px] font-mono text-gray-400 backdrop-blur-sm space-y-0.5">
                <div><span className="text-gray-500">SHOULDER / कंधा:</span> <span className="text-cyber-pink font-bold">{shoulderFormula}"</span></div>
                <div><span className="text-gray-500">CHEST / छाती:</span> <span className="text-acid font-bold">{chestFormula}"</span></div>
                <div><span className="text-gray-500">ARMHOLE / मुड्ढा:</span> <span className="text-cyber-purple font-bold">{armholeFormula}"</span></div>
              </div>

              {/* Dynamic calculations coordinates math box overlay (Upper Right) */}
              <div className="absolute top-4 right-4 z-20 bg-dark-card/90 border border-dark-border/60 px-2.5 py-1 rounded text-[8px] font-mono text-gray-300 backdrop-blur-sm">
                <span className="inline-flex items-center gap-1 text-[8px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-acid animate-ping" />
                  GRAINLINE ↑
                </span>
              </div>

              {/* Vector canvas drawings (Perfect Accuracy formulas) */}
              <AnimatePresence mode="wait">
                <motion.svg 
                  key={activeDraft + "-" + bustSize}
                  className="w-full h-full max-w-[290px] max-h-[260px] relative z-10 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" 
                  viewBox="0 0 300 280"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Common Horizontal & Vertical Guides */}
                  <line x1="150" y1="40" x2="150" y2="240" stroke="#23212d" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="40" x2="280" y2="40" stroke="#23212d" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {activeDraft === "katori" && (
                    <g>
                      {/* Blueprint Outer Framing Box (Draft boundaries) */}
                      <rect x={150 - Number(chestFormula) * 11 * scale} y="40" width={Number(chestFormula) * 11 * scale} height="190" stroke="#1d1b24" strokeWidth="1" strokeDasharray="5 5" />
                      
                      {/* Neck & Shoulder slope */}
                      <path 
                        d={`M 150,40 L ${150 - Number(neckWidthFormula) * 15 * scale},40 L ${150 - Number(shoulderFormula) * 14 * scale},45`} 
                        stroke="#2c2a38" 
                        strokeWidth="1.5" 
                        strokeDasharray="2 2"
                      />

                      {/* Precise Front Deep Neck Curvature (गले की गोलाई) */}
                      <path 
                        d={`M ${150 - Number(neckWidthFormula) * 15 * scale},40 C ${150 - Number(neckWidthFormula) * 15 * scale},${40 + neckDepth * 14 * scale * 0.65} ${150 - Number(neckWidthFormula) * 4 * scale},${40 + neckDepth * 14 * scale} 150,${40 + neckDepth * 14 * scale}`} 
                        stroke="#8a2be2" 
                        strokeWidth="2" 
                        className="drop-shadow-[0_0_2px_#8a2be2]"
                      />
                      
                      {/* Armhole Curve (मुड्ढे की गोलाई - Perfect fitting formula shape) */}
                      <path 
                        d={`M ${150 - Number(shoulderFormula) * 14 * scale},45 C ${150 - Number(shoulderFormula) * 14 * scale},${40 + Number(armholeFormula) * 17 * scale * 0.5} ${150 - Number(chestFormula) * 12 * scale * 0.8},${40 + Number(armholeFormula) * 17 * scale} ${150 - Number(chestFormula) * 12 * scale},${40 + Number(armholeFormula) * 17 * scale}`} 
                        stroke="#ff2e93" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_4px_rgba(255,46,147,0.3)]"
                      />

                      {/* Side seam from Armhole corner to Waist fit */}
                      <path 
                        d={`M ${150 - Number(chestFormula) * 12 * scale},${40 + Number(armholeFormula) * 17 * scale} L ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 12 * scale},230 L 150,230`} 
                        stroke="#ff2e93" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 2"
                      />

                      {/* Custom Curvaceous Katori Panel Seam Layout (मटका कटोरी गोलाई) */}
                      <path 
                        d={`M 150,${40 + neckDepth * 14 * scale + 12} C ${150 - Number(neckWidthFormula) * 24 * scale},${125} ${150 - Number(chestFormula) * 8.5 * scale},200 ${150 - 45},230`} 
                        stroke="#dbff00" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_6px_rgba(219,255,0,0.5)]"
                      />

                      {/* Seam Allowance visual indicator (डॉटेड बाहरी दबाव मार्जिन) */}
                      <path 
                        d={`M ${150 - Number(chestFormula) * 12 * scale + 15},${40 + Number(armholeFormula) * 17 * scale + 10} L ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 12 * scale + 12},220`} 
                        stroke="rgba(255,46,147,0.25)" 
                        strokeWidth="1" 
                        strokeDasharray="3 3"
                      />

                      {/* Point Nodes & Couture Texts */}
                      <circle cx="150" cy="40" r="3.5" fill="#555" />
                      <circle cx={`${150 - Number(shoulderFormula) * 14 * scale}`} cy="45" r="3.5" fill="#ff2e93" />
                      <circle cx={`${150 - Number(chestFormula) * 12 * scale}`} cy={`${40 + Number(armholeFormula) * 17 * scale}`} r="4" fill="#dbff00" />
                      <circle cx={`${150 - 45}`} cy="230" r="3.5" fill="#dbff00" />
                      
                      <text x="156" y="55" fill="#888" className="text-[8px] font-mono uppercase">Centerfold / मध्य रेखा</text>
                      <text x={`${152 - Number(shoulderFormula) * 14 * scale}`} y="33" fill="#ff2e93" className="text-[7.5px] font-mono font-bold">कंधा (Shoulder)</text>
                      <text x={`${138 - Number(chestFormula) * 12 * scale}`} y={`${40 + Number(armholeFormula) * 17 * scale - 6}`} fill="#fff" className="text-[8px] font-mono bg-black/80 px-1 py-0.5 rounded">FIT POINT</text>
                      <text x="150" y="244" fill="#dbff00" className="text-[9px] font-mono font-bold text-right" textAnchor="end">कटोरी डाट (Katori Curve)</text>
                    </g>
                  )}

                  {activeDraft === "princess" && (
                    <g>
                      {/* Blueprint grid frame for Princess cut */}
                      <rect x={150 - Number(chestFormula) * 11 * scale} y="40" width={Number(chestFormula) * 11 * scale} height="190" stroke="#1d1b24" strokeWidth="1" strokeDasharray="5 5" />
                      
                      {/* Deep Neck curve */}
                      <path 
                        d={`M 150,40 L ${150 - Number(neckWidthFormula) * 15 * scale},40 L ${150 - Number(shoulderFormula) * 14 * scale},45`} 
                        stroke="#2c2a38" 
                        strokeWidth="1.2" 
                        strokeDasharray="2 2"
                      />
                      <path 
                        d={`M ${150 - Number(neckWidthFormula) * 15 * scale},40 C ${150 - Number(neckWidthFormula) * 15 * scale},${40 + neckDepth * 14 * scale * 0.65} ${150 - Number(neckWidthFormula) * 4 * scale},${40 + neckDepth * 14 * scale} 150,${40 + neckDepth * 14 * scale}`} 
                        stroke="#8a2be2" 
                        strokeWidth="2" 
                        className="drop-shadow-[0_0_2px_#8a2be2]"
                      />

                      {/* Side and armhole contour */}
                      <path 
                        d={`M ${150 - Number(shoulderFormula) * 14 * scale},45 C ${150 - Number(shoulderFormula) * 14 * scale},${40 + Number(armholeFormula) * 17 * scale * 0.5} ${150 - Number(chestFormula) * 12 * scale * 0.8},${40 + Number(armholeFormula) * 17 * scale} ${150 - Number(chestFormula) * 12 * scale},${40 + Number(armholeFormula) * 17 * scale}`} 
                        stroke="#ff2e93" 
                        strokeWidth="2" 
                      />
                      <path 
                        d={`M ${150 - Number(chestFormula) * 12 * scale},${40 + Number(armholeFormula) * 17 * scale} L ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 12 * scale},230 L 150,230`} 
                        stroke="#ff2e93" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 2"
                      />

                      {/* Princess Seam Swoop (प्रिंसेस कट फिटिंग लाइन - splits panel 1 & 2) */}
                      <path 
                        d={`M ${150 - Number(shoulderFormula) * 11.5 * scale},${40 + Number(armholeFormula) * 7.5 * scale} C ${150 - Number(chestFormula) * 8 * scale},${115 * scale} ${150 - Number(chestFormula) * 5.5 * scale},${150 * scale} ${150 - Number(chestFormula) * 4.4 * scale},${165 * scale} C ${150 - Number(chestFormula) * 4 * scale},200 ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 4.2 * scale},215 ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 4.2 * scale},230`} 
                        stroke="#dbff00" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_6px_rgba(219,255,0,0.5)]"
                      />

                      {/* Point Nodes */}
                      <circle cx={`${150 - Number(chestFormula) * 4.4 * scale}`} cy={`${165 * scale}`} r="4" fill="#ff2e93" />
                      <circle cx={`${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 4.2 * scale}`} cy="230" r="3.5" fill="#dbff00" />
                      
                      <text x={`${158 - Number(chestFormula) * 4.4 * scale}`} y={`${165 * scale + 3}`} fill="#ff2e93" className="text-[8px] font-mono font-black">APEX / टक्स पॉइंट</text>
                      <text x="160" y="44" fill="#fff" className="text-[10px] font-mono font-bold">Standard Princess Seam</text>
                      <text x="160" y="58" fill="#aaa" className="text-[8px] font-mono leading-none">Side panel darts aligned automatically</text>
                    </g>
                  )}

                  {activeDraft === "sleeves" && (
                    <g>
                      {/* Sleeve visual framing box */}
                      <rect x="50" y="60" width="200" height="160" stroke="#100e16" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Sleeve Center grainline */}
                      <line x1="150" y1="60" x2="150" y2="220" stroke="#23212d" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Cap Height guide horizontal */}
                      <line x1="50" y1={`${60 + Number(armholeFormula) * 11 * scale}`} x2="250" y2={`${60 + Number(armholeFormula) * 11 * scale}`} stroke="#1c1a25" strokeWidth="1.2" strokeDasharray="2 2" />

                      {/* S-Shape Sleeve Armhole Curve (बाजू की गोलाई - Perfect armhole girth alignment) */}
                      <path 
                        d={`M 50,220 L 50,${60 + Number(armholeFormula) * 11 * scale} C 65,${60 + Number(armholeFormula) * 10 * scale} 85,${60 + Number(armholeFormula) * 5 * scale} 110,${60 + Number(armholeFormula) * 3 * scale} C 128,${60 + Number(armholeFormula) * 1.5 * scale} 140,60 150,60 C 160,60 172,${60 + Number(armholeFormula) * 1.5 * scale} 190,${60 + Number(armholeFormula) * 3 * scale} C 215,${60 + Number(armholeFormula) * 5 * scale} 235,${60 + Number(armholeFormula) * 10 * scale} 250,${60 + Number(armholeFormula) * 11 * scale} L 250,220 Z`} 
                        stroke="#dbff00" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_6px_rgba(219,255,0,0.5)]"
                      />

                      {/* Bottom Bicep/Girth Width markers (मोहरी दबाव line) */}
                      <line x1="70" y1="220" x2="230" y2="220" stroke="#ff2e93" strokeWidth="2" strokeDasharray="3 3" />

                      {/* Sleeve Annotations */}
                      <circle cx="150" cy="60" r="3.5" fill="#fff" />
                      <circle cx="50" cy={`${60 + Number(armholeFormula) * 11 * scale}`} r="3" fill="#ff2e93" />
                      <circle cx="250" cy={`${60 + Number(armholeFormula) * 11 * scale}`} r="3" fill="#ff2e93" />

                      <text x="150" y="50" fill="#fff" className="text-[8.5px] font-mono text-center font-bold" textAnchor="middle">CROWN / शोल्डर जोड़</text>
                      <text x="150" y="235" fill="#ff2e93" className="text-[8.5px] font-mono text-center font-bold" textAnchor="middle">SLEEVE HEM / मोहरी (Girth)</text>
                      <text x="54" y={`${60 + Number(armholeFormula) * 11 * scale - 6}`} fill="#888" className="text-[7px] font-mono">Biceps line</text>
                    </g>
                  )}

                  {/* Super smooth glowing interactive thread tracing animation */}
                  {isTracing && (
                    <motion.path
                      d={
                        activeDraft === "katori" 
                          ? `M 150,${40 + neckDepth * 14 * scale + 12} C ${150 - Number(neckWidthFormula) * 24 * scale},${125} ${150 - Number(chestFormula) * 8.5 * scale},200 ${150 - 45},230`
                          : activeDraft === "princess"
                          ? `M ${150 - Number(shoulderFormula) * 11.5 * scale},${40 + Number(armholeFormula) * 7.5 * scale} C ${150 - Number(chestFormula) * 8 * scale},${115 * scale} ${150 - Number(chestFormula) * 5.5 * scale},${150 * scale} ${150 - Number(chestFormula) * 4.4 * scale},${165 * scale} C ${150 - Number(chestFormula) * 4 * scale},200 ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 4.2 * scale},215 ${150 - ((bustSize * 0.8 / 4) + marginAllowance) * 4.2 * scale},230`
                          : `M 50,220 L 50,${60 + Number(armholeFormula) * 11 * scale} C 65,${60 + Number(armholeFormula) * 10 * scale} 85,${60 + Number(armholeFormula) * 5 * scale} 110,${60 + Number(armholeFormula) * 3 * scale} C 128,${60 + Number(armholeFormula) * 1.5 * scale} 140,60 150,60 C 160,60 172,${60 + Number(armholeFormula) * 1.5 * scale} 190,${60 + Number(armholeFormula) * 3 * scale} C 215,${60 + Number(armholeFormula) * 5 * scale} 235,${60 + Number(armholeFormula) * 10 * scale} 250,${60 + Number(armholeFormula) * 11 * scale}`
                      }
                      stroke="#00ffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.8 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                      className="drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] pr-4 pointer-events-none"
                    />
                  )}
                </motion.svg>
              </AnimatePresence>

              {/* Dynamic size badge overlay */}
              <div className="absolute bottom-3 left-3 bg-dark-card/90 border border-dark-border px-3 py-1 rounded-full text-[10px] font-mono text-gray-400 flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                <span className="w-2 h-2 rounded-full bg-cyber-pink animate-pulse" />
                DRAFT PARAMETERS ACTIVE • {bustSize}" BUST
              </div>

              {/* Live thread simulation button */}
              <div className="absolute bottom-3 right-3 z-20">
                <button
                  onClick={() => {
                    setIsTracing(false);
                    setTimeout(() => setIsTracing(true), 50);
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-card border border-dark-border hover:border-acid text-[9px] font-mono tracking-wider font-bold text-gray-400 hover:text-white cursor-pointer transition-all active:scale-95 shadow-md"
                >
                  <Play className="w-3 h-3 text-acid animate-bounce" /> Simulate Stitching
                </button>
              </div>
            </div>

            {/* Adjustable multiple sizing sliders (Calibrated absolute accuracy tuning) */}
            <div className="mt-6 space-y-4">
              
              {/* SLIDER 1: BUST SIZE */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gray-400 uppercase tracking-wider">📐 CHEST MEASUREMENT SIZER</span>
                  <span className="text-acid font-extrabold">{bustSize} inches / {Math.round(bustSize * 2.54)} cm</span>
                </div>
                <input 
                  type="range" 
                  min="28" 
                  max="46" 
                  value={bustSize}
                  onChange={(e) => {
                    setBustSize(parseInt(e.target.value));
                    setIsTracing(false); // reset tracer
                  }}
                  className="w-full accent-acid cursor-pointer bg-dark-obsidian h-2 rounded-lg transition-all focus:ring-1 focus:ring-acid/40"
                />
              </div>

              {/* TWO COLUMN ROW FOR PRECISE PARAMETERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* SLIDER 2: FRONT DEEP NECK */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-gray-400 uppercase">गहराई (Neck Depth)</span>
                    <span className="text-cyber-purple font-bold">{neckDepth.toFixed(1)}"</span>
                  </div>
                  <input 
                    type="range" 
                    min="4.0" 
                    max="9.0" 
                    step="0.1"
                    value={neckDepth}
                    onChange={(e) => {
                      setNeckDepth(parseFloat(e.target.value));
                      setIsTracing(false);
                    }}
                    className="w-full accent-cyber-purple cursor-pointer bg-dark-obsidian h-1.5 rounded-lg"
                  />
                </div>

                {/* SLIDER 3: MARGIN EXTRAS */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-gray-400">मार्जिन (Seam Margin)</span>
                    <span className="text-cyber-pink font-bold">+{marginAllowance.toFixed(2)}"</span>
                  </div>
                  <input 
                    type="range" 
                    min="1.5" 
                    max="2.5" 
                    step="0.25"
                    value={marginAllowance}
                    onChange={(e) => {
                      setMarginAllowance(parseFloat(e.target.value));
                      setIsTracing(false);
                    }}
                    className="w-full accent-cyber-pink cursor-pointer bg-dark-obsidian h-1.5 rounded-lg"
                  />
                </div>

              </div>

              {/* Real-time fitting advice ticker & precision metrics output */}
              <div className="p-3 bg-dark-obsidian border border-dark-border/80 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">PRIYA'S SHAPE VERDICT / परिणाम:</div>
                  <span className="bg-acid/15 border border-acid/30 text-acid text-[8px] font-mono font-bold px-1.5 py-0.2 rounded">100% SECURE FARMA</span>
                </div>
                <p className="text-[11px] font-black text-white tracking-wide uppercase flex items-center gap-1.5 leading-none transition-all">
                  <Check className="w-3.5 h-3.5 text-acid shrink-0" /> {testResult}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE-COLUMN STATS GRID */}
      <BentoStats />

      {/* ROTATING DISK COURSE SELECTOR SECTION */}
      <div id="courses-section" className="bg-dark-obsidian/45 py-8 border-t border-dark-border/60">
        <CircularDisc />
      </div>

      {/* BOTTOM FOOTER SECTION */}
      <footer className="bg-dark-card/90 border-t border-dark-border/80 py-12 text-center text-sm relative z-10 overflow-hidden">
        
        {/* Subtle grid elements in back */}
        <div className="absolute inset-0 bg-grid-sewing opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪡</span>
              <div className="text-left">
                <span className="font-display font-black text-white text-base block tracking-wider uppercase">Raja Rani Coaching</span>
                <span className="text-xs text-gray-400 font-mono">India's most trusted tailoring & pattern online institute</span>
              </div>
            </div>

            {/* Platform Badges */}
            <div className="flex gap-4">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 bg-dark-obsidian border border-dark-border hover:border-gray-600 rounded-xl flex items-center gap-2 transition-transform hover:scale-[1.02] text-xs"
              >
                📱 <span className="font-mono text-left"><span className="text-[9px] uppercase text-gray-500 block">Download for</span>Android App</span>
              </a>
              <a 
                href="https://www.apple.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 bg-dark-obsidian border border-dark-border hover:border-gray-600 rounded-xl flex items-center gap-2 transition-transform hover:scale-[1.02] text-xs"
              >
                🍏 <span className="font-mono text-left"><span className="text-[9px] uppercase text-gray-500 block">Download for</span>iOS Store</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p className="font-mono uppercase tracking-widest">
              © 2026 Raja Rani Coaching Academy. Crafted with ❤️ for Gen-Z Designers.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-cyber-pink transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

      </footer>

      {/* FLOATING SUPPORT CHATBOT (Representative AI Priya & Mohit) */}
      <Chatbot />

    </div>
  );
}
