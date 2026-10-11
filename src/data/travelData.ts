import {
  Traveler,
  LocationDetail,
  TimelineItem,
  NavigationStep,
  EventScenario,
  ExpenseItem,
  ChecklistItem
} from '../types/travel';
import gatewayImg from '../assets/images/mumbai_gateway_heritage_1791711885540.jpg';
import csmtImg from '../assets/images/csmt_heritage_terminus_1791711905743.jpg';
import marineDriveImg from '../assets/images/marine_drive_promenade_1791711920429.jpg';

export const TRAVELERS: Traveler[] = [
  { id: '1', name: 'Aswin R', role: 'Trip Coordinator & Student', initials: 'AR' },
  { id: '2', name: 'Dinesh Karthik R', role: 'Finance & Navigation', initials: 'DK' },
  { id: '3', name: 'Bhavananthan M', role: 'Luggage & Logistics Lead', initials: 'BM' },
  { id: '4', name: 'Priyadharshini P', role: 'Event Prep & Schedule', initials: 'PP' }
];

export const IMAGES = {
  gateway: gatewayImg,
  csmt: csmtImg,
  marineDrive: marineDriveImg
};

export const LOCATIONS: Record<string, LocationDetail> = {
  csmt: {
    name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)',
    category: 'station',
    address: 'Chhatrapati Shivaji Maharaj Terminus, Fort, Mumbai, Maharashtra 400001',
    area: 'Fort / South Mumbai',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai',
    timingNotes: 'Open 24/7. Cloak Room located near Platform 1 concourse.',
    imageUrl: IMAGES.csmt,
    description: 'UNESCO World Heritage Victorian Gothic railway masterpiece, the main railway terminus of Central Railway.',
    mustKnowTips: [
      'Official Railway Cloakroom is on the Platform 1 side next to the parcel booking office.',
      'To use the Cloakroom, every suitcase MUST have a working padlock or mechanical lock.',
      'Keep your train arrival and return tickets handy for Cloakroom entry verification.',
      'Black and yellow (Kaali-Peeli) taxi stand is right outside the main concourse exit.'
    ]
  },
  treeboHotel: {
    name: 'Treebo Empire Suite',
    category: 'hotel',
    address: 'Room 802, 8th Floor, Balaji Business Park, near Times Square, Andheri-Kurla Road, Mumbai 400059',
    area: 'Marol / Andheri East',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Treebo+Empire+Suite+Balaji+Business+Park+Andheri+Kurla+Road+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Treebo+Empire+Suite+Balaji+Business+Park+Andheri+Kurla+Road+Mumbai',
    timingNotes: 'Standard Check-in: 12:00 PM / 1:00 PM. Check-out: 11:00 AM.',
    description: 'Boutique hotel accommodation located on the 8th floor of Balaji Business Park commercial complex.',
    mustKnowTips: [
      'Located inside Balaji Business Park commercial building. Take the elevator to the 8th floor.',
      'Only 180 meters (2-3 minute walk) to Marol Naka Metro Station entrance.',
      'Free front desk luggage storage is standard for guests before check-in and post-checkout.',
      'Auto-rickshaws are legally allowed in this area (unlike South Mumbai).'
    ]
  },
  marolMetro: {
    name: 'Marol Naka Metro Station',
    category: 'station',
    address: 'Andheri-Kurla Road, Bori Colony, Marol, Andheri East, Mumbai 400059',
    area: 'Marol / Andheri East',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marol+Naka+Metro+Station+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Marol+Naka+Metro+Station+Mumbai',
    timingNotes: 'Operational 05:30 AM - 11:45 PM daily.',
    description: 'Major metro station servicing Line 1 (Versova-Andheri-Ghatkopar) and interchange for Line 3 (Aqua Line).',
    mustKnowTips: [
      'Just a 2-minute walk from hotel entrance at Balaji Business Park.',
      'Line 1 connects directly to Ghatkopar (for Central suburban local train to CSMT) and Andheri (for Western line).',
      'Fare from Marol Naka to Ghatkopar is ₹20 per person.'
    ]
  },
  grandHyatt: {
    name: 'Grand Hyatt Mumbai Hotel & Residences',
    category: 'venue',
    address: 'Bandra Kurla Complex Vicinity, Off Western Express Highway, Santacruz East, Mumbai 400055',
    area: 'Santacruz East / BKC Vicinity',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Hyatt+Mumbai+Hotel+Residences+Santacruz+East',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Hyatt+Mumbai+Hotel+Residences+Santacruz+East',
    timingNotes: 'Event begins at 9:00 AM sharp on 15 October 2026. Target arrival 8:30 AM.',
    description: '5-star luxury convention venue hosting Sahamati Financial Services Innovation Challenge 2026 (SamvAAd 2026).',
    mustKnowTips: [
      'Travel time from Treebo Empire Suite is approximately 25-35 minutes by cab (6.5 km).',
      'The venue features a 24/7 Bell Desk / Concierge where conference attendees can deposit suitcases.',
      'Directly adjacent to Santacruz-Chembur Link Road (SCLR) and Western Express Highway for fast exit to CSMT.'
    ]
  },
  gatewayOfIndia: {
    name: 'Gateway of India & The Taj Mahal Palace',
    category: 'attraction',
    address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001',
    area: 'Colaba / South Mumbai',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai',
    approxVisitMinutes: 60,
    imageUrl: IMAGES.gateway,
    description: 'Iconic 20th-century basalt arch overlooking the Arabian Sea, standing opposite the historic Taj Mahal Palace hotel.',
    mustKnowTips: [
      'Entry to the promenade is free; security bag checks at metal detectors.',
      'Best view of the Taj Mahal Palace hotel is directly from the plaza.',
      'Distance from CSMT: 2.3 km (approx 10-15 mins by taxi, ₹60-₹80 for 4 people).'
    ]
  },
  marineDrive: {
    name: "Marine Drive (Queen's Necklace)",
    category: 'attraction',
    address: 'Netaji Subhash Chandra Bose Road, Churchgate to Nariman Point, Mumbai 400020',
    area: 'Marine Lines / Churchgate',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marine+Drive+Promenade+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Marine+Drive+Promenade+Mumbai',
    approxVisitMinutes: 60,
    imageUrl: IMAGES.marineDrive,
    description: 'Curving 3.6 km seaside promenade known for its sea breeze, Art Deco architecture, and stunning evening sunset.',
    mustKnowTips: [
      'Sunset in October is around 6:05 PM - 6:15 PM. Best time to sit on the promenade tetrapods.',
      'Distance from Gateway of India: ~2.5 km (10-12 mins by cab via Veer Nariman Rd).',
      'Distance back to CSMT: ~2.2 km (8-10 mins by cab, ₹60-₹75 for 4 people).'
    ]
  },
  juhuBeach: {
    name: 'Juhu Beach',
    category: 'attraction',
    address: 'Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049',
    area: 'Juhu / Western Suburbs',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Juhu+Beach+Mumbai',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Juhu+Beach+Mumbai',
    approxVisitMinutes: 45,
    description: 'Famous wide suburban beach known for Mumbai street food like Pav Bhaji and Bhel Puri.',
    mustKnowTips: [
      'Located in Western Suburbs (26 km north of South Mumbai, 10 km west of hotel).',
      'NOT recommended on Day 1 (14 Oct) because it would add 2 hours of heavy suburban traffic.',
      'Can be evaluated only if Oct 15 event finishes early before proceeding to CSMT.'
    ]
  }
};

