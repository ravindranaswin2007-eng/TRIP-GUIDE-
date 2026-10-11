export type ItineraryVersion = 'recommended' | 'delayed' | 'min_risk';

export interface Traveler {
  id: string;
  name: string;
  role: string;
  initials: string;
}

export interface LocationDetail {
  name: string;
  category: 'station' | 'hotel' | 'attraction' | 'venue' | 'restaurant';
  address: string;
  area: string;
  mapsUrl: string;
  searchUrl: string;
  approxVisitMinutes?: number;
  timingNotes?: string;
  imageUrl?: string;
  description: string;
  mustKnowTips: string[];
}

export interface TransportLeg {
  mode: 'taxi_kaali_peeli' | 'uber_ola' | 'metro' | 'local_train' | 'walk' | 'auto';
  from: string;
  to: string;
  durationMinutes: number;
  costEstimatePerPerson: number;
  costEstimateGroup: number;
  instructions: string[];
  backupRoute?: string;
  directionsUrl: string;
  distanceKm: number;
}

export interface TimelineItem {
  id: string;
  version: ItineraryVersion;
  day: 'day1' | 'day2';
  time: string;
  title: string;
  location: string;
  duration: string;
  type: 'train' | 'transit' | 'luggage' | 'sightseeing' | 'food' | 'hotel' | 'event';
  description: string;
  keyInstructions: string[];
  mapsDirectionsUrl?: string;
  approxCostGroup?: number;
  importantWarning?: string;
  skippable: boolean;
  priorityOrder: number;
}

export interface NavigationStep {
  id: string;
  stepNumber: number;
  phase: string;
  title: string;
  instruction: string;
  transportDetail: string;
  estimatedTime: string;
  cost: string;
  locationName: string;
  mapsUrl: string;
  backupPlan: string;
  warningNotice?: string;
}

export interface EventScenario {
  finishTime: string;
  travelToLuggageMinutes: number;
  luggageCollectionMinutes: number;
  travelToCsmtMinutes: number;
  estimatedCsmtArrival: string;
  bufferMinutesBeforeTrain: number;
  riskLevel: 'safe' | 'moderate' | 'high' | 'critical';
  recommendation: string;
  actionPlan: string[];
}

export interface ExpenseItem {
  id: string;
  category: 'transport' | 'food' | 'luggage' | 'miscellaneous' | 'emergency';
  title: string;
  estimatedCost: number;
  actualCost: number;
  paidBy?: string;
  notes?: string;
}

export interface ChecklistItem {
  id: string;
  category: 'documents' | 'luggage' | 'train' | 'event' | 'college';
  task: string;
  completed: boolean;
  notes?: string;
}
