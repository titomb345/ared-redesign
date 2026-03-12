import type { CityData } from './types';

export const mckinneyTx: CityData = {
  slug: 'mckinney-tx',
  name: 'McKinney',
  state: 'TX',
  driveTime: '20-25 minutes',
  tagline: 'Serving McKinney, TX',
  headerIntro:
    'McKinney is just 20-25 minutes from our Wylie workshop. We pick up your furniture, do the work, and deliver it back to your door at no extra charge.',
  intro: `<p>
    McKinney has one of the best-preserved historic downtowns in Texas, and the people who
    live here tend to appreciate things that are built to last. The city has grown quickly
    over the past decade, with new neighborhoods spreading north and west, but the older
    parts of town are full of homes with furniture that has real history.
  </p>
  <p>
    The antique shops along the downtown square are a great source for quality pieces that
    just need some professional attention. If you find something with potential, bring it
    to us and we will tell you honestly whether restoration makes sense and what it will
    take. Free pickup and delivery throughout McKinney.
  </p>`,
  neighborhoods: [
    'Historic Downtown',
    'Stonebridge Ranch',
    'Trinity Falls',
    'Adriatica',
    'Craig Ranch',
    'Eldorado Heights',
    'Tucker Hill',
    'Twin Creeks',
    'Painted Tree',
    'Westridge',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Preserving the character of older pieces with structural repair, hardware replacement, veneer work, and authentic finish matching.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Stripping worn or damaged finishes and applying new stains, lacquers, or oils to restore the natural beauty of the wood.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Full reupholstery on sofas, chairs, and dining seats - frame repair, spring replacement, new padding, and fresh fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Traditional techniques including caning, rush seating, wood carving, welding, and hand waxing for pieces that need specialized care.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from McKinney?',
      answer: 'Call us at (214) 682-6371 to schedule a pickup. We drive to your McKinney home, carefully load your furniture, and bring it to our Wylie workshop about 20-25 minutes away. When the work is done, we deliver it back at no charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'allen-tx', name: 'Allen' },
    { slug: 'frisco-tx', name: 'Frisco' },
    { slug: 'wylie-tx', name: 'Wylie' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in McKinney, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving McKinney, TX. Free pickup and delivery from our Wylie workshop, just 20-25 minutes away.',
  },
};