export const LUGGAGE_PLANS = [
  {
    id: 'plan_b',
    title: 'Plan B: CSMT Cloakroom (STRONGLY RECOMMENDED)',
    subtitle: 'Store 4 suitcases at CSMT right on arrival, explore South Mumbai unburdened, collect bags in evening.',
    recommended: true,
    totalTravelTimeMinutes: 85,
    totalRoadDistanceKm: 32,
    numTransfers: 1,
    costPerPerson: 105,
    costGroup: 420,
    attractionsPossible: 3,
    hotelArrivalTime: '08:45 PM',
    riskLevel: 'Low',
    securityScore: 'High (Official Indian Railways locked cloakroom)',
    pros: [
      'Eliminates ~56 km of round-trip travel between South Mumbai and Andheri East.',
      'Saves 3 full hours of sitting in traffic on Day 1.',
      'CSMT Cloakroom is open 24/7 and costs only ₹30/bag for 24h (₹120 total for 4 bags).',
      'Explore CSMT, Gateway of India, and Marine Drive unhurried during daylight and sunset.'
    ],
    cons: [
      'Suitcases MUST have working locks/padlocks (strict Indian Railways rule).',
      'Need to collect bags at CSMT before final cab/metro to Marol hotel.'
    ],
    breakdown: 'Drop luggage at CSMT (12:45-1:00 PM) -> Explore South Mumbai -> Pick luggage (7:15 PM) -> Taxi directly to hotel in Marol (arriving 8:45 PM).'
  },
  {
    id: 'plan_a',
    title: 'Plan A: Hotel First (Marol Detour)',
    subtitle: 'CSMT -> Cab to Treebo Hotel in Marol -> Check in -> Cab back to South Mumbai -> Explore -> Cab back to Marol.',
    recommended: false,
    totalTravelTimeMinutes: 240,
    totalRoadDistanceKm: 86,
    numTransfers: 3,
    costPerPerson: 360,
    costGroup: 1440,
    attractionsPossible: 1,
    hotelArrivalTime: '09:30 PM',
    riskLevel: 'High',
    securityScore: 'High (Bags in hotel room)',
    pros: [
      'Suitcases are safely in your hotel room immediately.'
    ],
    cons: [
      'Travels CSMT -> Marol (28 km), Marol -> Colaba (28 km), Colaba -> Marol (30 km) = 86 km in Mumbai traffic!',
      'Wastes 3.5 to 4 hours inside cabs or suburban trains.',
      'Reaching South Mumbai by 4:30 PM leaves almost no daylight for sightseeing.',
      'Students will be exhausted before the big innovation challenge the next day.'
    ],
    breakdown: 'Arrive CSMT 12:30 PM -> Reach Hotel Marol 2:15 PM -> Freshen up 3:00 PM -> Travel back to South Mumbai 4:45 PM -> Rushed 1-hour visit -> Return cab to Marol.'
  },
  {
    id: 'plan_c',
    title: 'Plan C: Hotel Direct & North Mumbai Evening',
    subtitle: 'CSMT -> Direct to Hotel Marol -> Rest & Prep -> Evening at Juhu Beach / Bandra Bandstand near hotel.',
    recommended: false,
    totalTravelTimeMinutes: 90,
    totalRoadDistanceKm: 38,
    numTransfers: 1,
    costPerPerson: 160,
    costGroup: 640,
    attractionsPossible: 2,
    hotelArrivalTime: '03:15 PM',
    riskLevel: 'Very Low',
    securityScore: 'High',
    pros: [
      'Maximum rest before the Sahamati Innovation Challenge.',
      'Allows team to practice pitch in Room 802 with zero time pressure.',
      'Great backup plan if outbound train is delayed by more than 2 hours.'
    ],
    cons: [
      'Skips Gateway of India and South Mumbai heritage icons on Day 1.'
    ],
    breakdown: 'Arrive CSMT -> Lunch -> Cab with bags to Hotel Marol (check in 3:15 PM) -> Relax & prep -> Evening 6:00 PM auto to Juhu Beach (8 km) -> Dinner in Andheri.'
  }
];

