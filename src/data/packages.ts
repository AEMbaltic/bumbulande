export type Package = {
  name: string;
  price: number;
  duration: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Mazā ballīte",
    price: 199,
    duration: "4 stundas",
    features: [
      "1 piepūšamā atrakcija pēc izvēles",
      "Līdz 10 bērniem",
      "Bezmaksas piegāde Rīgā",
      "Uzstādīšana un demontāža",
      "Dezinficēta atrakcija",
    ],
  },
  {
    name: "Klasiskā ballīte",
    price: 349,
    duration: "6 stundas",
    highlight: true,
    badge: "Populārākais",
    features: [
      "1 atrakcija + galds un 10 krēsli bērniem",
      "Līdz 15 bērniem",
      "Bezmaksas piegāde Rīgā un 30 km rādiusā",
      "Uzstādīšana, demontāža un uzraudzība",
      "Dāvanu maisiņi (10 gab.)",
      "Pirmās palīdzības komplekts uz vietas",
    ],
  },
  {
    name: "Lielā svētku diena",
    price: 599,
    duration: "8 stundas",
    features: [
      "2 atrakcijas pēc izvēles",
      "Līdz 25 bērniem",
      "Bezmaksas piegāde visā Latvijā",
      "Tematiskās dekorācijas",
      "Animators 2 stundas",
      "Foto ar atrakcijām",
    ],
  },
];
