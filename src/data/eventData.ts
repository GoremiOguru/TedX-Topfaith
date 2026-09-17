import type { Speaker, ScheduleItem, ThemePillar, VenueGalleryItem, TicketTier, FAQItem } from '../types';

export const EVENT_DETAILS = {
  name: "TEDxTopfaithUniversity",
  subName: "Topfaith University",
  theme: "TRANSCEND",
  tagline: "Moving Local to Global",
  fullTheme: "TRANSCEND: Moving Local to Global",
  description: "Bridging indigenous ingenuity with global relevance. An electrifying gathering of fearless innovators, researchers, artists, and leaders igniting ideas that transcend geographical and intellectual boundaries.",
  date: "November 14, 2026",
  time: "09:00 AM - 05:00 PM (WAT)",
  isoDate: "2026-11-14T09:00:00+01:00",
  venue: {
    name: "The Law Auditorium Complex",
    institution: "Topfaith University",
    city: "Mkpatak, Akwa Ibom State",
    country: "Nigeria",
    hallCapacity: "1,200+ Seats",
    address: "Topfaith University Campus, Mkpatak, Essien Udim LGA, Akwa Ibom State",
    mapsUrl: "https://maps.google.com/?q=Topfaith+University+Nigeria"
  },
  stats: [
    { value: "12+", label: "Transformative Talks", suffix: "" },
    { value: "1,200+", label: "Expected Attendees", suffix: "" },
    { value: "18", label: "Max Minutes per Talk", suffix: "m" },
    { value: "100%", label: "Ideas Worth Spreading", suffix: "" }
  ],
  socials: {
    twitter: "https://x.com/TEDxTopfaithUni",
    instagram: "https://instagram.com/tedxtopfaithuni",
    linkedin: "https://linkedin.com/company/tedxtopfaithuni",
    youtube: "https://youtube.com/@tedx"
  }
};

