export interface SpeakerTeaser {
  id: string;
  field: string;
  codename: string;
  category:
    | 'Arts, Culture & Storytelling'
    | 'Food, Craft & Heritage'
    | 'Fashion & Creative Enterprise'
    | 'Business & Creator Economy'
    | 'Law, Governance & Justice'
    | 'Migration, Diaspora & Society'
    | 'Environment & Sustainability'
    | 'Mind, Growth & Self-Mastery';
  status: string;
  curatorialNote: string;
  silhouetteColor: string;
  revealed: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  period: 'Morning' | 'Midday';
  title: string;
  speaker?: string;
  speakerRole?: string;
  type: 'talk' | 'keynote' | 'break' | 'performance' | 'networking' | 'unveiling';
  description: string;
  location: string;
}

export interface ThemePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  gradient: string;
  borderGlow: string;
  tags: string[];
  metrics: string;
}

export interface VenueGalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Stage' | 'Auditorium' | 'Lobby' | 'Seating';
  image: string;
  badge: string;
}

export interface TicketTier {
  id: string;
  name: string;
  badge: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  totalSeats: number;
  spotsLeft: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Tickets' | 'Event Day' | 'Speakers';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  role: 'Student' | 'Faculty' | 'Professional' | 'Executive' | 'Guest';
  institution: string;
  tier: string;
  dietaryNotes?: string;
  motivation: string;
}
