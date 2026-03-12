export interface CityData {
  slug: string;
  name: string;
  state: string;
  driveTime: string;
  isHomeBase?: boolean;
  tagline: string;
  headerIntro: string;
  intro: string;
  neighborhoods: string[];
  commonProjects: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyLinks: { slug: string; name: string }[];
  meta: { title: string; description: string };
}