export const THEME_PILLARS: ThemePillar[] = [
  {
    id: "local-to-global-tech",
    title: "Grassroots Tech & AI Frontiers",
    subtitle: "Solving local realities with world-class engineering",
    description: "How African and emerging creators build frontier AI, agritech, and fintech solutions rooted in grassroots challenges that scale to solve global crises.",
    iconName: "Cpu",
    color: "#EB0028",
    tags: ["Artificial Intelligence", "DeepTech", "Decentralized Systems"]
  },
  {
    id: "cultural-resonance",
    title: "Cultural Narratives & Creative Exports",
    subtitle: "Amplifying authentic African stories globally",
    description: "Elevating African storytelling, design, music, and cinematic arts into mainstream global cultural phenomenons without diluting native authenticity.",
    iconName: "Sparkles",
    color: "#FF334B",
    tags: ["Creative Economy", "Digital Arts", "Heritage"]
  },
  {
    id: "sustainable-futures",
    title: "Next-Gen Energy & Climate Resilience",
    subtitle: "Ecological transitions for emerging economies",
    description: "Re-imagining sustainable urbanization, green energy independence, and circular economies developed from local materials for global climate impact.",
    iconName: "Globe",
    color: "#00C853",
    tags: ["Renewable Energy", "Bio-materials", "Circular Economy"]
  },
  {
    id: "disruptive-leadership",
    title: "Youth Leadership & Global Governance",
    subtitle: "Shattering ceilings from within university walls",
    description: "Equipping young leaders with ethical agility, international diplomacy skills, and radical problem-solving mindsets to lead multinational arenas.",
    iconName: "Zap",
    color: "#FF9100",
    tags: ["Future of Work", "Venture Building", "Policy Innovation"]
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "dr-ifeoma-adeyemi",
    name: "Dr. Ifeoma Adeyemi",
    role: "Director of AI Systems & African Language Models",
    organization: "NeuroLex Global Research",
    topic: "Decoding Dialects: How African Multimodal AI is Reshaping Global Natural Language",
    talkDuration: "16 min",
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneering researcher building open language datasets and neuromorphic models that bring 2,000+ unrepresented dialects to global computing architecture.",
    keyTakeaway: "True global intelligence begins when machines understand the nuances of non-Western verbal and cultural contexts.",
    quote: "When we digitize our oral history, we don't just preserve our past—we command our seat at the global AI table.",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "tariq-el-mansouri",
    name: "Tariq El-Mansouri",
    role: "Founding Partner & Venture Architect",
    organization: "Sahara Nexus Capital",
    topic: "The Leapfrog Economy: Taking Local Micro-Enterprise to International Capital Markets",
    talkDuration: "14 min",
    category: "Global Leadership",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Serial tech founder turned venture capitalist who has backed over 30 pan-African startups scaling into North American and European markets.",
    keyTakeaway: "Local constraints breed the ultimate antifragile innovations that thrive under extreme global market volatility.",
    quote: "Build for the hardest terrain first. If your product solves a problem in Mkpatak or Lagos, it will conquer London and Tokyo.",
    socials: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "prof-emmanuel-udoh",
    name: "Prof. Emmanuel Udoh",
    role: "Chair of Bio-Robotics & Material Science",
    organization: "Topfaith Innovation Hub",
    topic: "Bio-Mimetic Architecture: Cooling Cities Using Ancient Soil Termite Wisdom",
    talkDuration: "15 min",
    category: "Science & Health",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Leading innovator at Topfaith University researching thermodynamic bio-polymers and passive zero-electricity cooling systems inspired by regional tropical ecosystems.",
    keyTakeaway: "The solutions to global warming are already encoded in our indigenous ecological heritage.",
    quote: "Nature had a billion-year head start on thermodynamics. We simply need the humility to study it.",
    socials: {
      website: "https://topfaith.edu.ng"
    }
  },
  {
    id: "amara-kalu",
    name: "Amara Kalu",
    role: "Transmedia Artist & Creative Technologist",
    organization: "Studio Astral Nomad",
    topic: "Afro-Futurism Unbound: Immersion, Spatial Sound, and the Global Gallery",
    talkDuration: "12 min",
    category: "Creative Arts",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    bio: "Internationally exhibited VR artist whose interactive audio-visual tapestries have been featured at the Venice Biennale and SXSW.",
    keyTakeaway: "Creative expression is the fastest borderless vehicle to redefine how the world perceives African talent.",
    quote: "Our culture was never meant to be a museum piece; it is living software updating the global imagination.",
    socials: {
      twitter: "https://x.com",
      website: "https://example.com"
    }
  },
  {
    id: "dr-kemi-balogun",
    name: "Dr. Kemi Balogun",
    role: "Chief Health Epidemiologist & Digital Health Strategist",
    organization: "Global Health Diagnostics Alliance",
    topic: "Borderland Genomics: Predicting Global Pandemics from Rural Health Sentinel Hubs",
    talkDuration: "17 min",
    category: "Science & Health",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    bio: "Advancing decentralised gene sequencing kits enabling rural clinics to detect pathogenetic mutations months ahead of central laboratories.",
    keyTakeaway: "Global biosecurity is only as resilient as the most remote village clinic.",
    quote: "When rural healthcare workers are equipped with cutting-edge diagnostics, the entire globe becomes safer.",
    socials: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "victor-asikpo",
    name: "Victor Asikpo",
    role: "Student Innovator & Drone Robotics Lead",
    organization: "Topfaith University Engineering Guild",
    topic: "Autonomous Supply Wings: Building Low-Cost Medical Courier Drones from Recycled Carbon",
    talkDuration: "10 min",
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Topfaith undergraduate engineering prodigy who developed autonomous lightweight fixed-wing UAVs to deliver life-saving antivenom and vaccines to remote riverine clinics.",
    keyTakeaway: "Youth ingenuity doesn't wait for massive budgets; it starts with grit, purpose, and raw curiosity.",
    quote: "The sky above our campus is not a ceiling—it is a runway to the entire world.",
    socials: {
      twitter: "https://x.com"
    }
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: "s1",
    time: "08:00 AM - 09:15 AM",
    period: "Morning",
    title: "Delegate Check-in, Red Carpet Arrival & Networking Breakfast",
    type: "networking",
    description: "Registration confirmation, digital badge collection, red carpet photo opportunities, and artisan morning brew at the Law Auditorium Lobby.",
    location: "Law Auditorium Lobby & Foyer"
  },
  {
    id: "s2",
    time: "09:15 AM - 09:35 AM",
    period: "Morning",
    title: "Opening Ceremony & Vice Chancellor Welcome Address",
    type: "keynote",
    speaker: "University Leadership & TEDx Curator",
    speakerRole: "Convener, TEDxTopfaithUniversity",
    description: "Welcome remarks establishing the essence of 'TRANSCEND: Moving Local to Global' and official TED licensing guidelines.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s3",
    time: "09:35 AM - 10:45 AM",
    period: "Morning",
    title: "Session 1: The Frontier of Grassroots Intelligence",
    type: "talk",
    speaker: "Dr. Ifeoma Adeyemi & Victor Asikpo",
    speakerRole: "NeuroLex & Topfaith Robotics",
    description: "Back-to-back presentations exploring localized multimodal AI and autonomous drone logistics born in African university labs.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s4",
    time: "10:45 AM - 11:20 AM",
    period: "Midday",
    title: "Live Musical & Spoken Word Fusion: Echoes of Mkpatak",
    type: "performance",
    speaker: "Topfaith Arts Ensemble & Indigenous Percussionists",
    description: "An awe-inspiring live sonic blend of traditional folk rhythm and modern synthesizer acoustics.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s5",
    time: "11:20 AM - 12:45 PM",
    period: "Midday",
    title: "Session 2: Bio-Mimetic Wonders & Planetary Resilience",
    type: "talk",
    speaker: "Prof. Emmanuel Udoh & Dr. Kemi Balogun",
    speakerRole: "Material Science & Global Health",
    description: "Breakthrough talks on zero-energy thermodynamic buildings and decentralised pandemic surveillance.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s6",
    time: "12:45 PM - 02:00 PM",
    period: "Midday",
    title: "Networking Luncheon & Innovation Showcase Expo",
    type: "break",
    description: "Curated multi-course lunch, interactive student tech demos, sponsor pavilions, and speaker meet-and-greets.",
    location: "University Terrace & Innovation Gardens"
  },
  {
    id: "s7",
    time: "02:00 PM - 03:30 PM",
    period: "Afternoon",
    title: "Session 3: Transcending Borders — Venture, Art & Global Influence",
    type: "talk",
    speaker: "Tariq El-Mansouri & Amara Kalu",
    speakerRole: "Sahara Nexus Capital & Astral Nomad",
    description: "Masterclasses on taking African startups to global venture dominance and spatial XR art on the world stage.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s8",
    time: "03:30 PM - 04:30 PM",
    period: "Afternoon",
    title: "The Transcend Colloquium: Fireside Panel & Audience Q&A",
    type: "workshop",
    speaker: "All Speakers & Thought Leaders",
    description: "An unscripted, high-intensity debate on what it truly takes for African intellect to lead global policy and technological revolutions.",
    location: "Main Stage - Law Auditorium"
  },
  {
    id: "s9",
    time: "04:30 PM - 05:00 PM",
    period: "Evening",
    title: "Curator's Closing, Group Photos & VIP Sunset Reception",
    type: "networking",
    description: "Celebrating organizers, volunteers, certificate presentations, and closing reflections with delegates and faculty.",
    location: "Law Auditorium Foyer"
  }
];

