import type { SpeakerTeaser, ScheduleItem, ThemePillar, VenueGalleryItem, TicketTier, FAQItem } from '../types';

export const EVENT_DETAILS = {
  name: "TEDxTopfaithUniversity",
  subName: "Topfaith University",
  theme: "TRANSCEND",
  tagline: "Moving Local to Global",
  fullTheme: "TRANSCEND: Moving Local to Global",
  description: "Bridging indigenous ingenuity with global relevance. An intense, high-impact gathering of fearless innovators, researchers, artists, and student catalysts igniting ideas that transcend geographical and intellectual boundaries.",
  date: "November 21, 2026",
  dateFormatted: "Saturday, November 21st, 2026",
  time: "09:00 AM - 12:00 PM (WAT)",
  durationText: "3 Hours of Pure Transformation",
  isoDate: "2026-11-21T09:00:00+01:00",
  venue: {
    name: "The Law Auditorium",
    institution: "Topfaith University",
    city: "Mkpatak, Akwa Ibom State",
    country: "Nigeria",
    hallCapacity: "200 Exclusive Seats",
    address: "Topfaith University Campus, Mkpatak, Essien Udim LGA, Akwa Ibom State",
    mapsUrl: "https://maps.google.com/?q=Topfaith+University+Nigeria",
    websiteUrl: "https://topfaith.edu.ng"
  },
  stats: [
    { value: "200", label: "Exclusive Seats", suffix: "" },
    { value: "3", label: "Hours of Power (9AM - 12PM)", suffix: "h" },
    { value: "Nov 21", label: "Event Date 2026", suffix: "" },
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
    id: "grassroots-ai",
    title: "Grassroots Tech & Frontier AI",
    subtitle: "Solving local realities with world-class engineering",
    description: "Unleashing African artificial intelligence, indigenous language computation, and decentralized systems designed from local constraints that scale into global technology infrastructure.",
    iconName: "Cpu",
    accentColor: "#EB0028",
    gradient: "linear-gradient(135deg, rgba(235, 0, 40, 0.25) 0%, rgba(20, 10, 15, 0.95) 100%)",
    borderGlow: "rgba(235, 0, 40, 0.5)",
    tags: ["Decentralized AI", "African Multimodal LLMs", "Grassroots Robotics"],
    metrics: "Local Roots &bull; Global Scale"
  },
  {
    id: "creative-renaissance",
    title: "Afro-Futurism & Creative Exports",
    subtitle: "Amplifying authentic African narratives globally",
    description: "How our music, spatial audio, digital visual arts, and transmedia literature are commanding the world stage without losing an ounce of indigenous soul.",
    iconName: "Sparkles",
    accentColor: "#FF3366",
    gradient: "linear-gradient(135deg, rgba(255, 51, 102, 0.25) 0%, rgba(25, 10, 20, 0.95) 100%)",
    borderGlow: "rgba(255, 51, 102, 0.5)",
    tags: ["Creative Economy", "Spatial Sound", "Global Galleries"],
    metrics: "Authentic &bull; Borderless"
  },
  {
    id: "bio-mimicry-climate",
    title: "Bio-Engineering & Ecological Wisdom",
    subtitle: "Planetary climate answers from ancient systems",
    description: "Re-imagining sustainable urbanization, zero-electricity architecture, and agricultural biotechnology developed from native soil biology for planetary survival.",
    iconName: "Globe",
    accentColor: "#00E676",
    gradient: "linear-gradient(135deg, rgba(0, 230, 118, 0.2) 0%, rgba(10, 25, 15, 0.95) 100%)",
    borderGlow: "rgba(0, 230, 118, 0.5)",
    tags: ["Bio-polymers", "Passive Cooling", "Circular Economy"],
    metrics: "Planetary Impact"
  },
  {
    id: "disruptive-youth-leadership",
    title: "Youth Audacity & Global Governance",
    subtitle: "Shattering ceilings from within university walls",
    description: "Equipping young leaders with radical problem-solving agility, venture building tenacity, and international diplomatic acumen to influence multinational policy.",
    iconName: "Zap",
    accentColor: "#FFAB00",
    gradient: "linear-gradient(135deg, rgba(255, 171, 0, 0.22) 0%, rgba(25, 20, 10, 0.95) 100%)",
    borderGlow: "rgba(255, 171, 0, 0.5)",
    tags: ["Venture Building", "Youth Policy", "Global Mindset"],
    metrics: "Unstoppable Force"
  }
];

