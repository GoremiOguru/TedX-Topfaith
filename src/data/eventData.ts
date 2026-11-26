import type { ScheduleItem, VenueGalleryItem, FAQItem } from '../types';

// Official TEDxTopfaithUniversity 2026 Free Registration Google Form URL
export const REGISTRATION_FORM_URL = 'https://forms.gle/soW6UQZSsDRbfR7S7';

export const EVENT_DETAILS = {
  name: "TEDxTopfaithUniversity",
  subName: "Topfaith University",
  theme: "TRANSCEND",
  tagline: "Exceeding Limitations",
  fullTheme: "TRANSCEND: Exceeding Limitations",
  description: "An intense, high-impact gathering of bold thinkers, innovators, creators, and student catalysts exceeding limitations and sharing ideas worth spreading at Topfaith University.",
  date: "Saturday December 5, 2026",
  dateFormatted: "Saturday, December 5th, 2026",
  time: "09:00 AM - 12:00 PM (WAT)",
  durationText: "3 Hours of Pure Transformation",
  isoDate: "2026-12-05T09:00:00+01:00",
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
    { value: "Sat, Dec 5", label: "Event Date 2026", suffix: "" },
    { value: "100%", label: "Ideas Worth Spreading", suffix: "" }
  ],
  socials: {
    tiktok: "https://tiktok.com/@tedxtopfaithuniversity",
    instagram: "https://www.instagram.com/tedxtopfaithuniversity?stkn=MTh6a2tienEyY3luYw==",
    twitter: "https://x.com/TEDxTopfaithUni",
    linkedin: "https://linkedin.com/company/tedxtopfaithuni",
    youtube: "https://youtube.com/@tedx"
  }
};

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

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is TEDxTopfaithUniversity?",
    answer: "TEDxTopfaithUniversity is an independently organized, officially licensed TED event hosted at Topfaith University, Mkpatak on Saturday, December 5th, 2026. Guided by the theme 'TRANSCEND: Exceeding Limitations', it features a curated 3-hour power lineup (9:00 AM - 12:00 PM) of world-changing ideas.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is the event venue and what is the admission policy?",
    answer: "The event is held at The Law Auditorium, Topfaith University Campus, Mkpatak, Akwa Ibom State. Admission is managed under official TED university license guidelines. Advance online registration is mandatory and seats are allocated on a first-registered basis.",
    category: "Event Day"
  },
  {
    id: "faq-3",
    question: "Is admission free and how do I register?",
    answer: "Yes! Admission to TEDxTopfaithUniversity 2026 is completely free — no tickets are being sold. However, all attendees must complete the official online registration form ahead of the event so our volunteers can confirm your seat at The Law Auditorium check-in desk.",
    category: "Registration"
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
    answer: "TEDxTopfaithUniversity is produced in strategic partnership with The CentreStage Company as our Global Consultant & Producer, hosted on the prestigious campus of Topfaith University.",
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
    name: "The CentreStage Company",
    title: "Global Consultant & Producer",
    logo: "/the_centrestage_company_logo.jpg",
    url: "https://thecentrestagehq.com",
    description: "World-class live event producers, branding strategists, and executive experience architects consulting for landmark global gatherings."
  }
};
