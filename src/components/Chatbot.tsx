import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  Bot, 
  User, 
  Scissors, 
  BookOpen, 
  MapPin, 
  HelpCircle,
  Smartphone
} from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro-message",
      role: "assistant",
      text: "Hey gorgeous designer! 🪡 I am Priya Prasad's AI assistant at Raja Rani Coaching! Ask me anything about our Blouse/Kurti Masterclasses, our bestselling pre-cut size 'Farma' stencils, or our direct physical academy center in Ahmedabad. What are we stitching today? ✨👗",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggestions for Gen Z tailors to click instantly
  const SUGGESTIONS = [
    { label: "👗 Blouse Course Syllabus", text: "What is the syllabus and fee of Blouse Masterclass course?" },
    { label: "✂️ Explain Farma Cutting Plates", text: "What are Farma pattern cuttings and how do they help beginners?" },
    { label: "📍 Ahmedabad Offline Classes", text: "Where is your physical tailoring academy center located and how do I join?" },
    { label: "📱 RRC Mobile App Login", text: "How do I download and login to the Raja Rani Android/iOS App?" }
  ];

  // Auto-scroll chats on updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send previous messages and convert Dates to strings cleanly
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to contact server");
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        text: data.text || "I was threading my sewing machine, can you repeat that?",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat API error:", err);
      // Fallback offline responses in case of unexpected connection loss
      const fallbackMsgText = textToSend.toLowerCase();
      let replyText = "Hey sweetheart! 🌸 I had a small hitch threading the needle, but I can tell you that we offer our highly popular **Blouse Course (₹1,499)** & **Kurti block (₹999)** with physical layout materials shipped straight to your doorstep. You can download the **Raja Rani Coaching** app on Google Play & Apple App store to start now!";
      
      if (fallbackMsgText.includes("blouse")) {
        replyText = "Our **Blouse Masterclass** online is highly demanded! 👗 Priya teaches 28+ luxury styling lines (princess cut, triple dart, Sabyasachi, corset padding). Cost is ₹1,499 with certificates of merit!";
      } else if (fallbackMsgText.includes("farma") || fallbackMsgText.includes("pattern")) {
        replyText = "Raja Rani **Farma patterns** are direct laser-graded layout guides in a range of sizes. ✂️ Simply layout on cloth, draw, and cut immediately without hard calculations. Absolute lifesaver!";
      } else if (fallbackMsgText.includes("ahmedabad") || fallbackMsgText.includes("location") || fallbackMsgText.includes("offline")) {
        replyText = "Our main physical studio tailoring camp is in **Ahmedabad, Gujarat** near Shivranjani. Priya herself runs standard batches for master pattern grading and fabric fitting hacks! 🪡✨";
      }

      const assistantMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        role: "assistant",
        text: replyText + "\n\n*(Note: Set your GEMINI_API_KEY in secrets to get customized real-time counseling!)*",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING SPARKLE CHAT TRIGGER */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-cyber-pink hover:bg-opacity-90 flex items-center justify-center text-white cursor-pointer shadow-lg relative outline-none hover:scale-105 active:scale-95 transition-transform group glow-pink"
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-7 h-7" />
              {/* Dynamic Notification dot/sparkle */}
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-acid text-dark-obsidian font-sans font-bold text-[9px] flex items-center justify-center animate-bounce shadow">
                AI
              </span>
              {/* Spinning seam borders */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/40 animate-[spin_10s_linear_infinite]" />
            </>
          )}
        </motion.button>
      </div>

      {/* FLOATING CHAT SHELL POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 180 }}
            className="fixed bottom-24 right-4 md:right-6 w-[92vw] sm:w-[400px] h-[550px] bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-2xl z-40 flex flex-col glow-purple"
          >
            {/* CHATHEADER - Cyber-fashion styling */}
            <div className="p-4 bg-dark-obsidian border-b border-dark-border flex items-center justify-between relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-acid via-cyber-pink to-cyber-purple" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-acid/40 flex items-center justify-center glow-acid overflow-hidden text-lg">
                  ✂️
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-white tracking-wide uppercase flex items-center gap-1.5">
                    Priya AI Tailor <Sparkles className="w-3.5 h-3.5 text-acid animate-pulse" />
                  </h4>
                  <p className="text-[10px] font-mono text-acid uppercase tracking-wider">● Online 24/7 Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-dark-border text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CHAT LOG SCREEN */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-card scrollbar-thin scrollbar-thumb-dark-border"
            >
              {messages.map((msg) => {
                const isAI = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isAI ? "" : "flex-row-reverse"}`}
                  >
                    {/* Role Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      isAI ? "bg-dark-obsidian border border-cyber-purple text-cyber-purple" : "bg-cyber-pink text-white"
                    }`}>
                      {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    {/* Bubble Content */}
                    <div className={`max-w-[75%] rounded-2xl p-3 text-xs md:text-sm leading-relaxed ${
                      isAI 
                        ? "bg-dark-obsidian border border-dark-border text-gray-300" 
                        : "bg-cyber-pink/15 border border-cyber-pink/30 text-white"
                    }`}>
                      {/* Formatted body linebreaks or tags */}
                      <p className="whitespace-pre-line select-text font-sans">
                        {msg.text}
                      </p>
                      <span className="block text-[8px] font-mono text-gray-600 mt-1.5 text-right uppercase">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Bot thread loader animation */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-dark-obsidian border border-cyber-purple flex items-center justify-center text-cyber-purple text-xs shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-dark-obsidian border border-dark-border text-gray-400 rounded-2xl p-3 text-xs flex items-center gap-2">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-acid rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-cyber-pink rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                    <span className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">Threading needle...</span>
                  </div>
                </div>
              )}
            </div>

            {/* QUICK PRE-SET QUESTION SUGGESTIONS */}
            {messages.length === 1 && (
              <div className="p-3 bg-dark-obsidian/40 border-t border-dark-border space-y-1.5">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-1">RECOMMENDED QUESTIONS</span>
                <div className="flex flex-col gap-1.5 leading-none">
                  {SUGGESTIONS.map((sug, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSendMessage(sug.text)}
                      className="text-left w-full p-2 rounded-xl text-[11px] font-medium bg-dark-card border border-dark-border hover:border-acid hover:text-acid text-gray-300 transition-colors cursor-pointer block leading-tight truncate"
                    >
                      {sug.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SEND INPUT SYSTEM */}
            <div className="p-3 bg-dark-obsidian border-t border-dark-border flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask Priya about Blouse design, App..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(input)}
                className="flex-1 bg-dark-card border border-dark-border focus:border-acid text-xs text-white pl-3.5 pr-2 py-3 rounded-xl outline-none transition-colors"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isLoading}
                className="p-3 rounded-xl bg-acid text-dark-obsidian font-bold hover:scale-102 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer shadow glow-acid flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
