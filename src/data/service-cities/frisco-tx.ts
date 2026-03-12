import type { CityData } from './types';

export const friscoTx: CityData = {
  slug: 'frisco-tx',
  name: 'Frisco',
  state: 'TX',
  driveTime: '25-30 minutes',
  tagline: 'Serving Frisco, TX',
  headerIntro:
    'Our Wylie workshop is about 25-30 minutes from Frisco. We handle pickup and delivery throughout the city at no charge.',
  intro: `<p>
    Frisco is one of the fastest-growing cities in the country, with new neighborhoods
    going up constantly. Families moving into these homes bring a mix of new purchases and
    furniture from previous homes. Our Wylie workshop is about 25-30 minutes away, and we
    offer free pickup and delivery on every project.
  </p>
  <p>
    Whether you have a quality piece that needs a new finish to match a new space, furniture
    that was damaged during a move, or an inherited piece that needs restoration, we are
    happy to take a look and give you an honest assessment.
  </p>`,
  neighborhoods: [
    'Starwood',
    'Newman Village',
    'Phillips Creek Ranch',
    'Richwoods',
    'Hollyhock',
    'Lawler Park',
    'The Trails',
    'Panther Creek',
    'Plantation Resort',
    'Frisco Square',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural stabilization, hardware replacement, veneer repair, and careful finish matching on antique and vintage furniture.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Full surface renewal - removing old finishes and applying new stains, lacquers, or hand-rubbed oils to bring the wood back to life.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Complete reupholstery on sofas, chairs, ottomans, and dining seats with frame inspection, new padding, and fresh fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Traditional craft techniques including caning, rush seating, wood carving, welding, and hand waxing.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from Frisco?',
      answer: 'Call us at (214) 682-6371 to schedule a pickup. We drive to your Frisco home, carefully load your furniture, and bring it to our Wylie workshop about 25-30 minutes away. We deliver it back when the work is done at no charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'plano-tx', name: 'Plano' },
    { slug: 'mckinney-tx', name: 'McKinney' },
    { slug: 'allen-tx', name: 'Allen' },
    { slug: 'richardson-tx', name: 'Richardson' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Frisco, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Frisco, TX. Free pickup and delivery from our Wylie workshop. Family-owned since 1980.',
  },
};
