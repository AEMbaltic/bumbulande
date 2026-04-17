import inflatable1 from "@/assets/inflatable-1.png";
import inflatable2 from "@/assets/inflatable-2.png";
import inflatable3 from "@/assets/inflatable-3.png";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  pricePerDay: number;
  image: string;
  thumbnails: string[];
  badge?: string;
  specs: {
    size: string;
    age: string;
    capacity: string;
    power: string;
    space: string;
  };
};

export const products: Product[] = [
  {
    slug: "lego-piedzivojumu-trase",
    name: "LEGO piedzīvojumu trase",
    tagline: "Garākā šķēršļu josla — slidkalniņš, tuneļi, lielas figūras",
    pricePerDay: 290,
    image: inflatable1,
    thumbnails: [inflatable1, inflatable2, inflatable3],
    badge: "Populārākais",
    specs: {
      size: "18m × 4m × 5m",
      age: "4–14 gadi",
      capacity: "Līdz 10 bērniem",
      power: "Jā (220V)",
      space: "20m × 6m",
    },
  },
  {
    slug: "krasaina-pils-ar-slidkalninu",
    name: "Krāsainā pils ar slidkalniņu",
    tagline: "Klasiska piepūšamā pils ar augstu slidkalniņu",
    pricePerDay: 220,
    image: inflatable2,
    thumbnails: [inflatable2, inflatable1, inflatable3],
    specs: {
      size: "15m × 4m × 4.5m",
      age: "3–12 gadi",
      capacity: "Līdz 8 bērniem",
      power: "Jā (220V)",
      space: "18m × 6m",
    },
  },
  {
    slug: "piraatu-skersla-josla",
    name: "Piedzīvojumu šķēršļu josla",
    tagline: "Šķēršļi, tuneļi un finiša slidkalniņš — sacenšas divi vienlaikus",
    pricePerDay: 250,
    image: inflatable3,
    thumbnails: [inflatable3, inflatable1, inflatable2],
    badge: "Jauns",
    specs: {
      size: "16m × 3.5m × 4m",
      age: "5–14 gadi",
      capacity: "Līdz 6 bērniem",
      power: "Jā (220V)",
      space: "18m × 5m",
    },
  },
];
