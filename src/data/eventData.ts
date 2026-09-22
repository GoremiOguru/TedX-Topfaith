import type { SpeakerTeaser, ScheduleItem, ThemePillar, VenueGalleryItem, TicketTier, FAQItem } from '../types';

export const EVENT_DETAILS = {
  name: "TEDxTopfaithUniversity",
  subName: "Topfaith University",
  theme: "TRANSCEND",
  tagline: "Exceeding Limitations",
  fullTheme: "TRANSCEND: Exceeding Limitations",
  description: "Bridging indigenous heritage, cultural power, creative enterprise, and transformative governance with global resonance. An intense, high-impact gathering of fearless creators, jurists, culinary artists, diaspora voices, and student catalysts exceeding all limitations.",
  date: "Saturday November 21, 2026",
  dateFormatted: "Saturday, November 21st, 2026",
  time: "09:00 AM - 12:00 PM (WAT)",
  durationText: "3 Hours of Pure Transformation",
  isoDate: "2026-11-21T09:00:00+01:00",
  venue: {
    name: "The Law Auditorium",
    institution: "Topfaith University",
    city: "Mkpatak, Akwa Ibom State",
    country: "Nigeria",
    hallCapacity: "Exclusive Curated Quota",
    address: "Topfaith University Campus, Mkpatak, Essien Udim LGA, Akwa Ibom State",
    mapsUrl: "https://maps.google.com/?q=Topfaith+University+Nigeria",
    websiteUrl: "https://topfaith.edu.ng"
  },
  stats: [
    { value: "Curated", label: "Exclusive Quota", suffix: "" },
    { value: "3", label: "Hours of Power (9AM - 12PM)", suffix: "h" },
    { value: "Sat, Nov 21", label: "Event Date 2026", suffix: "" },
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
    id: "arts-culture-storytelling",
    title: "Arts, Culture & Storytelling",
    subtitle: "Amplifying authentic African narratives globally",
    description: "Exploring transmedia narratives, indigenous oral traditions, visual arts, and contemporary cultural software shaping the global imagination.",
    iconName: "Sparkles",
    accentColor: "#EB0028",
    gradient: "linear-gradient(135deg, rgba(235, 0, 40, 0.22) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(235, 0, 40, 0.45)",
    tags: ["Transmedia Arts", "Oral Traditions", "Global Narratives"],
    metrics: "Authentic &bull; Borderless"
  },
  {
    id: "food-craft-heritage",
    title: "Food, Craft & Culinary Heritage",
    subtitle: "Preserving gastronomy, artisanal crafts, and living traditions",
    description: "Celebrating African culinary sciences, indigenous food sovereignty, textile craftsmanship, and heritage preservation as vital economic and cultural forces.",
    iconName: "Award",
    accentColor: "#FFFFFF",
    gradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(255, 255, 255, 0.3)",
    tags: ["Culinary Heritage", "Artisanal Craft", "Food Sovereignty"],
    metrics: "Living Heritage"
  },
  {
    id: "fashion-design-enterprise",
    title: "Fashion, Design & Creative Enterprise",
    subtitle: "Building global creative powerhouses from African aesthetics",
    description: "Unlocking sustainable fashion ecosystems, wearable culture, spatial architecture, and multi-million dollar creative enterprises commanding international runways.",
    iconName: "Layers",
    accentColor: "#EB0028",
    gradient: "linear-gradient(135deg, rgba(235, 0, 40, 0.22) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(235, 0, 40, 0.45)",
    tags: ["Wearable Culture", "Creative Enterprise", "Global Design"],
    metrics: "Design Power"
  },
  {
    id: "business-creator-economy",
    title: "Business, Innovation & Creator Economy",
    subtitle: "Venture building, monetization, and new-era digital capital",
    description: "How African founders, content architects, and creative entrepreneurs are monetizing cultural capital, building resilient ventures, and redefining global markets.",
    iconName: "Zap",
    accentColor: "#FFFFFF",
    gradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(255, 255, 255, 0.3)",
    tags: ["Creator Economy", "Venture Tenacity", "Cultural Capital"],
    metrics: "Venture Impact"
  },
  {
    id: "law-governance-justice",
    title: "Law, Governance & Justice",
    subtitle: "Institutional integrity, constitutional rights, and legal reform",
    description: "Delivering world-class legal discourse from The Law Auditorium—shaping human rights, digital ethics, rule of law, and institutional accountability for future generations.",
    iconName: "Target",
    accentColor: "#EB0028",
    gradient: "linear-gradient(135deg, rgba(235, 0, 40, 0.22) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(235, 0, 40, 0.45)",
    tags: ["Constitutional Law", "Civic Rights", "Justice Reform"],
    metrics: "Law & Justice"
  },
  {
    id: "migration-diaspora-society",
    title: "Migration, Diaspora & Global Society",
    subtitle: "Border crossings, brain circulation, and transnational networks",
    description: "Connecting the global African diaspora, rethinking citizenship, cross-border remittance architecture, and advancing cultural diplomacy on the world stage.",
    iconName: "Globe",
    accentColor: "#FFFFFF",
    gradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(255, 255, 255, 0.3)",
    tags: ["Diaspora Diplomacy", "Brain Circulation", "Global Africa"],
    metrics: "Transnational Reach"
  },
  {
    id: "environment-sustainable-futures",
    title: "Environment & Sustainable Futures",
    subtitle: "Indigenous ecology, climate resilience, and regenerative living",
    description: "Championing ancestral environmental wisdom, native biodiversity conservation, regenerative agriculture, and sustainable habitat systems for future generations.",
    iconName: "Globe",
    accentColor: "#EB0028",
    gradient: "linear-gradient(135deg, rgba(235, 0, 40, 0.22) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(235, 0, 40, 0.45)",
    tags: ["Indigenous Ecology", "Regenerative Living", "Climate Resilience"],
    metrics: "Planetary Impact"
  },
  {
    id: "mind-growth-mastery",
    title: "Mind, Growth & Self-Mastery",
    subtitle: "Inner resilience, mental stamina, and personal leadership",
    description: "Developing unshakeable psychological stamina, cognitive reframing, emotional intelligence, and radical self-mastery to exceed personal and societal limitations.",
    iconName: "Sparkles",
    accentColor: "#FFFFFF",
    gradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(14, 14, 20, 0.95) 100%)",
    borderGlow: "rgba(255, 255, 255, 0.3)",
    tags: ["Self-Mastery", "Mental Resilience", "Personal Growth"],
    metrics: "Inner Greatness"
  }
];

