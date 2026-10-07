export const BRAND = { top: "DESIGN", bottom: "EXPLODE!!!", name: "DESIGN EXPLODE" } as const;

export const INSPIRATION = {
  label: "Inspired by Design Bomb",
  host: "designbomb.it",
  url: "https://www.designbomb.it/",
} as const;

const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  paint: u("photo-1513364776144-60967b0f800f"),
  color: u("photo-1541701494587-cb58502866ab"),
  abstract: u("photo-1550684848-fac1c5b4e853"),
  blue: u("photo-1558591710-4b4a1ae0f04d"),
  poster: u("photo-1561214115-f2f134cc4912"),
  studio: u("photo-1522071820081-009f0129c71c"),
} as const;

export type Img = { src: string; alt: string; caption: string; credit: string };

const img = (src: string, alt: string, caption: string): Img => ({
  src,
  alt,
  caption,
  credit: "Unsplash",
});

export const NAV = [
  { label: "PROGRAM", href: "/program" },
  { label: "WORKSHOPS", href: "/workshops" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/about" },
  { label: "SHOP", href: "/#shop" },
] as const;

export const LINEUP = [
  {
    number: "01",
    name: "VOID STUDIO",
    role: "Creative Technology",
    category: "INTERACTIVE",
    image: img(IMG.abstract, "Abstract gradient light study", "Light study / void"),
  },
  {
    number: "02",
    name: "AFTERIMAGE",
    role: "Art Direction",
    category: "VISUAL",
    image: img(IMG.paint, "Layered paint on a studio wall", "Layered pigment"),
  },
  {
    number: "03",
    name: "NOISE DEPT.",
    role: "Motion & Identity",
    category: "MOTION",
    image: img(IMG.color, "Colorful paint texture", "Texture / noise"),
  },
  {
    number: "04",
    name: "COMMON SHAPES",
    role: "Graphic Design",
    category: "PRINT",
    image: img(IMG.poster, "Poster installation with bold shapes", "Poster wall"),
  },
  {
    number: "05",
    name: "FUTURE FORM",
    role: "Interactive Art",
    category: "3D",
    image: img(IMG.blue, "Abstract blue digital form", "Digital sculpture"),
  },
  {
    number: "06",
    name: "MONOCHROME CLUB",
    role: "Digital Culture",
    category: "CULTURE",
    image: img(IMG.studio, "Creative team working in a studio", "Studio hours"),
  },
] as const;

export type Category = "TALK" | "WORKSHOP" | "PARTY" | "EXHIBITION";
export type Day = "FRI" | "SAT" | "SUN";

export const CATEGORY_BG: Record<Category, string> = {
  TALK: "bg-aqua",
  WORKSHOP: "bg-butter",
  PARTY: "bg-tangerine",
  EXHIBITION: "bg-lilac",
};

export const EVENTS: {
  id: string;
  day: Day;
  time: string;
  title: string;
  location: string;
  category: Category;
}[] = [
  {
    id: "e1",
    day: "FRI",
    time: "18:30 — 21:00",
    title: "Opening Signal",
    location: "Main Hall",
    category: "TALK",
  },
  {
    id: "e2",
    day: "FRI",
    time: "21:00 — 23:30",
    title: "After Hours",
    location: "Noise Room",
    category: "PARTY",
  },
  {
    id: "e3",
    day: "SAT",
    time: "10:00 — 12:00",
    title: "Visual Systems",
    location: "Studio A",
    category: "WORKSHOP",
  },
  {
    id: "e4",
    day: "SAT",
    time: "14:00 — 16:00",
    title: "Creative Coding",
    location: "Lab 02",
    category: "WORKSHOP",
  },
  {
    id: "e5",
    day: "SAT",
    time: "17:00 — 22:00",
    title: "Loud Walls",
    location: "East Gallery",
    category: "EXHIBITION",
  },
  {
    id: "e6",
    day: "SUN",
    time: "16:00 — 18:00",
    title: "Future Interfaces",
    location: "Main Hall",
    category: "TALK",
  },
];

export const PROJECTS = [
  {
    number: "01",
    title: "SIGNAL",
    kind: "Brand Identity",
    year: "2026",
    caption: "A flickering identity system for a radio collective.",
    image: img(IMG.poster, "Poster set for a brand identity", "Signal / identity posters"),
  },
  {
    number: "02",
    title: "NIGHT SHIFT",
    kind: "Digital Experience",
    year: "2025",
    caption: "A website that only wakes up after sunset.",
    image: img(IMG.blue, "Blue abstract digital scene", "Night Shift / interface study"),
  },
  {
    number: "03",
    title: "FORM",
    kind: "Interactive Installation",
    year: "2025",
    caption: "Soft geometry that reacts to footsteps.",
    image: img(IMG.abstract, "Abstract light installation", "Form / installation view"),
  },
  {
    number: "04",
    title: "NOISE",
    kind: "Motion System",
    year: "2024",
    caption: "Typography that breaks, then reassembles itself.",
    image: img(IMG.color, "Colorful texture for motion work", "Noise / motion frames"),
  },
  {
    number: "05",
    title: "ORBIT",
    kind: "Digital Art",
    year: "2024",
    caption: "Slow loops of color for a gallery ceiling.",
    image: img(IMG.paint, "Painted surface with strong color", "Orbit / still"),
  },
] as const;

export const GALLERY: (Img & { span: string; ratio: string })[] = [
  {
    ...img(IMG.paint, "Layered paint in a creative studio", "01 — Visual research"),
    span: "md:col-span-7",
    ratio: "aspect-[4/3]",
  },
  {
    ...img(IMG.poster, "Poster wall with experimental typography", "02 — Poster wall"),
    span: "md:col-span-5",
    ratio: "aspect-[3/4]",
  },
  {
    ...img(IMG.abstract, "Abstract gradient light", "03 — Night study"),
    span: "md:col-span-4",
    ratio: "aspect-square",
  },
  {
    ...img(IMG.studio, "Team working at a long studio table", "04 — Studio hours"),
    span: "md:col-span-8",
    ratio: "aspect-[16/9]",
  },
  {
    ...img(IMG.color, "Saturated paint texture", "05 — Pigment"),
    span: "md:col-span-6",
    ratio: "aspect-[5/4]",
  },
  {
    ...img(IMG.blue, "Blue abstract digital form", "06 — Digital sculpture"),
    span: "md:col-span-6",
    ratio: "aspect-[5/4]",
  },
];

export const COLLAGE = [
  {
    id: "c1",
    kind: "img",
    img: IMG.color,
    alt: "Color texture",
    cls: "left-[4%] top-[8%] h-56 w-44 -rotate-6",
  },
  { id: "c2", kind: "sticker", text: "LOUD", cls: "left-[28%] top-[6%] bg-tangerine text-pine rotate-12" },
  { id: "c3", kind: "img", img: IMG.poster, alt: "Poster", cls: "left-[40%] top-[22%] h-64 w-48 rotate-3" },
  { id: "c4", kind: "star", cls: "left-[68%] top-[8%] text-butter" },
  { id: "c5", kind: "img", img: IMG.blue, alt: "Blue form", cls: "left-[72%] top-[28%] h-52 w-72 -rotate-2" },
  { id: "c6", kind: "sticker", text: "TYPE!", cls: "left-[12%] top-[55%] bg-aqua text-pine -rotate-12" },
  { id: "c7", kind: "img", img: IMG.paint, alt: "Paint", cls: "left-[24%] top-[60%] h-48 w-64 rotate-6" },
  { id: "c8", kind: "star", cls: "left-[58%] top-[66%] text-lilac" },
  { id: "c9", kind: "sticker", text: "NOW", cls: "left-[82%] top-[72%] bg-butter text-pine rotate-6" },
] as const;

export const SHOP = [
  {
    name: "EXPLODE TEE",
    price: "$32",
    image: img(IMG.color, "Colorful fabric texture", "Tee / print 01"),
    tone: "bg-tangerine",
  },
  {
    name: "STICKER PACK",
    price: "$9",
    image: img(IMG.poster, "Stickers and posters", "Sticker pack"),
    tone: "bg-aqua",
  },
  {
    name: "POSTER 01",
    price: "$24",
    image: img(IMG.abstract, "Abstract poster artwork", "Poster 01"),
    tone: "bg-lilac",
  },
  {
    name: "CAP",
    price: "$28",
    image: img(IMG.paint, "Paint swatch for cap colorway", "Cap colorway"),
    tone: "bg-butter",
  },
  {
    name: "DIGITAL ZINE",
    price: "$6",
    image: img(IMG.blue, "Digital zine cover art", "Zine cover"),
    tone: "bg-aqua",
  },
] as const;

export const WORKSHOPS = [
  {
    title: "Creative Coding",
    description: "Sketch generative visuals with code, from noise fields to particle systems.",
    duration: "2 h",
    level: "Intermediate",
    mentor: "Rani Aditya",
    image: img(IMG.abstract, "Generative light study", "Lab 02"),
  },
  {
    title: "Typography Systems",
    description: "Build a flexible type system that survives posters, screens and stickers.",
    duration: "3 h",
    level: "Beginner",
    mentor: "Lio Marten",
    image: img(IMG.poster, "Poster typography", "Studio A"),
  },
  {
    title: "Motion Identity",
    description: "Design logos that move: timing, rhythm and loops for brand systems.",
    duration: "2.5 h",
    level: "Intermediate",
    mentor: "Sela Noor",
    image: img(IMG.color, "Colorful motion frames", "Studio B"),
  },
  {
    title: "Experimental 3D",
    description: "Turn simple primitives into digital sculptures with light and material.",
    duration: "3 h",
    level: "Advanced",
    mentor: "Dika Prama",
    image: img(IMG.blue, "Abstract 3D form", "Lab 01"),
  },
  {
    title: "Digital Collage",
    description: "Cut, layer and distort images into loud, personal posters.",
    duration: "2 h",
    level: "Beginner",
    mentor: "Mira Lestari",
    image: img(IMG.paint, "Layered paint collage", "Studio A"),
  },
];

export const VALUES = [
  { title: "Be loud", body: "Quiet design has its place. This is not it." },
  { title: "Stay structured", body: "Chaos reads better when a grid holds it up." },
  { title: "Share the process", body: "We show the sketches, the failures and the glue." },
];

export const DISCIPLINES = [
  "ART",
  "MOTION",
  "TYPE",
  "3D",
  "INTERACTION",
  "AI",
  "BRANDING",
  "CODE",
  "IMAGE",
  "SOUND",
] as const;

export const TEAM = [
  { name: "Rani Aditya", role: "Festival Director" },
  { name: "Lio Marten", role: "Creative Lead" },
  { name: "Sela Noor", role: "Programme Curator" },
  { name: "Dika Prama", role: "Technical Producer" },
] as const;
