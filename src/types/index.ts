export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  topic: string;
  talkDuration: string;
  bio: string;
  keyTakeaway: string;
  category: 'Tech & AI' | 'Global Leadership' | 'Creative Arts' | 'Social Impact' | 'Science & Health';
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  quote: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  period: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
  title: string;
  speaker?: string;
  speakerRole?: string;
  type: 'talk' | 'keynote' | 'break' | 'performance' | 'networking' | 'workshop';
  description: string;
  location: string;
}

export interface ThemePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  tags: string[];
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
  role: 'Student' | 'Faculty' | 'Professional' | 'Guest' | 'Innovator';
  institution: string;
  tier: string;
  dietaryNotes?: string;
  motivation: string;
}