export const SPEAKER_TEASERS: SpeakerTeaser[] = [
  {
    id: "speaker-1",
    field: "Arts, Culture & Storytelling",
    codename: "Speaker Drop #1",
    category: "Arts, Culture & Storytelling",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating visionary transmedia creators, artists, and oral historians. Official speaker drop coming soon.",
    silhouetteColor: "#EB0028",
    revealed: false
  },
  {
    id: "speaker-2",
    field: "Food, Craft & Culinary Heritage",
    codename: "Speaker Drop #2",
    category: "Food, Craft & Heritage",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating culinary innovators, gastronomy researchers, and living craft masters. Official speaker drop coming soon.",
    silhouetteColor: "#FFFFFF",
    revealed: false
  },
  {
    id: "speaker-3",
    field: "Fashion, Design & Creative Enterprise",
    codename: "Speaker Drop #3",
    category: "Fashion & Creative Enterprise",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating fashion architects, wearable culture innovators, and creative founders. Official speaker drop coming soon.",
    silhouetteColor: "#EB0028",
    revealed: false
  },
  {
    id: "speaker-4",
    field: "Business, Innovation & Creator Economy",
    codename: "Speaker Drop #4",
    category: "Business & Creator Economy",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating venture leaders, creator economy pioneers, and market disruptors. Official speaker drop coming soon.",
    silhouetteColor: "#FFFFFF",
    revealed: false
  },
  {
    id: "speaker-5",
    field: "Law, Governance & Justice",
    codename: "Speaker Drop #5",
    category: "Law, Governance & Justice",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating distinguished jurists, legal scholars, and governance reformers for The Law Auditorium stage.",
    silhouetteColor: "#EB0028",
    revealed: false
  },
  {
    id: "speaker-6",
    field: "Migration, Diaspora & Global Society",
    codename: "Speaker Drop #6",
    category: "Migration, Diaspora & Society",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating transnational thinkers, diaspora leaders, and cross-border ambassadors. Official speaker drop coming soon.",
    silhouetteColor: "#FFFFFF",
    revealed: false
  },
  {
    id: "speaker-7",
    field: "Environment & Sustainable Futures",
    codename: "Speaker Drop #7",
    category: "Environment & Sustainability",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating indigenous ecological advocates, sustainability pioneers, and climate resilience leaders.",
    silhouetteColor: "#EB0028",
    revealed: false
  },
  {
    id: "speaker-8",
    field: "Mind, Growth & Self-Mastery",
    codename: "Speaker Drop #8",
    category: "Mind, Growth & Self-Mastery",
    status: "CONFIDENTIAL REVIEW",
    curatorialNote: "Curating human potential coaches, cognitive psychologists, and transformative leaders. Official speaker drop coming soon.",
    silhouetteColor: "#FFFFFF",
    revealed: false
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: "s1",
    time: "08:15 AM - 09:00 AM",
    period: "Morning",
    title: "Red Carpet Arrival, Badge Verification & Morning Brew",
    type: "networking",
    description: "Accredited check-in at the Law Auditorium foyer, photo ops against the official TEDx media wall, and artisan breakfast.",
    location: "The Law Auditorium Foyer"
  },
  {
    id: "s2",
    time: "09:00 AM - 09:20 AM",
    period: "Morning",
    title: "Opening Ceremony & Convener Welcome Address",
    type: "keynote",
    speaker: "TEDxTopfaithUniversity Convener & Leadership",
    speakerRole: "Convener & Curatorial Board",
    description: "Setting the stage for 'TRANSCEND: Exceeding Limitations' and official TED licensing opening protocol.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s3",
    time: "09:20 AM - 10:20 AM",
    period: "Morning",
    title: "Session 1: Curated TEDx Talks (Part 1)",
    type: "talk",
    description: "High-impact TEDx talks by visionary thinkers exploring ideas that challenge assumptions and exceed limitations.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s4",
    time: "10:20 AM - 10:45 AM",
    period: "Morning",
    title: "Live Cultural Performance: The Transcend Sonic Showcase",
    type: "performance",
    description: "An inspiring live sonic showcase blending cultural rhythm and contemporary performance art.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s5",
    time: "10:45 AM - 11:40 AM",
    period: "Midday",
    title: "Session 2: Curated TEDx Talks (Part 2)",
    type: "talk",
    description: "Second block of transformative talks igniting deep discussions and bold ideas worth spreading.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s6",
    time: "11:40 AM - 12:00 PM",
    period: "Midday",
    title: "Grand Finale, Official Delegation Photo & Closing Reflections",
    type: "networking",
    description: "Curator's closing remarks, celebrating speaker reveals, certificate presentations, and executive networking.",
    location: "The Law Auditorium"
  }
];

