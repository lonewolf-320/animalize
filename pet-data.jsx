/* ── Pet Data, Events Data & Helpers for Animalize ── */

/* ── PET DATA ── */
const PETS = [
  { id: 1, name: "Luna", species: "Dog", breed: "German Shepherd", age: "Young", size: "Large", location: "New York, NY", gender: "Female" },
  { id: 2, name: "Milo", species: "Cat", breed: "Siamese", age: "Adult", size: "Medium", location: "Los Angeles, CA", gender: "Male" },
  { id: 3, name: "Bella", species: "Dog", breed: "Golden Retriever", age: "Puppy", size: "Large", location: "Chicago, IL", gender: "Female" },
  { id: 4, name: "Oliver", species: "Cat", breed: "Maine Coon", age: "Senior", size: "Large", location: "Houston, TX", gender: "Male" },
  { id: 5, name: "Charlie", species: "Dog", breed: "Beagle", age: "Adult", size: "Medium", location: "Phoenix, AZ", gender: "Male" },
  { id: 6, name: "Kiwi", species: "Bird", breed: "Parakeet", age: "Young", size: "Small", location: "Philadelphia, PA", gender: "Female" },
  { id: 7, name: "Max", species: "Dog", breed: "Labrador Retriever", age: "Young", size: "Large", location: "San Antonio, TX", gender: "Male" },
  { id: 8, name: "Whiskers", species: "Cat", breed: "Persian", age: "Adult", size: "Medium", location: "San Diego, CA", gender: "Male" },
  { id: 9, name: "Daisy", species: "Dog", breed: "Poodle", age: "Senior", size: "Small", location: "Dallas, TX", gender: "Female" },
  { id: 10, name: "Sunny", species: "Bird", breed: "Cockatiel", age: "Adult", size: "Small", location: "San Jose, CA", gender: "Male" },
  { id: 11, name: "Rocky", species: "Dog", breed: "Bulldog", age: "Adult", size: "Medium", location: "Austin, TX", gender: "Male" },
  { id: 12, name: "Cleo", species: "Cat", breed: "Bengal", age: "Young", size: "Medium", location: "Jacksonville, FL", gender: "Female" },
];

const SPECIES_OPTIONS = ["Dog", "Cat", "Bird"];
const BREEDS_BY_SPECIES = {
  Dog: ["German Shepherd", "Golden Retriever", "Beagle", "Labrador Retriever", "Poodle", "Bulldog"],
  Cat: ["Siamese", "Maine Coon", "Persian", "Bengal"],
  Bird: ["Parakeet", "Cockatiel"],
};
const AGE_OPTIONS = ["Puppy", "Young", "Adult", "Senior"];
const SIZE_OPTIONS = ["Small", "Medium", "Large"];

/* ── EVENTS DATA ── */
const EVENTS = [
  {
    id: 1, title: "Exotic Animal Show",
    date: "June 15, 2026", time: "10:00 AM – 4:00 PM",
    location: "Central Convention Center",
    category: "Show",
    description: "Experience unforgettable moments with our exotic animal shows featuring snakes, lion cubs, reptiles, exotic parrots, birds of prey and many other exotic and rare animals.",
    price: "Free Entry", spots: 200
  },
  {
    id: 2, title: "Reptile Encounter Day",
    date: "June 22, 2026", time: "11:00 AM – 3:00 PM",
    location: "Animalize Headquarters",
    category: "Experience",
    description: "Get up close with some of the world's most fascinating reptiles. Hands-on experience with snakes, lizards, and tortoises guided by expert handlers.",
    price: "$15 per person", spots: 50
  },
  {
    id: 3, title: "Birds of Prey Exhibition",
    date: "July 5, 2026", time: "9:00 AM – 1:00 PM",
    location: "Riverside Park Amphitheater",
    category: "Show",
    description: "Watch magnificent birds of prey in action. Live flight demonstrations with hawks, eagles, and owls presented by professional falconers.",
    price: "$10 per person", spots: 150
  },
  {
    id: 4, title: "Kids Animal Birthday Bash",
    date: "Every Weekend", time: "By Appointment",
    location: "Your Venue",
    category: "Party",
    description: "Animal-themed birthday party with live exotic animals. Perfect for kids aged 4–14. Includes interactive show, photo ops, and a special birthday surprise.",
    price: "Starting at $250", spots: null
  },
  {
    id: 5, title: "Corporate Wildlife Experience",
    date: "July 20, 2026", time: "2:00 PM – 6:00 PM",
    location: "Your Office or Venue",
    category: "Corporate",
    description: "Bring exotic animals to your corporate event. Team building with a wild twist — perfect for parties, corporate events, and special occasions.",
    price: "Custom Quote", spots: null
  },
  {
    id: 6, title: "Pet Photography Day",
    date: "August 2, 2026", time: "10:00 AM – 5:00 PM",
    location: "Animalize Studio",
    category: "Photography",
    description: "Capture magical moments with our exotic animals. Professional photography sessions available for special events and personal photoshoots with exotic parrots, reptiles, and more.",
    price: "$75 per session", spots: 30
  },
  {
    id: 7, title: "Exotic Parrot Meet & Greet",
    date: "August 10, 2026", time: "12:00 PM – 4:00 PM",
    location: "Greenfield Community Hall",
    category: "Experience",
    description: "Interact with colorful and intelligent exotic parrots. Learn about different species, their habitats, and conservation efforts from our expert handlers.",
    price: "$12 per person", spots: 80
  },
  {
    id: 8, title: "Summer Animal Camp",
    date: "August 18–22, 2026", time: "9:00 AM – 3:00 PM Daily",
    location: "Animalize Campus",
    category: "Camp",
    description: "A week-long educational adventure for kids aged 6–14. Daily hands-on sessions with different exotic animals, wildlife education, and fun activities.",
    price: "$300 per child", spots: 25
  }
];

