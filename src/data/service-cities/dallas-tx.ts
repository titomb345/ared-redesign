import type { CityData } from './types';

export const dallasTx: CityData = {
  slug: 'dallas-tx',
  name: 'Dallas',
  state: 'TX',
  driveTime: '30-40 minutes',
  tagline: 'Serving Dallas, TX',
  headerIntro:
    'We serve all of Dallas with free pickup and delivery. Your furniture makes the 30-40 minute trip to our Wylie workshop, gets restored by hand, and comes back looking better than new.',
  intro: `<p>
    Dallas is the largest city in our service area, about 30-40 minutes from our Wylie
    workshop depending on where you are. From the older estates in Highland Park and
    Lakewood to the newer builds in North Dallas and Far North Dallas, the city is full
    of furniture worth saving.
  </p>
  <p>
    Dallas also has a strong antique and vintage scene, with shops along Dragon Street, in
    the Design District, and throughout the city. If you find a piece at a shop, estate
    sale, or flea market that needs work, bring it to us and we will give you an honest
    assessment of what it needs and what it will cost.
  </p>`,
  neighborhoods: [
    'Highland Park',
    'University Park',
    'Lakewood',
    'Lake Highlands',
    'North Dallas',
    'Far North Dallas',
    'Uptown',
    'Oak Lawn',
    'Preston Hollow',
    'White Rock',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural stabilization, hardware replacement, veneer repair, and period-appropriate finish matching on antique and vintage furniture.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Full surface renewal on wood furniture - stripping old finishes, repairing damage, and applying new stains and protective topcoats.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Complete reupholstery including frame repair, spring and webbing replacement, new padding, and fabric application on all seating.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush seating, custom wood carving, metal frame welding, and hand waxing for pieces requiring traditional techniques.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup work from Dallas?',
      answer: 'We schedule a pickup window that works for you. We carefully wrap and protect your piece for the 30-40 minute drive to our Wylie workshop. Delivery back to your Dallas home is included at no extra charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'richardson-tx', name: 'Richardson' },
    { slug: 'garland-tx', name: 'Garland' },
    { slug: 'fort-worth-tx', name: 'Fort Worth' },
    { slug: 'plano-tx', name: 'Plano' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Dallas, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Dallas, TX. Free pickup and delivery from our Wylie workshop. Family-owned since 1980.',
  },
};
