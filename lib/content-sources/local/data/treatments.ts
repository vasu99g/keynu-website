import type { Treatment } from "@/lib/content/types";

/**
 * Treatment catalog — transcribed from the client's source-of-truth sheet:
 * https://docs.google.com/spreadsheets/d/1B_JIwTyyttxNlt6qdtsuD6JmrOUGAl-87Ozp4T_cCQk
 *
 * Each treatment may have multiple area variants (e.g. HIFU on face vs body),
 * each with its own session count and duration.
 *
 * Sessions/duration values are kept as strings where the sheet allowed
 * non-numeric notes (e.g. "1 (repeat every 3–4 months)").
 */
export const treatments: Treatment[] = [
  {
    slug: "hifu",
    name: "HIFU",
    categorySlug: "skin-tightening-and-lifting",
    shortDescription:
      "Non-invasive ultrasound treatment that reduces fat and tightens muscles to sculpt and contour the face and body.",
    machine: "HIFU",
    areaVariants: [
      { area: "Face", sessions: "2", durationMinutes: 90 },
      { area: "Body (arms, legs, etc.)", sessions: "2", durationMinutes: "90–120" },
    ],
  },
  {
    slug: "morpheus-8",
    name: "Morpheus 8",
    categorySlug: "skin-tightening-and-lifting",
    shortDescription:
      "Fractional radio-frequency microneedling for jawline definition, acne scars, open pores, and skin tightening across the face and body.",
    machine: "Triton by InMode — Morpheus 8",
    areaVariants: [
      { area: "Upper arms, stomach, thighs, hips", sessions: "4", durationMinutes: 90 },
      { area: "Face", sessions: "4", durationMinutes: 90 },
    ],
  },
  {
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    categorySlug: "laser-hair-reduction",
    shortDescription:
      "Permanent hair reduction using diode laser that targets the hair root, slowing and reducing growth over multiple sessions.",
    machine: "Triton by InMode — Diolase XL (Diode Laser)",
    areaVariants: [
      { area: "Full body", sessions: "6", durationMinutes: 180 },
      { area: "Face", sessions: "6", durationMinutes: 60 },
      { area: "Arms & legs", sessions: "6", durationMinutes: 120 },
      { area: "Bikini", sessions: "6", durationMinutes: 60 },
      { area: "Underarms", sessions: "6", durationMinutes: 60 },
    ],
  },
  {
    slug: "photofacial",
    name: "Photofacial",
    categorySlug: "pigmentation-and-brightening",
    shortDescription:
      "Intense Pulsed Light treatment for uneven skin tone, redness, acne marks, and pigmentation.",
    machine: "Triton by InMode — Lumecca IPL",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 40 }],
  },
  {
    slug: "rf-skin-tightening",
    name: "RF Skin Tightening",
    categorySlug: "skin-tightening-and-lifting",
    shortDescription:
      "Radiofrequency skin tightening that lifts and contours by heating the dermis to stimulate collagen.",
    machine: "Triton by InMode — Forma",
    areaVariants: [
      { area: "Full face", sessions: "6", durationMinutes: 60 },
      { area: "Lower face & jawline", sessions: "6", durationMinutes: 45 },
      { area: "Under eye", sessions: "6", durationMinutes: 30 },
    ],
  },
  {
    slug: "laser-toning-q-switch",
    name: "Laser Toning / Hollywood Peel / Spectra Carbon Peel",
    categorySlug: "pigmentation-and-brightening",
    shortDescription:
      "Gentle laser used to improve pigmentation, uneven tone, open pores, freckles, melasma, sun damage, and tattoo ink. Plain or with carbon for deeper resurfacing.",
    machine: "Spectra XT (Lutronic)",
    areaVariants: [
      { area: "Full face — plain Q-Switch", sessions: "6", durationMinutes: 40 },
      { area: "Full face — Carbon Peel", sessions: "4", durationMinutes: 45 },
      { area: "Tattoo removal (small / medium / large)", sessions: "6", durationMinutes: 45 },
    ],
  },
  {
    slug: "dermapen-microneedling",
    name: "Dermapen Microneedling",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "Collagen induction therapy using mechanical microneedling for acne scars, open pores, uneven tone, mild sagging, and texture.",
    machine: "Dermapen 4",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 60 }],
  },
  {
    slug: "emerald-non-invasive-fat-loss",
    name: "Non-Invasive Fat Loss (Emerald)",
    categorySlug: "body-contouring-and-fat-loss",
    shortDescription:
      "FDA-approved green cold laser for full-body fat reduction. Effective for patients up to BMI 40 — six sessions across two weeks, zero downtime, no incision.",
    machine: "Emerald Laser",
    areaVariants: [
      {
        area: "Any single body area (thighs / arms / abdomen / hips / back / flanks)",
        sessions: "6",
        durationMinutes: 60,
      },
    ],
  },
  {
    slug: "artiqa-body-contouring",
    name: "Body Contouring (Artiqa)",
    categorySlug: "body-contouring-and-fat-loss",
    shortDescription:
      "Thermal-shock body sculpting (Artiqa T-Shock) paired with electro-muscle stimulation. Targets stubborn inches, cellulite, and skin firming over six sessions.",
    machine: "Artiqa T-Shock",
    areaVariants: [
      { area: "Any body area (arms, stomach, thighs, hips, back)", sessions: "6", durationMinutes: 60 },
    ],
  },
  {
    slug: "rf-modula-cavitation",
    name: "Slimming & Tightening (RF Modula + Cavitation)",
    categorySlug: "body-contouring-and-fat-loss",
    shortDescription:
      "Ultrasonic cavitation combined with radiofrequency for inch loss, cellulite smoothing, and skin tightening.",
    machine: "RF Modula + Cavitation System",
    areaVariants: [
      { area: "Any body area (arms, stomach, thighs, hips, back)", sessions: "6", durationMinutes: 60 },
    ],
  },
  {
    slug: "plasma-lift",
    name: "Plasma Lift",
    categorySlug: "resurfacing",
    shortDescription:
      "Plasma-based rejuvenation for moles, tags, warts, non-surgical eyelid tightening, wrinkles, and under-eye work. Triggers controlled collagen remodeling.",
    machine: "Pixi Pen (Plasma Pen — 10 interchangeable tips)",
    areaVariants: [
      {
        area: "Moles / tags / warts / eyelid / under eye / wrinkle patches",
        sessions: "4",
        durationMinutes: 60,
      },
    ],
  },
  {
    slug: "dermagenesis",
    name: "Dermagenesis",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "Advanced rejuvenation — like an upgraded HydraFacial with mild microneedling for deeper serum infusion. Improves hydration, glow, tone, and texture.",
    machine: "Dermagenesis",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 45 }],
  },
  {
    slug: "fire-and-ice-medi-facial",
    name: "Fire & Ice Medi Facial",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "Medical-grade two-step facial — exfoliation (Fire) and deep hydration (Ice). Brightens, smooths, and refines with no downtime.",
    machine: "Fire & Ice Medi Facial Kit",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 45 }],
  },
  {
    slug: "medi-peels-sesderma",
    name: "Medi Peels (Sesderma)",
    categorySlug: "pigmentation-and-brightening",
    shortDescription:
      "Medical-grade chemical peels for acne, pigmentation, dullness, uneven texture, tanning, and fine lines. Includes Salicylic, TCA, Glycolic, and more — chosen per skin concern.",
    machine: "Chemical peel — Sesderma protocols",
    areaVariants: [
      { area: "Face", sessions: "4", durationMinutes: 30 },
      { area: "Under eye", sessions: "6", durationMinutes: 30 },
      { area: "Lips", sessions: "6", durationMinutes: 30 },
      { area: "Body (back / arms)", sessions: "4", durationMinutes: 30 },
    ],
  },
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "Multi-step hydra-dermabrasion that cleanses, exfoliates, extracts, and hydrates using active serums. Glow + smoothness with zero downtime.",
    machine: "HydraFacial machine (2 units)",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 45 }],
  },
  {
    slug: "botox",
    name: "Botox",
    categorySlug: "injectables",
    shortDescription:
      "Botulinum toxin injections that relax specific facial muscles to soften lines, refine the jawline, lift the brows, and prevent deeper creasing. Dosing is individualised.",
    machine: "Botox vial",
    areaVariants: [
      {
        area: "Face (forehead, frown lines, crow's feet, bunny lines, chin, jawline, brow lift)",
        sessions: "1 session (repeat every 3–4 months)",
        durationMinutes: 30,
      },
    ],
  },
  {
    slug: "skinvive",
    name: "SkinVive (Skin Booster Filler)",
    categorySlug: "injectables",
    shortDescription:
      "Micro-droplet hyaluronic acid booster that improves hydration, glow, fine lines, and skin smoothness. Not for contouring.",
    machine: "SkinVive — 1 ml syringe",
    areaVariants: [
      {
        area: "Full face (superficial), under-eye crepiness, perioral lines",
        sessions: "1",
        durationMinutes: 45,
      },
    ],
  },
  {
    slug: "voluma",
    name: "Voluma (Volumizing Filler)",
    categorySlug: "injectables",
    shortDescription: "Thick hyaluronic acid gel designed for deep structural contouring and lifting.",
    machine: "Voluma — 1 ml syringe",
    areaVariants: [
      { area: "Cheeks, chin, jawline, temples", sessions: "1", durationMinutes: 45 },
    ],
  },
  {
    slug: "volift",
    name: "Volift (Medium-Lift Contouring Filler)",
    categorySlug: "injectables",
    shortDescription:
      "Medium-density filler for natural contouring, smoothing folds, and subtle lift.",
    machine: "Volift — 1 ml syringe",
    areaVariants: [{ area: "Under eye", sessions: "1", durationMinutes: 45 }],
  },
  {
    slug: "volbella",
    name: "Volbella (Fine-Line & Lip Filler)",
    categorySlug: "injectables",
    shortDescription:
      "Soft, light filler — best for lip hydration and definition, under-eye hollows, and smoker's lines.",
    machine: "Volbella — 1 ml syringe",
    areaVariants: [
      { area: "Lips, under-eyes, perioral lines, tear trough", sessions: "1", durationMinutes: 45 },
    ],
  },
  {
    slug: "gfc-hair-therapy",
    name: "GFC Hair Therapy",
    categorySlug: "hair-regrowth",
    shortDescription:
      "Autologous concentrated growth factors injected into the scalp to improve density, reduce shedding, and stimulate new growth.",
    machine: "Centrifuge + microneedling pen + LLLT helmet + ozone device",
    areaVariants: [{ area: "Scalp (full or zonal)", sessions: "6", durationMinutes: 60 }],
  },
  {
    slug: "gfc-face-vampire-facial",
    name: "GFC Face (YU Skin / Vampire Facial)",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "GFC face treatment for skin rejuvenation, glow, pore tightening, and texture. The classic vampire-facial protocol.",
    machine: "Centrifuge + microneedling pen",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 60 }],
  },
  {
    slug: "mesotherapy-hair",
    name: "Mesotherapy (Hair)",
    categorySlug: "hair-regrowth",
    shortDescription:
      "Drug-based injectable therapy (Sesderma) delivering vitamins, peptides, and scalp-strengthening actives for hair quality and reduced shedding.",
    areaVariants: [{ area: "Scalp", sessions: "6", durationMinutes: 60 }],
  },
  {
    slug: "exosome-hair-therapy",
    name: "Exosome Hair Therapy",
    categorySlug: "hair-regrowth",
    shortDescription:
      "Regenerative therapy using exosomes to repair follicles, improve density, and accelerate growth. Combined with meso, microneedling, LLLT, and ozone.",
    machine: "LLLT + microneedling pen",
    areaVariants: [{ area: "Scalp", sessions: "4", durationMinutes: 60 }],
  },
  {
    slug: "pdrn-face",
    name: "PDRN (Face)",
    categorySlug: "skin-rejuvenation-and-facials",
    shortDescription:
      "Polynucleotide injectable therapy for skin healing, anti-aging, and hydration. Reduces fine lines and improves elasticity.",
    areaVariants: [{ area: "Face", sessions: "4", durationMinutes: 60 }],
  },
  {
    slug: "iv-gluta-vive",
    name: "IV Therapy — Gluta Vive",
    categorySlug: "iv-wellness",
    shortDescription:
      "Intravenous glutathione for detox, skin brightening, and cellular repair.",
    areaVariants: [{ area: "IV infusion (systemic)", sessions: "1", durationMinutes: 60 }],
  },
  {
    slug: "iv-fluvence-gluta",
    name: "IV Therapy — FluVence Gluta",
    categorySlug: "iv-wellness",
    shortDescription: "Intravenous glutathione formulation for systemic detox and brightening.",
    areaVariants: [{ area: "IV infusion (systemic)", sessions: "1", durationMinutes: 60 }],
  },
  {
    slug: "iv-dermaceutics-glutathione",
    name: "IV Therapy — Dermaceutics Glutathione",
    categorySlug: "iv-wellness",
    shortDescription: "Premium glutathione protocol for skin brightening and antioxidant support.",
    areaVariants: [{ area: "IV infusion (systemic)", sessions: "1", durationMinutes: 60 }],
  },
  {
    slug: "iv-nad-plus",
    name: "IV Therapy — NAD+",
    categorySlug: "iv-wellness",
    shortDescription:
      "Intravenous NAD+ for energy, metabolic support, and cellular repair.",
    areaVariants: [{ area: "IV infusion (systemic)", sessions: "1", durationMinutes: 60 }],
  },
  {
    slug: "co2-laser-resurfacing",
    name: "CO₂ Laser (Fractional Resurfacing)",
    categorySlug: "resurfacing",
    shortDescription:
      "Fractional ablative laser for acne scars, surgical scars, open pores, and full-face resurfacing. Creates micro-columns of injury to remodel scar tissue. Requires numbing and post-care.",
    machine: "CO₂ Laser (rented per session)",
    areaVariants: [
      {
        area: "Full face (acne scars / resurfacing), surgical scars (localized)",
        sessions: "4",
        durationMinutes: 60,
      },
    ],
  },
  {
    slug: "qr678-hair-regrowth",
    name: "QR678 Hair Regrowth Therapy",
    categorySlug: "hair-regrowth",
    shortDescription:
      "Injectable hair-growth solution that improves density, reduces shedding, and strengthens follicles. Often paired with mesotherapy, ozone, and LLLT.",
    machine: "QR678 injectable + ozone device + LLLT machine",
    areaVariants: [{ area: "Scalp", sessions: "6", durationMinutes: 60 }],
  },
  {
    slug: "prp-hair-therapy",
    name: "PRP Hair Therapy",
    categorySlug: "hair-regrowth",
    shortDescription:
      "Platelet-rich plasma injected into the scalp to stimulate dormant follicles, improve density, and reduce hair fall.",
    machine: "Centrifugal machine",
    areaVariants: [{ area: "Scalp", sessions: "6", durationMinutes: 60 }],
  },
  {
    slug: "xanthelasma-removal",
    name: "Xanthelasma Removal",
    categorySlug: "other",
    shortDescription:
      "Removal of cholesterol deposits around the eyelids using RF cautery or plasma pen. Doctor-performed procedure.",
    areaVariants: [
      { area: "Upper eyelids, lower eyelids, inner eye corners", sessions: "1", durationMinutes: 30 },
    ],
  },
  {
    slug: "cosmelan",
    name: "Cosmelan (Chemical Depigmentation Program)",
    categorySlug: "pigmentation-and-brightening",
    shortDescription:
      "Medical-grade depigmentation program for stubborn hyperpigmentation, melasma, PIH, tanning, and uneven tone. In-clinic Cosmelan 1 application plus mandatory Cosmelan 2 home care.",
    areaVariants: [
      {
        area: "Full face, jawline, cheeks, forehead",
        sessions: "1 main session + 3–6 follow-up reviews",
        durationMinutes: 60,
      },
    ],
  },
  {
    slug: "cog-threads",
    name: "Cog Threads",
    categorySlug: "skin-tightening-and-lifting",
    shortDescription:
      "Strong barbed threads inserted into deeper tissue layers to create mechanical lift and stimulate collagen over time.",
    areaVariants: [
      { area: "Jawline, cheeks, lower face, mid-face, brows", sessions: "1", durationMinutes: 60 },
    ],
  },
  {
    slug: "mono-threads",
    name: "Mono Threads (Non-Cog)",
    categorySlug: "skin-tightening-and-lifting",
    shortDescription:
      "Thin, smooth threads inserted superficially to stimulate collagen, improve texture, and mildly tighten skin.",
    areaVariants: [
      {
        area: "Under-eyes, crow's feet, neck, cheeks, fine lines, perioral area",
        sessions: "1",
        durationMinutes: 30,
      },
    ],
  },
  {
    slug: "hair-transplant-fue",
    name: "Hair Transplant (FUE)",
    categorySlug: "hair-transplant",
    shortDescription:
      "Surgical hair restoration using the FUE technique for natural hairline reconstruction and density.",
    areaVariants: [
      { area: "Scalp", sessions: "1", durationMinutes: 480 },
      { area: "Eyebrow", sessions: "1", durationMinutes: 300 },
      { area: "Beard", sessions: "1", durationMinutes: 360 },
      { area: "Mustache", sessions: "1", durationMinutes: 420 },
    ],
  },
];