export const VENUE_GALLERY: VenueGalleryItem[] = [
  {
    id: "v1",
    title: "The Law Auditorium Grand Arena & TED Stage",
    caption: "The majestic main auditorium and signature TED stage featuring acoustically tuned architectural tiers, elevated vantage points, and state-of-the-art audiovisual rigging.",
    category: "Auditorium",
    image: "/what_the_hall_looks_like_part3.jpeg",
    badge: "Official TED Stage"
  },
  {
    id: "v2",
    title: "Main Stage Arena Vantage",
    caption: "Sweeping view of the stage from the delegate concourse, engineered for crystal-clear presentation visibility.",
    category: "Auditorium",
    image: "/what_the_hall_looks_like.jpeg",
    badge: "Main Stage Arena"
  },
  {
    id: "v3",
    title: "Grand Lobby & Registration Foyer",
    caption: "The pristine, glass-adorned reception foyer where delegates gather for check-in, media interviews, and interactive partner pavilions.",
    category: "Lobby",
    image: "/law_auditorium_lobby.jpeg",
    badge: "Reception & Media"
  },
  {
    id: "v4",
    title: "Tiered Delegate Seating",
    caption: "Plush, high-comfort auditorium seating designed for immersive viewing and clear sightlines from every angle.",
    category: "Seating",
    image: "/what_the_hall_looks_like_part2.jpeg",
    badge: "Plush Tiered Seating"
  }
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "student-pass",
    name: "Student / Delegate Pass",
    badge: "Standard Delegate Pass",
    price: 10000,
    originalPrice: 15000,
    currency: "₦",
    description: "Official access pass for university students, young innovators, researchers, and emerging changemakers.",
    features: [
      "Access to all 3 hours of live TEDx Talks",
      "Official Digital Delegate Badge & Verified QR Code",
      "TEDxTopfaith Official Delegate Kit & Keepsakes",
      "Morning Artisan Brew & Red Carpet Photo Session",
      "Post-Event 4K Talk Vault & Certificate of Attendance"
    ],
    popular: true,
    color: "#EB0028",
    totalSeats: 170,
    spotsLeft: 170
  },
  {
    id: "vip-executive",
    name: "VIP / Executive Pass",
    badge: "Exclusive VIP Access",
    price: 25000,
    currency: "₦",
    description: "Premium VIP pass exclusively for faculty executives, corporate patrons, visionary founders, and special guests.",
    features: [
      "Front-Row VIP Reserved Seating in The Law Auditorium",
      "Access to Private VIP Speaker Lounge & Refreshments",
      "Executive Post-Event Networking with Speakers & VC",
      "Deluxe TEDxTopfaith Commemorative Keepsake Gift Box",
      "Dedicated Campus VIP Parking & Concierge Escort",
      "Special Recognition in the Official Event Brochure"
    ],
    popular: false,
    color: "#D97706",
    totalSeats: 10,
    spotsLeft: 10
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is TEDxTopfaithUniversity?",
    answer: "TEDxTopfaithUniversity is an independently organized, officially licensed TED event hosted at Topfaith University, Mkpatak on Saturday, November 21st, 2026. Guided by the theme 'TRANSCEND: Exceeding Limitations', it features a curated 3-hour power lineup (9:00 AM - 12:00 PM) of world-changing ideas.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is the event venue and what is the admission policy?",
    answer: "The event is held at The Law Auditorium, Topfaith University Campus, Mkpatak, Akwa Ibom State. Admission is strictly curated and managed under official TED university license guidelines. Registration is mandatory and passes are allocated on a first-confirmed basis.",
    category: "Event Day"
  },
  {
    id: "faq-3",
    question: "How much are tickets and what does the pass cover?",
    answer: "The Student/Delegate Pass is ₦10,000 and the VIP/Executive Pass is ₦25,000. Both passes provide full live access to all talks, the official delegate kit, morning refreshments, verified attendance certificate, and media assets.",
    category: "Tickets"
  },
  {
    id: "faq-4",
    question: "When will the official speakers be revealed?",
    answer: "Speaker announcements are currently in the curatorial review phase and will be unveiled in upcoming weekly drops. You can register now or subscribe to be the first to receive speaker drop notifications.",
    category: "Speakers"
  },
  {
    id: "faq-5",
    question: "Who is producing and consulting for this event?",
    answer: "TEDxTopfaithUniversity is produced in strategic partnership with The Centrestage Company as our Global Consultant & Producer, hosted on the prestigious campus of Topfaith University.",
    category: "General"
  }
];

export const PARTNERS_DATA = {
  host: {
    name: "Topfaith University",
    title: "Host Institution & Title Sponsor",
    logo: "/logo.png",
    url: "https://topfaith.edu.ng",
    description: "A premier private university fostering academic excellence, character building, research innovation, and global competitiveness."
  },
  producer: {
    name: "The Centrestage Company",
    title: "Global Consultant & Producer",
    logo: "/the_centrestage_company_logo.jpg",
    url: "https://thecentrestagecompany.com",
    description: "World-class live event producers, branding strategists, and executive experience architects consulting for landmark global gatherings."
  }
};