export const TIMELINE_RECOMMENDED: TimelineItem[] = [
  {
    id: 'rec_1',
    version: 'recommended',
    day: 'day1',
    time: '12:30 PM - 12:50 PM',
    title: 'Arrival at CSMT & Station Exit',
    location: 'CSMT Platform Concourse',
    duration: '20 mins',
    type: 'train',
    description: 'De-board train 22160 (MAS CSMT SF Express). Restrooms available at Platform 1 concourse.',
    keyInstructions: [
      'Check coach berths and overhead racks for all 4 suitcases and personal belongings.',
      'Walk along the platform toward the main heritage concourse (Platform 1 side).',
      'Use the executive lounge restrooms or station concourse restrooms to freshen up.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=CSMT+Railway+Station+Mumbai',
    skippable: false,
    priorityOrder: 1
  },
  {
    id: 'rec_2',
    version: 'recommended',
    day: 'day1',
    time: '12:50 PM - 01:15 PM',
    title: 'Deposit 4 Suitcases at CSMT Cloakroom',
    location: 'CSMT Official Cloak Room (Platform 1 / Parcel Office)',
    duration: '25 mins',
    type: 'luggage',
    description: 'Store all 4 suitcases securely so you can freely explore South Mumbai on foot and in small cabs.',
    keyInstructions: [
      'RULE CHECK: Ensure every suitcase has a padlock / combination lock firmly locked.',
      'Show your inbound train ticket (22160) or return ticket (22157) and valid Govt IDs.',
      'Pay approx ₹30 per bag for 24 hours (₹120 total). Collect and safely photograph the paper receipt token!'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=CSMT+Railway+Cloak+Room+Mumbai',
    approxCostGroup: 120,
    importantWarning: 'Suitcases without a physical lock will be refused by Indian Railways cloakroom staff.',
    skippable: false,
    priorityOrder: 2
  },
  {
    id: 'rec_3',
    version: 'recommended',
    day: 'day1',
    time: '01:15 PM - 02:15 PM',
    title: 'Lunch in Fort / Ballard Estate',
    location: 'Fort / Ballard Estate Heritage Dining',
    duration: '60 mins',
    type: 'food',
    description: 'Walk 500m to Fort heritage quarter for authentic lunch (Pancham Puriwala, Jimmy Boy Parsi Cafe, or Copper Chimney).',
    keyInstructions: [
      'Option 1 (Budget classic): Pancham Puriwala (opposite CSMT, 150m away) - famous puri thalis (~₹120/person).',
      'Option 2 (Parsi experience): Jimmy Boy or Britannia & Co at Ballard Estate (5-min walk).',
      'Hydrate well and discuss the afternoon plan.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Pancham+Puriwala+Fort+Mumbai',
    approxCostGroup: 600,
    skippable: false,
    priorityOrder: 3
  },
  {
    id: 'rec_4',
    version: 'recommended',
    day: 'day1',
    time: '02:15 PM - 02:45 PM',
    title: 'CSMT Heritage Building Exterior & Subway Photo Point',
    location: 'CSMT Heritage Facade & Bhatia Baug',
    duration: '30 mins',
    type: 'sightseeing',
    description: 'Marvel at the UNESCO World Heritage Gothic Revival architecture without traveling an extra kilometer.',
    keyInstructions: [
      'Take the pedestrian subway to the opposite pavement (Bhatia Baug side) for the best wide-angle photo.',
      'Notice the stone gargoyles, stained glass windows, and grand central dome topped with the statue of Progress.',
      'Takes zero travel time because you are already at CSMT!'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai',
    skippable: false,
    priorityOrder: 4
  },
  {
    id: 'rec_5',
    version: 'recommended',
    day: 'day1',
    time: '02:45 PM - 04:15 PM',
    title: 'Gateway of India & The Taj Mahal Palace',
    location: 'Apollo Bandar, Colaba',
    duration: '90 mins',
    type: 'sightseeing',
    description: 'Take a short 10-min Kaali-Peeli taxi to Apollo Bandar. Walk the sea-facing promenade and admire the Taj Mahal Palace.',
    keyInstructions: [
      'Hail a metered Kaali-Peeli taxi from CSMT taxi stand directly to Gateway of India (₹60-₹80 by meter for 4 people).',
      'Pass through the quick security check at the promenade entrance.',
      'Great photo spots: facing the Gateway arch with the Arabian sea and harbor ferries, and facing the grand Taj facade.',
      'Optional 15-min walk down Colaba Causeway for street souvenirs or Leopold Cafe cold drink.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Gateway+of+India+Mumbai&travelmode=driving',
    approxCostGroup: 80,
    skippable: false,
    priorityOrder: 5
  },
  {
    id: 'rec_6',
    version: 'recommended',
    day: 'day1',
    time: '04:30 PM - 06:15 PM',
    title: "Marine Drive Sunset Promenade (Queen's Necklace)",
    location: 'Marine Drive / Churchgate',
    duration: '105 mins',
    type: 'sightseeing',
    description: 'Short taxi ride across to Marine Drive. Sit on the promenade tetrapods, enjoy sea breeze, sunset, and street snacks.',
    keyInstructions: [
      'Take a taxi from Colaba to Marine Drive Promenade near Pizza By The Bay / Churchgate (approx 10-12 mins, ₹70-₹90).',
      'Sunset occurs around 6:05 PM. Watch the sky turn golden-pink over the Arabian Sea.',
      'Enjoy cutting chai, roasted bhutta (corn), or street kulfi from verified vendors.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Gateway+of+India+Mumbai&destination=Marine+Drive+Promenade+Mumbai&travelmode=driving',
    approxCostGroup: 90,
    skippable: false,
    priorityOrder: 6
  },
  {
    id: 'rec_7',
    version: 'recommended',
    day: 'day1',
    time: '06:30 PM - 07:15 PM',
    title: 'Taxi Back to CSMT & Luggage Retrieval',
    location: 'CSMT Railway Cloak Room',
    duration: '45 mins',
    type: 'luggage',
    description: 'Take a quick taxi from Marine Drive back to CSMT (2.2 km, 10 mins). Present your tokens and collect all 4 suitcases.',
    keyInstructions: [
      'Board a taxi from Marine Drive to CSMT (approx ₹60-₹80).',
      'Present your cloakroom receipt tokens and inspect that all 4 suitcases are intact with locks unbroken.',
      'Quick restroom stop before departing South Mumbai.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Marine+Drive+Mumbai&destination=CSMT+Railway+Station+Mumbai&travelmode=driving',
    approxCostGroup: 80,
    importantWarning: 'CRITICAL LUGGAGE CHECK: Make sure all 4 suitcases and all personal bags are accounted for.',
    skippable: false,
    priorityOrder: 7
  },
  {
    id: 'rec_8',
    version: 'recommended',
    day: 'day1',
    time: '07:30 PM - 08:45 PM',
    title: 'Transit to Treebo Empire Suite (Marol / Andheri East)',
    location: 'Transit from CSMT to Marol Naka',
    duration: '75 mins',
    type: 'transit',
    description: 'Travel from CSMT to Treebo Empire Suite in Marol with 4 suitcases.',
    keyInstructions: [
      'OPTION 1 (RECOMMENDED WITH 4 SUITCASES): Book an Uber XL / Ola Prime SUV or Kaali-Peeli taxi with boot space via Eastern Freeway. Fare: ~₹550-₹700 total (₹140-₹175 per person). Door-to-door comfort without dragging heavy bags on trains.',
      'OPTION 2 (ULTRA-BUDGET PUBLIC TRANSIT): Central Line Fast Local train from CSMT to Ghatkopar (30 mins, ₹10/person), then interchange to Metro Line 1 from Ghatkopar to Marol Naka (12 mins, ₹20/person). Total fare: ₹30/person (₹120 total). Note: Carrying 4 suitcases during evening peak hours on local trains can be crowded.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Treebo+Empire+Suite+Balaji+Business+Park+Mumbai&travelmode=driving',
    approxCostGroup: 650,
    skippable: false,
    priorityOrder: 8
  },
  {
    id: 'rec_9',
    version: 'recommended',
    day: 'day1',
    time: '08:45 PM - 09:30 PM',
    title: 'Hotel Check-in & Freshen Up',
    location: 'Treebo Empire Suite, Room 802, Balaji Business Park',
    duration: '45 mins',
    type: 'hotel',
    description: 'Arrive at Balaji Business Park, take elevator to 8th floor, complete check-in for Room 802, unpack suits/formal wear.',
    keyInstructions: [
      'Show booking voucher and Govt ID cards for all 4 students at reception.',
      'Confirm breakfast timings for the next morning (need to depart by 7:45 AM).',
      'Hang formal clothing for the Sahamati challenge presentation.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Treebo+Empire+Suite+Balaji+Business+Park+Andheri+Kurla+Road+Mumbai',
    skippable: false,
    priorityOrder: 9
  },
  {
    id: 'rec_10',
    version: 'recommended',
    day: 'day1',
    time: '09:30 PM - 10:45 PM',
    title: 'Dinner & Final Event Prep',
    location: 'Marol Naka / Andheri East Dining',
    duration: '75 mins',
    type: 'food',
    description: 'Casual dinner near hotel (many vegetarian and South Indian / North Indian options along Andheri-Kurla Road).',
    keyInstructions: [
      'Dine at nearby options: Peninsula Restaurant, Shiv Sagar Marol, or Sarovar veg restaurant within 300m walk.',
      'Review presentation slides and project demo for Sahamati Financial Innovation Challenge.',
      'Target sleep by 11:15 PM to wake up refreshed at 6:30 AM.'
    ],
    approxCostGroup: 750,
    skippable: false,
    priorityOrder: 10
  }
];

export const TIMELINE_DELAYED: TimelineItem[] = [
  {
    id: 'del_1',
    version: 'delayed',
    day: 'day1',
    time: '01:45 PM - 02:15 PM',
    title: 'Delayed Arrival (60-90m contingency) & Station Exit',
    location: 'CSMT Platform Concourse',
    duration: '30 mins',
    type: 'train',
    description: 'Arrive at CSMT following train delay. Fast exit to keep the day on track.',
    keyInstructions: [
      'Quick head count and collect all 4 suitcases.',
      'Head straight to Cloak Room at Platform 1.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=CSMT+Mumbai',
    skippable: false,
    priorityOrder: 1
  },
  {
    id: 'del_2',
    version: 'delayed',
    day: 'day1',
    time: '02:15 PM - 02:35 PM',
    title: 'Fast Cloakroom Deposit at CSMT',
    location: 'CSMT Cloak Room',
    duration: '20 mins',
    type: 'luggage',
    description: 'Expedite bag drop (locked suitcases, show tickets, pay ₹120).',
    keyInstructions: ['Must have padlocks ready. Keep receipt safe.'],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=CSMT+Cloak+Room+Mumbai',
    approxCostGroup: 120,
    skippable: false,
    priorityOrder: 2
  },
  {
    id: 'del_3',
    version: 'delayed',
    day: 'day1',
    time: '02:35 PM - 03:15 PM',
    title: 'Quick Station Lunch & CSMT Facade Photo',
    location: 'Opposite CSMT (Pancham Puriwala / Cafe)',
    duration: '40 mins',
    type: 'food',
    description: 'Skip extended Fort walking tour; have a quick hearty lunch right across the street and snap the CSMT heritage photo.',
    keyInstructions: [
      'Eat quick thali at Pancham Puriwala (100m from station subway).',
      'Snap group photo with the grand CSMT Gothic dome in background.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Pancham+Puriwala+Fort+Mumbai',
    approxCostGroup: 550,
    skippable: false,
    priorityOrder: 3
  },
  {
    id: 'del_4',
    version: 'delayed',
    day: 'day1',
    time: '03:30 PM - 04:45 PM',
    title: 'Gateway of India & The Taj Mahal Palace',
    location: 'Apollo Bandar, Colaba',
    duration: '75 mins',
    type: 'sightseeing',
    description: 'Taxi from CSMT directly to Gateway of India (12 mins). Admire the monument and harbor.',
    keyInstructions: [
      'Cab directly to Gateway of India (₹70).',
      'Spend 45 mins taking photos at Gateway and the Taj Mahal Palace.',
      'Skip Colaba Causeway shopping to preserve time for Marine Drive.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Gateway+of+India+Mumbai&travelmode=driving',
    approxCostGroup: 80,
    skippable: false,
    priorityOrder: 4
  },
  {
    id: 'del_5',
    version: 'delayed',
    day: 'day1',
    time: '05:00 PM - 06:15 PM',
    title: "Marine Drive Sunset Promenade",
    location: 'Marine Drive / Churchgate',
    duration: '75 mins',
    type: 'sightseeing',
    description: 'Taxi from Gateway to Marine Drive just in time for the 6:05 PM sunset.',
    keyInstructions: [
      'Catch the golden sunset over the Arabian Sea.',
      'Grab tea and snacks on the promenade.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Gateway+of+India+Mumbai&destination=Marine+Drive+Mumbai&travelmode=driving',
    approxCostGroup: 90,
    skippable: false,
    priorityOrder: 5
  },
  {
    id: 'del_6',
    version: 'delayed',
    day: 'day1',
    time: '06:30 PM - 07:15 PM',
    title: 'Taxi to CSMT & Collect Bags',
    location: 'CSMT Cloak Room',
    duration: '45 mins',
    type: 'luggage',
    description: 'Return to CSMT, retrieve all 4 bags.',
    keyInstructions: ['Retrieve bags and verify tokens.'],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Marine+Drive+Mumbai&destination=CSMT+Mumbai&travelmode=driving',
    approxCostGroup: 80,
    skippable: false,
    priorityOrder: 6
  },
  {
    id: 'del_7',
    version: 'delayed',
    day: 'day1',
    time: '07:30 PM - 08:45 PM',
    title: 'Direct Taxi to Treebo Empire Suite Marol',
    location: 'Balaji Business Park, Andheri East',
    duration: '75 mins',
    type: 'transit',
    description: 'Cab via Eastern Freeway directly to hotel.',
    keyInstructions: ['Use App-based cab (Uber XL / Ola) or Kaali-Peeli.'],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Treebo+Empire+Suite+Balaji+Business+Park+Mumbai&travelmode=driving',
    approxCostGroup: 650,
    skippable: false,
    priorityOrder: 7
  },
  {
    id: 'del_8',
    version: 'delayed',
    day: 'day1',
    time: '08:45 PM - 10:30 PM',
    title: 'Check-in, Dinner & Sleep',
    location: 'Hotel Room 802',
    duration: '105 mins',
    type: 'hotel',
    description: 'Check in, dinner, rest up for tomorrow.',
    keyInstructions: ['Check in, eat dinner, prepare for 8:30 AM arrival at Grand Hyatt.'],
    approxCostGroup: 700,
    skippable: false,
    priorityOrder: 8
  }
];

export const TIMELINE_MIN_RISK: TimelineItem[] = [
  {
    id: 'min_1',
    version: 'min_risk',
    day: 'day1',
    time: '12:30 PM - 01:15 PM',
    title: 'Arrival at CSMT & Lunch at Station',
    location: 'CSMT Station / Pancham Puriwala',
    duration: '45 mins',
    type: 'food',
    description: 'Keep suitcases with you, have a quick lunch near CSMT, skip city sightseeing to avoid fatigue.',
    keyInstructions: [
      'Take luggage to Pancham Puriwala or IRCTC food court inside CSMT.',
      'Take 10 minutes to admire CSMT heritage facade from the portico.'
    ],
    approxCostGroup: 550,
    skippable: false,
    priorityOrder: 1
  },
  {
    id: 'min_2',
    version: 'min_risk',
    day: 'day1',
    time: '01:30 PM - 03:00 PM',
    title: 'Direct Cab with 4 Suitcases to Hotel Marol',
    location: 'Transit CSMT -> Treebo Empire Suite',
    duration: '90 mins',
    type: 'transit',
    description: 'Travel straight to Treebo Empire Suite in Andheri East before afternoon rush hour.',
    keyInstructions: [
      'Book Uber XL or hire spacious Kaali-Peeli with luggage carrier.',
      'Take Eastern Freeway route to JVLR / Andheri-Kurla Road.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Treebo+Empire+Suite+Balaji+Business+Park+Mumbai&travelmode=driving',
    approxCostGroup: 650,
    skippable: false,
    priorityOrder: 2
  },
  {
    id: 'min_3',
    version: 'min_risk',
    day: 'day1',
    time: '03:00 PM - 05:30 PM',
    title: 'Early Check-in, Unpack & Team Pitch Rehearsal',
    location: 'Treebo Empire Suite, Room 802',
    duration: '150 mins',
    type: 'hotel',
    description: 'Check into Room 802, shower, test laptop presentation, iron formal clothes.',
    keyInstructions: [
      'Complete check-in comfortably.',
      'Dry-run the pitch for Sahamati Financial Services Innovation Challenge.',
      'Rest and recharge after 23 hours on the train.'
    ],
    skippable: false,
    priorityOrder: 3
  },
  {
    id: 'min_4',
    version: 'min_risk',
    day: 'day1',
    time: '05:45 PM - 08:30 PM',
    title: 'Relaxed Suburban Evening (Powai Lake or Juhu Beach)',
    location: 'Powai Lake Promenade / Juhu Beach',
    duration: '165 mins',
    type: 'sightseeing',
    description: 'Visit Powai Lake promenade (4 km, 15 min auto) or Juhu Beach (9 km, 25 min auto) without crossing into South Mumbai.',
    keyInstructions: [
      'Take auto-rickshaws directly from outside Balaji Business Park (approx ₹60-₹120 by meter).',
      'Enjoy dinner and return to hotel early by 9:00 PM.'
    ],
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Powai+Lake+Promenade+Mumbai',
    approxCostGroup: 450,
    skippable: true,
    priorityOrder: 4
  },
  {
    id: 'min_5',
    version: 'min_risk',
    day: 'day1',
    time: '09:00 PM - 10:30 PM',
    title: 'Dinner & Early Sleep',
    location: 'Marol Hotel',
    duration: '90 mins',
    type: 'food',
    description: 'Early dinner and 8 full hours of sleep before the big innovation challenge.',
    keyInstructions: ['Sleep by 10:30 PM.'],
    approxCostGroup: 600,
    skippable: false,
    priorityOrder: 5
  }
];

export const EVENT_DAY_SCHEDULE = [
  {
    time: '06:30 AM - 07:15 AM',
    title: 'Wake Up & Get Dressed in Formals',
    location: 'Treebo Empire Suite, Room 802',
    detail: 'Dress in college / business formal attire for the Sahamati Innovation Challenge presentation. Check badge/college IDs.'
  },
  {
    time: '07:15 AM - 07:45 AM',
    title: 'Quick Breakfast & Final Luggage Packing',
    location: 'Hotel Dining / Room',
    detail: 'Pack all 4 suitcases completely. Ensure phone power banks, laptops, chargers, and presentation clickers are in day backpacks.'
  },
  {
    time: '07:45 AM - 08:00 AM',
    title: 'Hotel Check-out & Load 4 Suitcases into Cab',
    location: 'Hotel Reception (8th Floor) to Ground Portico',
    detail: 'Check out of Room 802. RECOMMENDATION: Bring all 4 suitcases along in a morning cab to Grand Hyatt Mumbai.'
  },
  {
    time: '08:00 AM - 08:30 AM',
    title: 'Morning Cab to Grand Hyatt Mumbai Hotel & Residences',
    location: 'Transit: Marol -> Grand Hyatt (Santacruz East)',
    detail: 'Road distance: 6.5 km. Cab time: 25-30 mins via CST Road / Kurla. Target arrival 8:30 AM gives a comfortable 30-min buffer.'
  },
  {
    time: '08:30 AM - 08:50 AM',
    title: 'Deposit 4 Suitcases at Grand Hyatt 24/7 Bell Desk & Registration',
    location: 'Grand Hyatt Mumbai Main Lobby Bell Desk & Registration Desk',
    detail: 'Hand 4 suitcases to the Grand Hyatt Bell Desk concierge. Receive claim tokens. Proceed to SamvAAd 2026 challenge registration.'
  },
  {
    time: '09:00 AM - Late',
    title: 'Sahamati Financial Services Innovation Challenge 2026',
    location: 'Grand Hyatt Mumbai Convention Ballroom',
    detail: 'Pitch, compete, and network. Event end time is variable (see scenarios below).'
  }
];

export const EVENT_SCENARIOS: EventScenario[] = [
  {
    finishTime: '05:00 PM',
    travelToLuggageMinutes: 5,
    luggageCollectionMinutes: 10,
    travelToCsmtMinutes: 60,
    estimatedCsmtArrival: '06:30 PM',
    bufferMinutesBeforeTrain: 262, // 10:52 PM departure
    riskLevel: 'safe',
    recommendation: 'Ideal situation. You have over 4 hours before train departure. You can comfortably relax, have dinner near CSMT, or stroll Ballard Estate.',
    actionPlan: [
      '05:00 PM: Retrieve 4 suitcases from Grand Hyatt Bell Desk.',
      '05:15 PM: Hail cab / Uber XL to CSMT via Western Express Highway & Bandra-Worli Sea Link or Eastern Freeway (approx 60-70 mins in evening traffic).',
      '06:30 PM: Arrive at CSMT with bags.',
      '07:00 PM - 08:30 PM: Relaxed dinner at a seated restaurant near CSMT (e.g., Britannia, Copper Chimney, or Kyani & Co).',
      '09:15 PM: Move to platform and wait comfortably at the coach waiting area.'
    ]
  },
  {
    finishTime: '06:00 PM',
    travelToLuggageMinutes: 5,
    luggageCollectionMinutes: 10,
    travelToCsmtMinutes: 70,
    estimatedCsmtArrival: '07:35 PM',
    bufferMinutesBeforeTrain: 197,
    riskLevel: 'safe',
    recommendation: 'Very comfortable. Over 3 hours buffer before the 10:52 PM train. Ample time for dinner and PNR check.',
    actionPlan: [
      '06:00 PM: Collect bags from Grand Hyatt Bell Desk.',
      '06:20 PM: Depart Grand Hyatt in cab for CSMT.',
      '07:35 PM: Reach CSMT.',
      '07:45 PM - 08:45 PM: Dinner near station or station executive lounge.',
      '09:15 PM: Arrive at designated CSMT platform for train 22157.'
    ]
  },
  {
    finishTime: '07:00 PM',
    travelToLuggageMinutes: 5,
    luggageCollectionMinutes: 10,
    travelToCsmtMinutes: 65,
    estimatedCsmtArrival: '08:30 PM',
    bufferMinutesBeforeTrain: 142,
    riskLevel: 'moderate',
    recommendation: 'Well within the safety window. You arrive at CSMT around 8:30 PM, beating your 9:15-9:30 PM target arrival window.',
    actionPlan: [
      '07:00 PM: Promptly collect 4 suitcases at Grand Hyatt Bell Desk.',
      '07:20 PM: Book cab immediately to CSMT.',
      '08:30 PM: Arrive CSMT concourse.',
      '08:35 PM - 09:15 PM: Grab packed dinner from CSMT IRCTC food court or McDonald’s.',
      '09:20 PM: Head to platform 22157.'
    ]
  },
  {
    finishTime: '08:00 PM',
    travelToLuggageMinutes: 5,
    luggageCollectionMinutes: 10,
    travelToCsmtMinutes: 65,
    estimatedCsmtArrival: '09:25 PM',
    bufferMinutesBeforeTrain: 87,
    riskLevel: 'high',
    recommendation: 'Strict discipline required! You must leave the venue immediately at 8:00 PM to hit the 9:25 PM CSMT target.',
    actionPlan: [
      '08:00 PM: Immediately retrieve luggage. Pre-book Uber XL 10 minutes prior.',
      '08:15 PM: Depart Grand Hyatt. Driver takes Bandra-Worli Sea Link / Freeway route.',
      '09:25 PM: Arrive at CSMT entrance (matches target 9:15-9:30 PM window!).',
      '09:30 PM - 10:00 PM: Check PNR RAC status, buy water bottles & packaged snacks for overnight journey.',
      '10:15 PM: Board coach 3A.'
    ]
  }
];

export const NAVIGATION_STEPS: NavigationStep[] = [
  {
    id: 'step_1',
    stepNumber: 1,
    phase: 'Arrival & Station Exit',
    title: 'De-board Train 22160 at CSMT',
    instruction: 'Get off at CSMT platform with all 4 suitcases. Walk along the platform towards the main heritage concourse portico.',
    transportDetail: 'Walking on platform (~300m)',
    estimatedTime: '12:30 PM - 12:45 PM',
    cost: 'Free',
    locationName: 'CSMT Railway Station',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai',
    backupPlan: 'If train is delayed, stay calm. All steps adjust automatically.'
  },
  {
    id: 'step_2',
    stepNumber: 2,
    phase: 'Luggage Storage',
    title: 'Drop 4 Suitcases at CSMT Cloakroom',
    instruction: 'Go to Platform 1 side (near Parcel Booking Office). Present tickets (22160 arrival or 22157 return), show IDs, pay ₹30/bag. Verify all 4 padlocks are securely fastened.',
    transportDetail: 'Station Concourse Walk',
    estimatedTime: '12:45 PM - 01:10 PM',
    cost: '₹120 total (₹30/bag)',
    locationName: 'CSMT Official Cloak Room',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=CSMT+Railway+Cloak+Room+Mumbai',
    backupPlan: 'If railway cloakroom queue is long, private luggage storage partner shops exist around Fort/Colaba (₹100/bag).',
    warningNotice: 'MANDATORY: Suitcases without locks will be rejected by railway staff.'
  },
  {
    id: 'step_3',
    stepNumber: 3,
    phase: 'Lunch',
    title: 'Lunch at Pancham Puriwala / Fort Heritage',
    instruction: 'Exit CSMT via main subway to the opposite side. Eat authentic puri thalis at Pancham Puriwala (150m walk) or Parsi lunch in Ballard Estate.',
    transportDetail: 'Short walk (~150m)',
    estimatedTime: '01:15 PM - 02:15 PM',
    cost: '₹120 - ₹180 per person',
    locationName: 'Pancham Puriwala, Fort',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pancham+Puriwala+Fort+Mumbai',
    backupPlan: 'IRCTC Food Plaza inside CSMT concourse if you prefer AC fast food.'
  },
  {
    id: 'step_4',
    stepNumber: 4,
    phase: 'Sightseeing: Heritage Terminus',
    title: 'Admire & Photograph CSMT UNESCO Building',
    instruction: 'Walk across the Bhatia Baug viewing pavement for the iconic wide-angle photo of the Gothic Victorian facade.',
    transportDetail: 'Walking (~100m)',
    estimatedTime: '02:15 PM - 02:40 PM',
    cost: 'Free',
    locationName: 'CSMT Heritage Building',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai',
    backupPlan: 'View from pedestrian skywalk or BMC headquarter pavement.'
  },
  {
    id: 'step_5',
    stepNumber: 5,
    phase: 'Transit to Colaba',
    title: 'Hail Kaali-Peeli Taxi to Gateway of India',
    instruction: 'Cross to the taxi stand outside CSMT. Hail a black-and-yellow taxi. Ask driver for "Gateway of India, Colaba by meter".',
    transportDetail: 'Kaali-Peeli Taxi (2.3 km, ~12 mins)',
    estimatedTime: '02:45 PM - 03:00 PM',
    cost: '₹60 - ₹80 total for all 4 students',
    locationName: 'CSMT Taxi Stand to Gateway of India',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Gateway+of+India+Mumbai&travelmode=driving',
    backupPlan: 'BEST Bus #111 or #112 runs from CSMT directly to Gateway of India (₹6/person).'
  },
  {
    id: 'step_6',
    stepNumber: 6,
    phase: 'Sightseeing: Iconic Waterfront',
    title: 'Explore Gateway of India & Taj Mahal Palace',
    instruction: 'Walk the promenade, take photos with the Gateway arch and the Taj Mahal Palace hotel. Security checkpoint takes 2 minutes.',
    transportDetail: 'Promenade Walking',
    estimatedTime: '03:00 PM - 04:15 PM',
    cost: 'Free entry',
    locationName: 'Gateway of India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai',
    backupPlan: 'Walk 10 mins into Colaba Causeway if time permits.'
  },
  {
    id: 'step_7',
    stepNumber: 7,
    phase: 'Transit to Marine Drive',
    title: 'Taxi to Marine Drive Promenade',
    instruction: 'Hail a Kaali-Peeli taxi outside Taj Hotel / Colaba. Tell the driver "Marine Drive, Churchgate end by meter".',
    transportDetail: 'Taxi (2.5 km, ~10 mins)',
    estimatedTime: '04:15 PM - 04:30 PM',
    cost: '₹70 - ₹90 total for 4 people',
    locationName: 'Marine Drive Promenade',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Gateway+of+India+Mumbai&destination=Marine+Drive+Mumbai&travelmode=driving',
    backupPlan: 'Uber / Ola if taxi queue is congested.'
  },
  {
    id: 'step_8',
    stepNumber: 8,
    phase: 'Sightseeing: Sunset',
    title: "Watch Sunset on Marine Drive (Queen's Necklace)",
    instruction: 'Sit on the sea-facing promenade wall / tetrapods. Experience the breeze and watch the sunset (approx 6:05 PM). Enjoy cutting chai.',
    transportDetail: 'Promenade Walk & Relaxation',
    estimatedTime: '04:30 PM - 06:15 PM',
    cost: '₹20 - ₹50 for tea/snacks per person',
    locationName: 'Marine Drive',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marine+Drive+Promenade+Mumbai',
    backupPlan: 'Walk down towards Churchgate station if you want to head back early.'
  },
  {
    id: 'step_9',
    stepNumber: 9,
    phase: 'Luggage Retrieval',
    title: 'Taxi to CSMT & Collect 4 Suitcases',
    instruction: 'Hail taxi to CSMT (2.2 km, 10 mins). Head to Cloakroom on Platform 1 side, hand over receipt tokens, retrieve all 4 bags.',
    transportDetail: 'Taxi + Station Concourse',
    estimatedTime: '06:30 PM - 07:15 PM',
    cost: '₹70 cab fare',
    locationName: 'CSMT Cloakroom',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Marine+Drive+Mumbai&destination=CSMT+Mumbai&travelmode=driving',
    backupPlan: 'Verify every suitcase handle, lock, and zipper before leaving station.',
    warningNotice: 'Count all 4 suitcases! Keep all personal bags together.'
  },
  {
    id: 'step_10',
    stepNumber: 10,
    phase: 'Transit to Andheri East',
    title: 'Cab to Treebo Empire Suite (Marol Naka)',
    instruction: 'Book an Uber XL or hire Kaali-Peeli taxi with roof luggage carrier. Take Eastern Freeway towards Marol / Andheri East.',
    transportDetail: 'Cab via Freeway (28 km, ~75 mins)',
    estimatedTime: '07:30 PM - 08:45 PM',
    cost: '₹550 - ₹700 total for 4 (₹140 - ₹175/person)',
    locationName: 'Treebo Empire Suite, Balaji Business Park',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Treebo+Empire+Suite+Balaji+Business+Park+Mumbai&travelmode=driving',
    backupPlan: 'Suburban train to Ghatkopar + Metro Line 1 to Marol Naka (₹30/person total) if road traffic is gridlocked.'
  },
  {
    id: 'step_11',
    stepNumber: 11,
    phase: 'Hotel Check-in',
    title: 'Check In to Room 802 & Settle In',
    instruction: 'Enter Balaji Business Park, take elevator to 8th floor. Check in to Room 802. Unpack formal suits and recharge phones/laptops.',
    transportDetail: 'Elevator to 8th Floor',
    estimatedTime: '08:45 PM - 09:30 PM',
    cost: 'Included in booking',
    locationName: 'Treebo Empire Suite',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Treebo+Empire+Suite+Balaji+Business+Park+Andheri+Kurla+Road+Mumbai',
    backupPlan: 'Request iron/ironing board from housekeeping if suits are creased.'
  },
  {
    id: 'step_12',
    stepNumber: 12,
    phase: 'Dinner & Event Prep',
    title: 'Dinner at Marol Naka & Rest',
    instruction: 'Have dinner within 300m of hotel (Shiv Sagar, Peninsula, or Sarovar). Team sync for tomorrow’s Sahamati Challenge presentation. Sleep by 11:00 PM.',
    transportDetail: 'Short Walk (~200m)',
    estimatedTime: '09:30 PM - 10:45 PM',
    cost: '₹150 - ₹200 per person',
    locationName: 'Marol Naka Dining',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Restaurants+near+Marol+Naka+Metro+Station+Mumbai',
    backupPlan: 'Order Swiggy/Zomato to hotel reception if tired.'
  }
];

export const INITIAL_EXPENSES: ExpenseItem[] = [
  { id: 'exp_1', category: 'luggage', title: 'CSMT Railway Cloakroom (4 suitcases x 24h)', estimatedCost: 120, actualCost: 120, paidBy: 'Group Shared', notes: 'Verified railway tariff ~₹30/bag' },
  { id: 'exp_2', category: 'food', title: 'Day 1 Lunch (Pancham Puriwala / Fort)', estimatedCost: 600, actualCost: 560, paidBy: 'Group Shared', notes: 'Approx ₹140/person' },
  { id: 'exp_3', category: 'transport', title: 'Taxi CSMT to Gateway of India (Kaali-Peeli)', estimatedCost: 80, actualCost: 75, paidBy: 'Group Shared', notes: 'Meter fare for 4 passengers' },
  { id: 'exp_4', category: 'transport', title: 'Taxi Gateway to Marine Drive', estimatedCost: 90, actualCost: 85, paidBy: 'Group Shared', notes: 'Meter fare across to Churchgate' },
  { id: 'exp_5', category: 'food', title: 'Marine Drive Tea & Snacks', estimatedCost: 200, actualCost: 180, paidBy: 'Group Shared', notes: 'Chai & bhutta' },
  { id: 'exp_6', category: 'transport', title: 'Taxi Marine Drive back to CSMT', estimatedCost: 80, actualCost: 70, paidBy: 'Group Shared', notes: 'Meter fare to collect bags' },
  { id: 'exp_7', category: 'transport', title: 'Cab CSMT to Treebo Hotel Marol (SUV / XL)', estimatedCost: 650, actualCost: 620, paidBy: 'Group Shared', notes: 'Includes 4 bags boot space' },
  { id: 'exp_8', category: 'food', title: 'Day 1 Dinner in Marol / Andheri East', estimatedCost: 800, actualCost: 760, paidBy: 'Group Shared', notes: 'Dinner for 4 students' },
  { id: 'exp_9', category: 'transport', title: 'Day 2 Morning Cab Hotel to Grand Hyatt', estimatedCost: 250, actualCost: 220, paidBy: 'Group Shared', notes: '6.5 km morning ride' },
  { id: 'exp_10', category: 'luggage', title: 'Grand Hyatt Bell Desk Luggage Hold', estimatedCost: 0, actualCost: 0, paidBy: 'Complimentary', notes: 'Standard 5-star conference service' },
  { id: 'exp_11', category: 'transport', title: 'Day 2 Evening Cab Grand Hyatt to CSMT', estimatedCost: 550, actualCost: 500, paidBy: 'Group Shared', notes: 'Direct south via Western Exp / Sea Link' },
  { id: 'exp_12', category: 'food', title: 'Day 2 Dinner / Train Snacks before CSMT departure', estimatedCost: 700, actualCost: 650, paidBy: 'Group Shared', notes: 'Dinner and train water bottles' },
  { id: 'exp_13', category: 'emergency', title: 'Contingency Reserve Fund', estimatedCost: 1500, actualCost: 0, paidBy: 'Buffer', notes: 'Emergency medical, extra cab, or delays' }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'chk_1', category: 'documents', task: 'Original College ID Cards for all 4 students (Aswin, Dinesh, Bhavananthan, Priyadharshini)', completed: false, notes: 'Required for Sahamati Challenge registration' },
  { id: 'chk_2', category: 'documents', task: 'Govt Photo ID (Aadhaar / Voter ID / Driving License) for each member', completed: false, notes: 'Required for Train, Hotel check-in & Station Cloakroom' },
  { id: 'chk_3', category: 'train', task: 'Download offline e-ticket for Train 22160 (MAS CSMT) & Train 22157 (CSMT MAS)', completed: false, notes: 'Keep saved on phones' },
  { id: 'chk_4', category: 'train', task: 'Check PNR Status for Return Train 22157 (Booked as RAC)', completed: false, notes: 'Check via official Indian Railways / NTES site before station arrival' },
  { id: 'chk_5', category: 'luggage', task: 'Equip ALL 4 suitcases with working physical padlocks / mechanical combination locks', completed: false, notes: 'MANDATORY for CSMT Railway Cloak Room acceptance' },
  { id: 'chk_6', category: 'event', task: 'Formal Business Attire / Presentation outfits ironed & packed in suitcases', completed: false, notes: 'For 15 Oct 9:00 AM Sahamati Challenge at Grand Hyatt' },
  { id: 'chk_7', category: 'event', task: 'Laptops, chargers, HDMI dongles & presentation slides backup on USB pendrives', completed: false, notes: 'Sahamati Financial Services Innovation pitch materials' },
  { id: 'chk_8', category: 'luggage', task: 'Pack personal essentials & toiletries in day backpacks so suitcases can stay stored', completed: false, notes: 'Avoid needing to open suitcases in public' },
  { id: 'chk_9', category: 'college', task: 'College permission letter / Bonafide certificate copy', completed: false, notes: 'Safety document for official student travel' }
];

export const RESEARCH_VERIFICATIONS = [
  {
    topic: 'Treebo Empire Suite Location & Nearest Metro',
    verifiedFact: 'Room 802, 8th Floor, Balaji Business Park, Andheri-Kurla Road. Nearest metro is Marol Naka (Metro Line 1 & Line 3 interchange).',
    distanceOrTiming: '180 meters walking distance (2-3 min walk).',
    sourceType: 'Verified via Mumbai Metro Network & Google Maps geo-index.',
    status: 'Verified'
  },
  {
    topic: 'CSMT to Marol Road Distance & Taxi Duration',
    verifiedFact: 'Road distance is ~28 km to 31 km depending on route (Eastern Freeway vs SCLR/JVLR). Taxi duration ranges 65-90 minutes during standard traffic.',
    distanceOrTiming: '28-31 km (1h 10m - 1h 35m).',
    sourceType: 'Mumbai Traffic Police & regional route baselines.',
    status: 'Verified'
  },
  {
    topic: 'Indian Railways CSMT Cloakroom Policies & Rules',
    verifiedFact: 'Located near Platform 1 concourse. Open 24/7 (except shift handovers). Passengers must hold valid inbound or onward railway tickets. Mandatory rule: Suitcases MUST be locked with padlocks/locks.',
    distanceOrTiming: 'Approx ₹30 per piece per 24 hours.',
    sourceType: 'Indian Railways Official Cloakroom Regulations (IRCTC/CR).',
    status: 'Verified'
  },
  {
    topic: 'Grand Hyatt Mumbai Location & Morning Commute',
    verifiedFact: 'Located in Santacruz East (BKC vicinity), Off Western Express Highway. Distance from Treebo Empire Suite in Marol is 6.5 km.',
    distanceOrTiming: '25-35 minutes morning cab ride to arrive by 8:30 AM.',
    sourceType: 'Official Grand Hyatt Mumbai Location & route mapping.',
    status: 'Verified'
  },
  {
    topic: 'Grand Hyatt Bell Desk Luggage Holding',
    verifiedFact: '5-star convention hotel concierge routinely holds luggage for verified attendees/delegates of events in their ballrooms.',
    distanceOrTiming: 'Complimentary service for registered event attendees.',
    sourceType: 'Standard 5-star luxury hospitality operational protocol.',
    status: 'High Confidence (Assumption: Students will register at arrival)'
  },
  {
    topic: 'Return Train 22157 RAC Status',
    verifiedFact: 'Train departs CSMT at 10:52 PM on 15 October 2026. RAC ticket entitles boarding and shared berth; status may confirm prior to chart preparation (usually 4 hours before departure).',
    distanceOrTiming: 'Safe arrival window: 9:15 PM - 9:30 PM at CSMT.',
    sourceType: 'Indian Railways ticketing guidelines.',
    status: 'Verified'
  },
  {
    topic: 'South Mumbai Taxi vs Auto-Rickshaw Law',
    verifiedFact: 'Auto-rickshaws are legally prohibited in South Mumbai (south of Bandra / Sion). Only black-and-yellow Kaali-Peeli taxis or app cabs operate in South Mumbai.',
    distanceOrTiming: 'Kaali-Peelis operate strictly by electronic meter.',
    sourceType: 'Maharashtra Motor Vehicles Department (RTO) regulation.',
    status: 'Verified'
  }
];
