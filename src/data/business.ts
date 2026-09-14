export const BUSINESS_NAME = "Richmond Barbershop";
export const BUSINESS_DESCRIPTION = "Richmond Barbershop is a barbershop in Carytown, Richmond, Virginia, offering men's haircuts, scissor cuts, beard trims, and hot-towel straight-razor shaves.";

export const WEBSITE_URL = "https://richmondbarbershop.com";

export const BOOKING_URL =
  "https://book.squareup.com/appointments/e82z6hm5h0k6nr/location/L0C7SP53VGCK0/services";

export const MAPS_URL = "https://maps.app.goo.gl/gv7wy3RtPVX4iEvw8";

export const GOOGLE_PROFILE_URL = "https://share.google/wbJjqNOCH4Rwny71W";

export const INSTAGRAM_URL = "https://instagram.com/rvabarbershop";

export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61584927026935";
export const APPLE_MAPS_URL = "https://maps.apple.com/place?place-id=I18DDFA22FD611F17";

export const PHONE_E164 = "+18042030221";

export const PHONE_DISPLAY = "(804) 203-0221";

export const ADDRESS = {
  streetAddress: "2820 W Cary St STE C",
  addressLocality: "Richmond",
  addressRegion: "VA",
  postalCode: "23221",
  addressCountry: "US",
};

export const ADDRESS_SINGLE_LINE =
  "2820 W Cary St STE C, Richmond, VA 23221";

export const BUSINESS_HOURS_NOTE =
  "Hours vary by day. Check Google Maps for current hours.";

export const SERVICE_AREAS = [
  "Richmond, VA",
  "Carytown",
  "The Fan",
  "Museum District",
  "Scott's Addition",
  "Church Hill",
  "West End",
  "Henrico",
  "Midlothian",
];

export const SERVICES = [
  {
    name: "Haircut",
    path: "/mens-haircut-richmond-va",
    price: 40,
    durationMinutes: 40,
    description:
      "A haircut using clippers and scissors, finished with a hot towel and straight-razor neck shave. Ages 8 and up.",
  },
  {
    name: "Scissor Cut",
    path: "/scissor-cut-richmond-va",
    price: 60,
    durationMinutes: 40,
    description:
      "Scissor work for longer masculine styles, with texturizing and a styled finish. Ages 8 and up.",
  },
  {
    name: "Beard Trim",
    path: "/beard-trim-richmond-va",
    price: 40,
    durationMinutes: 40,
    description: "Beard shaping with a hot towel and straight-razor line-up.",
  },
  {
    name: "Straight Razor Shave",
    path: "/straight-razor-shave-richmond-va",
    price: 50,
    durationMinutes: 40,
    description:
      "Classic straight razor shave with a hot towel and close finish.",
  },
];

// Verified in the public Square booking menu on 2026-09-14.
// Update this data alongside Square when the menu changes.
export const SERVICE_DETAILS_VERIFIED = "2026-09-14";
export const HAIRCUT_BEARD_COMBO = { name: "Haircut and Beard Trim", price: 70, durationMinutes: 40 };
export const BARBERS = [
  { name: "Joe", id: "joe", bookingUrl: `${BOOKING_URL}/PUBAN2KEYN7APOI3Q642GIBN` },
  { name: "Sam", id: "sam", bookingUrl: `${BOOKING_URL}/PKLMKZDNZQOUDJBFDN5OEHHR` },
];

export const FAQS = [
  {
    question: "Do I need to make an appointment at Richmond Barbershop?",
    answer:
      "Appointments at Richmond Barbershop are highly recommended. Book online through Square. Walk-ins are welcome when available.",
  },
  {
    question: "Do you have onsite parking?",
    answer:
      "We do not have onsite parking, however there is street parking, as well as a 2 story parking garage directly across the street.",
  },
  {
    question: "What ages are welcome?",
    answer: "We offer haircuts for ages 8+.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations need to be made at least 8 hours before your appointment online or by phone. Otherwise you will be charged in full for your missed appointment.",
  },
  {
    question: "What areas of Richmond, VA do you serve?",
    answer:
      "We proudly serve Carytown, The Fan, Museum District, Scott's Addition, Church Hill, Henrico, Midlothian, and surrounding areas.",
  },
  {
    question: "What services do you offer?",
    answer: BUSINESS_DESCRIPTION,
  },
  {
    question: "How much do services cost at Richmond Barbershop?",
    answer: `${SERVICES.map((service) => `${service.name}: $${service.price}`).join("; ")}. ${HAIRCUT_BEARD_COMBO.name}: $${HAIRCUT_BEARD_COMBO.price}. All prices are in USD. Check the Square booking menu for current prices and availability.`,
  },
];
