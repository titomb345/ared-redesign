import type { CityData } from './types';

export const planoTx: CityData = {
  slug: 'plano-tx',
  name: 'Plano',
  state: 'TX',
  driveTime: '15-20 minutes',
  tagline: 'Serving Plano, TX',
  headerIntro:
    'Our Wylie workshop is just 15-20 minutes from Plano. Free pickup and delivery on every project, no matter the size.',
  intro: `<p>
    Plano is one of the largest cities in Collin County and just 15-20 minutes from our
    Wylie workshop. Many Plano neighborhoods were built during the 1980s and 1990s housing
    boom, which means the homes here often contain solid wood furniture from that era -
    dining sets, china cabinets, bedroom suites, and upholstered pieces that are still
    structurally sound but showing their age.
  </p>
  <p>
    Rather than replacing a quality piece with something from a chain store, a refinish
    or reupholster can give it another couple of decades. We offer free pickup and delivery
    throughout Plano and will give you an honest assessment of what your piece needs.
  </p>`,
  neighborhoods: [
    'West Plano',
    'East Plano',
    'Legacy West',
    'Willow Bend',
    'Lakeside at Plano',
    'Kings Ridge',
    'Deerfield',
    'Hunters Glen',
    'Shepards Glen',
    'Old Town Plano',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Careful structural repair, veneer work, and finish matching that preserves the original character and patina of older pieces.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Complete surface renewal - stripping, sanding, staining, and sealing dining tables, dressers, desks, and other wood furniture.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Strip-down, frame inspection, spring and padding replacement, and new fabric on sofas, armchairs, and dining chairs.',
    },
    {
      title: 'Specialty work',
      description:
        'Traditional craft techniques including caning, rush work, wood carving, welding, and hand waxing.',
    },
  ],
  faqs: [
    {
      question: 'Do you pick up furniture from Plano for free?',
      answer: 'Yes. We schedule a time that works for you, carefully wrap and transport your piece to our Wylie workshop about 15-20 minutes away, and deliver it back when it is finished. No charge for pickup or delivery.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'allen-tx', name: 'Allen' },
    { slug: 'richardson-tx', name: 'Richardson' },
    { slug: 'frisco-tx', name: 'Frisco' },
    { slug: 'wylie-tx', name: 'Wylie' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Plano, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Plano, TX. Free pickup and delivery from our Wylie workshop, just 15-20 minutes away.',
  },
};
