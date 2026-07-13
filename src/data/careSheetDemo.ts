

const careInstructions = [
  // ---------------- Day 1 ----------------
  {
    day_offset: 0,
    title: "Start Walking (With Help)",
    body: "Take short walks with assistance for 10 minutes every 2 hours. This helps prevent blood clots and improves circulation."
  },
  {
    day_offset: 0,
    title: "Wear Your Compression Garment",
    body: "Wear your compression garment at all times. Make sure it lies flat against your skin without folds or creases."
  },
  {
    day_offset: 0,
    title: "Stay in a Reclined Position",
    body: "Rest with your head and knees elevated. Avoid lying flat or standing up straight to protect your incision."
  },
  {
    day_offset: 0,
    title: "Stay Hydrated",
    body: "Drink at least 8 ounces of water every 2 hours. Start with clear liquids and move to soft foods if tolerated."
  },
  {
    day_offset: 0,
    title: "Manage Drainage",
    body: "Empty your drains at least twice daily or when they’re half full. Keep the bulbs collapsed to maintain suction and don’t tug on the tubing"
  },
  {
    day_offset: 0,
    title: "Take Prescribed Medications",
    body: "Follow your medication schedule exactly."
  },

  // ---------------- Day 2 ----------------
  {
    day_offset: 1,
    title: "Stay Hydrated",
    body: "Drink at least 8 ounces of water every 2 hours. Start with clear liquids and move to soft foods if tolerated."
  },
  {
    day_offset: 1,
    title: "Wear Compression Garment",
    body: "Keep your compression garment on 24/7. Make sure it's smooth with no creases."
  },
  {
    day_offset: 1,
    title: "Drain Care",
    body: "Empty your drains and keep the area clean and dry, and don’t tug on the tubing."
  },
  {
    day_offset: 1,
    title: "Take Prescribed Medications",
    body: "Follow your medication schedule exactly."
  },

  // ---------------- Day 3 ----------------
  {
    day_offset: 2,
    title: "Take Prescribed Medications",
    body: "Follow your medication schedule exactly."
  },

  {
    day_offset: 2,
    title: "Light Movement Only",
    body: "Avoid lifting, reaching, or twisting. Continue short indoor walks to support healing."
  },
  {
    day_offset: 2,
    title: "Check Your Skin",
    body: "Mild tightness or itchiness is normal. Contact your clinic if the area becomes hot, red, or painful."
  },

  // ---------------- Day 4 ----------------
  {
    day_offset: 3,
    title: "Stand More Upright (Slowly)",
    body: "If comfortable, begin standing more upright. Do this slowly — don’t rush it."
  },
  {
    day_offset: 3,
    title: "Change Dressings If Needed",
    body: "Gently clean incisions around the steri-strips if instructed. Replace dressings and apply ointment if directed."
  },
  {
    day_offset: 3,
    title: "Avoid Salt & Sugar-Free Candy",
    body: "Stick to bland, low-sodium foods. Avoid things that can increase swelling or cause gas."
  },
  {
    day_offset: 3,
    title: "Take Prescribed Medications",
    body: "Follow your medication schedule exactly."
  },

  // ---------------- Day 5 ----------------
  {
    day_offset: 4,
    title: "Take Prescribed Medications",
    body: "Follow your medication schedule exactly."
  },
  {
    day_offset: 4,
    title: "Watch for Progress",
    body: "Mild bruising or numbness is still normal. If anything feels sharp or painful, call care team."
  },
  {
    day_offset: 4,
    title: "Compression Fit Check",
    body: "Check if your garment is still fitting well. As swelling decreases, you may need to switch sizes soon."
  },
  {
    day_offset: 4,
    title: "Start Lymphatic Massage",
    body: "You can now begin lymphatic massage with a licensed therapist to help reduce swelling and firmness."
  },

  {
    day_offset: 5,
    title: "Cont Lymphatic Massage",
    body: "You can now begin lymphatic massage with a licensed therapist to help reduce swelling and firmness."
  },
  {
    day_offset: 5,
    title: "Incision Check",
    body: "Inspect your incision for redness, warmth, or discharge. Mild tightness is normal, but sharp pain or fever should be reported."
  },
];

const dayOffsets = [
  { label: "Day 1", value: 0 },
  { label: "Day 2", value: 1 },
  { label: "Day 3", value: 2 },
  { label: "Day 4", value: 3 },
  { label: "Day 5", value: 4 },
  { label: "Day 6", value: 5 }
];

const date = new Date()
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
}

const surgeryDate = date.toLocaleDateString('en-US', options)
const careSheetDemoData = {
  patient: { name: "Gaby Espinoza" },
  procedure_name: "Tummy Tuck",
  surgery_date: surgeryDate,
  care_instructions: careInstructions,
  day_offsets: dayOffsets,
  included: {
    voice_note: [
      { service_url: "/voicenotes/tummyTuck.mp3" }
    ]
  }
};

export default careSheetDemoData