const EVENT_CATEGORIES = ["All", "Show", "Experience", "Party", "Corporate", "Photography", "Camp"];

/* ── REAL PET PHOTOS ── */
const PET_PHOTOS = {
  "luna":     "https://loremflickr.com/600/400/german,shepherd,dog?lock=1",
  "milo":     "https://loremflickr.com/600/400/siamese,cat?lock=2",
  "bella":    "https://loremflickr.com/600/400/golden,retriever,puppy?lock=3",
  "oliver":   "https://loremflickr.com/600/400/maine,coon,cat?lock=4",
  "charlie":  "https://loremflickr.com/600/400/beagle,dog?lock=5",
  "kiwi":     "https://loremflickr.com/600/400/parakeet,budgie?lock=6",
  "max":      "https://loremflickr.com/600/400/labrador,retriever?lock=7",
  "whiskers": "https://loremflickr.com/600/400/persian,cat?lock=8",
  "daisy":    "https://loremflickr.com/600/400/poodle,dog?lock=9",
  "sunny":    "https://loremflickr.com/600/400/cockatiel,parrot?lock=10",
  "rocky":    "https://loremflickr.com/600/400/english,bulldog?lock=11",
  "cleo":     "https://loremflickr.com/600/400/bengal,cat?lock=12",
};

/* ── REAL EVENT PHOTOS ── */
const EVENT_PHOTOS = {
  1: "https://loremflickr.com/640/360/exotic,animal,show?lock=21",
  2: "https://loremflickr.com/640/360/alligator,reptile,handler?lock=22",
  3: "https://loremflickr.com/640/360/eagle,hawk,falconer?lock=23",
  4: "https://loremflickr.com/640/360/kids,birthday,animals?lock=24",
  5: "https://loremflickr.com/640/360/corporate,wildlife,event?lock=25",
  6: "https://loremflickr.com/640/360/animal,photography,session?lock=26",
  7: "https://loremflickr.com/640/360/macaw,parrot,colorful?lock=27",
  8: "https://loremflickr.com/640/360/summer,camp,outdoor,kids?lock=28",
};

function petPlaceholder(species, name) {
  const key = (name || "").toLowerCase().trim();
  return PET_PHOTOS[key] || `https://loremflickr.com/600/400/${species.toLowerCase()}?lock=99`;
}

function eventPlaceholder(category, eventId) {
  return EVENT_PHOTOS[eventId] || `https://loremflickr.com/640/360/animal,event?lock=${eventId + 30}`;
}

Object.assign(window, {
  PETS, SPECIES_OPTIONS, BREEDS_BY_SPECIES, AGE_OPTIONS, SIZE_OPTIONS,
  EVENTS, EVENT_CATEGORIES,
  petPlaceholder, eventPlaceholder
});
