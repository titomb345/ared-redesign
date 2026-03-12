import type { CityData } from './types';

export const allenTx: CityData = {
  slug: 'allen-tx',
  name: 'Allen',
  state: 'TX',
  driveTime: '15-20 minutes',
  tagline: 'Serving Allen, TX',
  headerIntro:
    'Allen is just 15-20 minutes from our Wylie workshop. Free pickup and delivery on every project, no matter the size.',
  intro: `<p>
    Allen sits right between Plano and McKinney in Collin County, just 15-20 minutes from
    our Wylie shop. Many of the homes in Allen were built during the rapid growth of the
    late 1990s and 2000s, and the furniture that filled those homes is now 20 to 30 years
    old. The frames are still solid, but finishes are worn and fabric has seen better days.
  </p>
  <p>
    Rather than hauling good furniture to the curb, a refinish or reupholster gives those
    pieces another couple of decades at a fraction of the cost of buying new. We offer
    free pickup and delivery throughout Allen.
  </p>`,
  neighborhoods: [
    'Twin Creeks',
    'The Villages of Allen',
    'Ridgeview',
    'Stacy Ridge',
    'Waterford Parks',
    'Montgomery Farm',
    'Shaddock Park',
    'Watters Crossing',
    'Star Creek',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural repair, veneer work, hardware replacement, and finish matching to preserve the original character of antique pieces.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Complete surface renewal on dining tables, dressers, desks, and cabinets - stripping, sanding, staining, and sealing.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Full strip-down and rebuild on sofas, armchairs, and dining chairs including frame repair, new springs, padding, and fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush work, custom wood carving, metal frame welding, and hand waxing for pieces needing traditional craftsmanship.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from Allen?',
      answer: 'Call us at (214) 682-6371 to schedule a time. We drive to your Allen home, carefully load your furniture, and bring it to our Wylie workshop about 15-20 minutes away. We deliver it back when the work is done at no charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'plano-tx', name: 'Plano' },
    { slug: 'mckinney-tx', name: 'McKinney' },
    { slug: 'garland-tx', name: 'Garland' },
    { slug: 'wylie-tx', name: 'Wylie' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Allen, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Allen, TX. Free pickup and delivery from our Wylie workshop, just 15-20 minutes away.',
  },
};