export const VENUE_GALLERY: VenueGalleryItem[] = [
  {
    id: "v1",
    title: "The Law Auditorium Grand Arena",
    caption: "The majestic main amphitheater featuring acoustically tuned architectural tiers, sweeping stage visibility, and state-of-the-art audiovisual rigging.",
    category: "Auditorium",
    image: "/what_the_hall_looks_like.jpeg",
    badge: "Main Stage"
  },
  {
    id: "v2",
    title: "Grand Lobby & Exhibition Concourse",
    caption: "The pristine, glass-adorned reception foyer where delegates gather for check-in, media interviews, and interactive sponsor pavilions.",
    category: "Lobby",
    image: "/law_auditorium_lobby.jpeg",
    badge: "Reception & Media"
  },
  {
    id: "v3",
    title: "Tiered Delegate Seating & Lighting",
    caption: "Plush, high-comfort auditorium seating designed for immersive viewing and clear sightlines from every angle.",
    category: "Seating",
    image: "/what_the_hall_looks_like_part2.jpeg",
    badge: "1,200 Capacity"
  },
  {
    id: "v4",
    title: "Panoramic Balcony & Production Hub",
    caption: "Elevated vantage point housing 4K broadcast cameras, live translation systems, and multi-angle broadcast consoles.",
    category: "Stage",
    image: "/what_the_hall_looks_like_part3.jpeg",
    badge: "Production Deck"
  }
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "student-pass",
    name: "Student Delegate",
    badge: "For Students",
    price: 0,
    currency: "₦",
    description: "Subsidized access exclusively for registered university & college students with verified student ID.",
    features: [
      "Access to all 12+ live TEDx Talks",
      "Digital Delegate Badge & Certificate",
      "TEDxTopfaith Swag Bag & Sticker Pack",
      "Networking Luncheon & Coffee Breaks",
      "Access to Innovation Demo Expo"
    ],
    color: "#4F46E5",
    spotsLeft: 142
  },
  {
    id: "standard-delegate",
    name: "General Delegate",
    badge: "Most Popular",
    price: 5000,
    originalPrice: 8000,
    currency: "₦",
    description: "Full access pass for professionals, researchers, innovators, entrepreneurs, and global changemakers.",
    features: [
      "Priority Reserved Auditorium Seating",
      "Official TEDxTopfaith Premium Kit",
      "Exclusive Delegate Luncheon with Speakers",
      "Fast-Track Red Carpet Check-In",
      "Full Post-Event High-Res Talk Vault Access",
      "Official TEDx Verified Attendance Certificate"
    ],
    popular: true,
    color: "#EB0028",
    spotsLeft: 78
  },
  {
    id: "vip-patron",
    name: "Patron / VIP Executive",
    badge: "VIP Experience",
    price: 25000,
    currency: "₦",
    description: "Exclusive experience for faculty executives, sponsors, corporate leaders, and esteemed patrons.",
    features: [
      "Front-Row VIP Reserved Seating",
      "Access to Private VIP Speaker Lounge",
      "Exclusive Sunset Dinner with Speakers & VC",
      "Deluxe TEDx Topfaith Keepsake Gift Box",
      "Dedicated Concierge & Reserved Campus Parking",
      "Recognition in the Official Event Program"
    ],
    color: "#D97706",
    spotsLeft: 23
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is TEDxTopfaithUniversity?",
    answer: "TEDxTopfaithUniversity is a fully licensed, independently organized TED event hosted at Topfaith University, Mkpatak. Guided by our 2026 theme 'TRANSCEND: Moving Local to Global', the event brings together groundbreaking scientists, technologists, cultural icons, and student visionaries to deliver world-changing ideas in 18 minutes or less.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is the event venue located and how do I get there?",
    answer: "The event is held at The Law Auditorium Complex, Topfaith University Campus, Mkpatak, Essien Udim LGA, Akwa Ibom State, Nigeria. Shuttle buses will operate from major hubs across Ikot Ekpene, Uyo, and Aba directly to the university gates. Ample secure parking is provided on campus.",
    category: "Event Day"
  },
  {
    id: "faq-3",
    question: "How do I secure my ticket and what are the registration requirements?",
    answer: "You can register directly on this portal by clicking 'Reserve Your Seat'. Select your preferred tier (Student, General, or VIP Patron). Students will need to input a valid Student ID number. Upon successful reservation, your digital pass with a unique QR code will be generated instantly for mobile download and email confirmation.",
    category: "Tickets"
  },
  {
    id: "faq-4",
    question: "Is there an official dress code?",
    answer: "The dress code is Smart Casual / Business Chic or Elegant Cultural Attire. We encourage bright, dignified attire that looks great on camera, while avoiding overly loud neon patterns that may strobe under studio lights.",
    category: "Event Day"
  },
  {
    id: "faq-5",
    question: "Will the talks be recorded and published on the global TEDx YouTube channel?",
    answer: "Yes! In strict accordance with TED licensing rules, all talks are recorded in 4K broadcast quality and submitted to the global TEDx YouTube channel (over 40 million subscribers worldwide) for international distribution.",
    category: "Speakers"
  },
  {
    id: "faq-6",
    question: "Can our organization become an official sponsor or partner?",
    answer: "Absolutely. We offer customized partnership tiers for technology companies, academic foundations, media networks, and progressive brands. Click 'Partner With Us' in the sponsor section or contact partnerships@tedxtopfaithuni.com to receive our comprehensive Sponsor Deck.",
    category: "General"
  }
];

export const SPONSORS = [
  { name: "Topfaith University Foundation", tier: "Host & Title Sponsor", logo: "🏛️" },
  { name: "African Tech Horizons", tier: "Innovation Partner", logo: "⚡" },
  { name: "Apex Media Africa", tier: "Official Broadcast Partner", logo: "📡" },
  { name: "Nexus Ventures", tier: "Venture Catalyst", logo: "🚀" },
  { name: "GreenGrid Energy", tier: "Sustainability Partner", logo: "🌱" }
];
