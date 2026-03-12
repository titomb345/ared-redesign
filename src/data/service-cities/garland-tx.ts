import type { CityData } from './types';

export const garlandTx: CityData = {
  slug: 'garland-tx',
  name: 'Garland',
  state: 'TX',
  driveTime: '15-20 minutes',
  tagline: 'Serving Garland, TX',
  headerIntro:
    'Garland is one of our closest service areas, just 15-20 minutes from our Wylie workshop. Free pickup and delivery throughout the city.',
  intro: `<p>
    Garland is right next door to Wylie, just 15-20 minutes from our workshop. From the
    older homes near downtown to the newer developments in North Garland, we serve the
    entire city with free pickup and delivery.
  </p>
  <p>
    Garland is home to a diverse community, and we see a wide variety of furniture styles
    and traditions. From ornate carved pieces to classic American dining sets, we bring the
    same level of care to every project. If you have a piece worth saving, we will tell you
    honestly what it needs and what it will cost.
  </p>`,
  neighborhoods: [
    'Downtown Garland',
    'North Garland',
    'South Garland',
    'Firewheel',
    'Buckingham',
    'Eastern Hills',
    'Spring Creek',
    'Duck Creek',
    'Gatewood',
    'Club Hill',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural repair, hardware replacement, veneer work, and careful finish matching to preserve the character and history of older pieces.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Complete surface renewal - stripping, sanding, staining, and sealing on dining tables, dressers, desks, and cabinets.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Full strip-down and rebuild on sofas, chairs, and dining seats including frame repair, spring replacement, padding, and new fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Traditional techniques including caning, rush work, wood carving, welding, and hand waxing for pieces requiring specialized craftsmanship.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from Garland?',
      answer: 'Call us at (214) 682-6371 to schedule a time. Garland is right next to Wylie, so pickup and delivery are easy to arrange. We carefully load your furniture, bring it to our workshop, and deliver it back when the work is done. No charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'wylie-tx', name: 'Wylie' },
    { slug: 'rockwall-tx', name: 'Rockwall' },
    { slug: 'richardson-tx', name: 'Richardson' },
    { slug: 'dallas-tx', name: 'Dallas' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Garland, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Garland, TX. Free pickup and delivery from our Wylie workshop, just 15-20 minutes away.',
  },
};