export const SPEAKER_TEASERS: SpeakerTeaser[] = [
  {
    id: "speaker-1",
    field: "Frontier Artificial Intelligence & Dialects",
    codename: "The Language Pioneer",
    category: "Tech & AI",
    teaserQuote: "When machines understand our 2,000+ African dialects, the architecture of global thought transforms forever.",
    hint: "Pioneering neuromorphic researcher connecting African oral histories to global neural networks.",
    silhouetteColor: "#EB0028",
    revealed: false
  },
  {
    id: "speaker-2",
    field: "Venture Architecture & Cross-Border Capital",
    codename: "The Market Catalyst",
    category: "Global Leadership",
    teaserQuote: "If your solution works in rural Africa, it possesses the antifragility to conquer London and Tokyo.",
    hint: "Serial tech founder turned VC backing high-growth pan-African companies scaling internationally.",
    silhouetteColor: "#FFAB00",
    revealed: false
  },
  {
    id: "speaker-3",
    field: "Bio-Mimetic Architecture & Energy",
    codename: "The Ecological Architect",
    category: "Science & Health",
    teaserQuote: "Nature had a billion-year head start on thermodynamic engineering. We just need the humility to study it.",
    hint: "Renowned researcher in zero-electricity passive cooling systems inspired by tropical biology.",
    silhouetteColor: "#00E676",
    revealed: false
  },
  {
    id: "speaker-4",
    field: "Spatial Art, XR & Global Storytelling",
    codename: "The Afro-Futurist",
    category: "Creative Arts",
    teaserQuote: "Our heritage was never a museum artifact; it is living software updating the global imagination.",
    hint: "Internationally exhibited transmedia artist featured across leading global biennial showcases.",
    silhouetteColor: "#FF3366",
    revealed: false
  },
  {
    id: "speaker-5",
    field: "Autonomous Drone Robotics & Logistics",
    codename: "The Student Prodigy",
    category: "Student Innovator",
    teaserQuote: "The sky above our campus is not a ceiling—it is a runway to the entire world.",
    hint: "Topfaith student engineer developing autonomous lightweight fixed-wing UAVs for medical transport.",
    silhouetteColor: "#3B82F6",
    revealed: false
  },
  {
    id: "speaker-6",
    field: "Sentinel Genomics & Decentralized Medicine",
    codename: "The Health Defender",
    category: "Science & Health",
    teaserQuote: "Global biosecurity is only as strong as the most remote village clinic.",
    hint: "Advancing portable gene sequencers predicting emerging global mutations in real-time.",
    silhouetteColor: "#A855F7",
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
    description: "Setting the stage for 'TRANSCEND: Moving Local to Global' and official TED licensing opening protocol.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s3",
    time: "09:20 AM - 10:20 AM",
    period: "Morning",
    title: "Session 1: The Frontier of Grassroots Brilliance",
    type: "talk",
    description: "Back-to-back presentations exploring localized multimodal AI, autonomous drone systems, and native ecological materials.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s4",
    time: "10:20 AM - 10:45 AM",
    period: "Morning",
    title: "Live Cultural Performance: The Transcend Sonic Showcase",
    type: "performance",
    description: "An awe-inspiring live sonic blend of traditional African percussion and modern synthesizer acoustics.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s5",
    time: "10:45 AM - 11:40 AM",
    period: "Midday",
    title: "Session 2: Shattering Borders — Venture, Art & Global Influence",
    type: "talk",
    description: "Masterclasses on taking African startups to global venture dominance and spatial XR art on international stages.",
    location: "Main Stage - The Law Auditorium"
  },
  {
    id: "s6",
    time: "11:40 AM - 12:00 PM",
    period: "Midday",
    title: "Grand Finale, Official Delegation Photo & Closing Reflections",
    type: "networking",
    description: "Curator's closing remarks, celebrating speaker unveils, certificate presentation, and executive networking.",
    location: "The Law Auditorium"
  }
];

export const VENUE_GALLERY: VenueGalleryItem[] = [
  {
    id: "v1",
    title: "The Law Auditorium Grand Arena",
    caption: "The majestic main auditorium featuring acoustically tuned architectural tiers, sweeping stage visibility, and state-of-the-art audiovisual rigging.",
    category: "Auditorium",
    image: "/what_the_hall_looks_like.jpeg",
    badge: "Main Stage (200 Seats)"
  },
  {
    id: "v2",
    title: "Grand Lobby & Registration Foyer",
    caption: "The pristine, glass-adorned reception foyer where delegates gather for check-in, media interviews, and interactive partner pavilions.",
    category: "Lobby",
    image: "/law_auditorium_lobby.jpeg",
    badge: "Reception & Media"
  },
  {
    id: "v3",
    title: "Tiered Delegate Seating",
    caption: "Plush, high-comfort auditorium seating designed for immersive viewing and clear sightlines from every angle.",
    category: "Seating",
    image: "/what_the_hall_looks_like_part2.jpeg",
    badge: "Exclusive 200 Capacity"
  },
  {
    id: "v4",
    title: "Panoramic Production Deck",
    caption: "Elevated vantage point housing 4K broadcast cameras, live audio capture, and multi-angle broadcast consoles.",
    category: "Stage",
    image: "/what_the_hall_looks_like_part3.jpeg",
    badge: "Broadcast Deck"
  }
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "student-pass",
    name: "Student / Delegate Pass",
    badge: "Strictly 170 Seats",
    price: 10000,
    originalPrice: 15000,
    currency: "₦",
    description: "Standard access pass for university students, young innovators, researchers, and emerging changemakers.",
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
    badge: "Exclusive 10 Seats Only",
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
    answer: "TEDxTopfaithUniversity is an independently organized, officially licensed TED event hosted at Topfaith University, Mkpatak on Saturday, November 21st, 2026. Guided by the theme 'TRANSCEND: Moving Local to Global', it features a curated 3-hour power lineup (9:00 AM - 12:00 PM) of world-changing ideas.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is the event venue and what is the seating capacity?",
    answer: "The event is held at The Law Auditorium, Topfaith University Campus, Mkpatak, Akwa Ibom State. Seating is strictly capped at 200 seats (170 Delegate seats and 10 VIP/Executive seats) in strict accordance with TED quota guidelines.",
    category: "Event Day"
  },
  {
    id: "faq-3",
    question: "How much are tickets and what does the pass cover?",
    answer: "The Student/Delegate Pass is ₦10,000 (170 seats available) and the VIP/Executive Pass is ₦25,000 (strictly 10 seats). Both passes provide full live access to all talks, the official delegate kit, morning refreshments, verified attendance certificate, and media assets.",
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
    description: "World-class live event producers, branding strategists, and executive experience architects consulting for landmark global gatherings."
  }
};
