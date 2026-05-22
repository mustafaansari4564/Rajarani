export interface SyllabusItem {
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  studentsCount: number;
  durationWeeks: number;
  tagline: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Pro";
  features: string[];
  syllabus: SyllabusItem[];
  colorTheme: "acid" | "pink" | "purple";
  emojiIcon: string;
}

export interface StatItem {
  label: string;
  value: string;
  change: string;
  description: string;
  glowColor: "acid" | "pink" | "purple";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}
