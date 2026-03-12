import type { CityData } from './types';

export const wylieTx: CityData = {
  slug: 'wylie-tx',
  name: 'Wylie',
  state: 'TX',
  driveTime: '',
  isHomeBase: true,
  tagline: 'Our Home Base',
  headerIntro:
    'Our workshop is right here in Wylie at 10 Regency Dr Bldg B. Drop off your piece in person, or we will pick it up from your Wylie home at no charge.',
  intro: `<p>
    We have been working out of our Wylie shop since we first opened our doors in 1980.
    This is where every restoration happens - from the initial assessment to the final coat
    of finish. When you bring your piece to us, you are bringing it to the same workbenches
    and tools we have used for over 45 years. There is no middleman, no subcontracting, and
    no shipping your furniture to a facility you have never seen.
  </p>
  <p>
    Living in Wylie means you do not have to worry about pickup and delivery logistics.
    You can drop off your furniture during business hours or, if the piece is too large
    or heavy to move yourself, we will come get it. We are your neighbors, and we treat
    your furniture the way we would treat our own.
  </p>`,
  neighborhoods: [
    'Downtown Wylie',
    'Birmingham Farms',
    'Alanis Crossing',
    'Stone Ranch',
    'Westgate',
    'Sage Creek',
    'Westgate Station',
    'Inspiration',
    'Woodbridge',
    'Kreymer',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural repair, hardware replacement, veneer work, and finish matching using authentic materials and techniques true to the original period.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Stripping old finishes and applying new stains, lacquers, or hand-rubbed oils to bring out the natural beauty of the wood.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Complete reupholstery on sofas, chairs, ottomans, chaises, and slip seats including frame repair, springs, padding, and new fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush seating, wood carving, welding, and hand waxing - traditional craft techniques for pieces that need specialized attention.',
    },
  ],
  faqs: [
    {
      question: 'Can I visit the workshop to see my furniture during restoration?',
      answer: 'Yes. Our shop at 10 Regency Dr Bldg B is open during business hours, Monday through Friday 9am to 5pm and Saturday 9am to 3:30pm. You are welcome to stop by and check on your piece anytime.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'You can bring your piece to the shop, call us at (214) 682-6371, or send us a message through our contact form. Estimates are always free.',
    },
    {
      question: 'Is it worth repairing my furniture or should I just buy new?',
      answer: 'In most cases, repairing solid wood furniture costs less than replacing it with something of equal quality. If the bones are good, repair almost always makes more sense. We will be honest with you if a piece is not worth the investment.',
    },
  ],
  nearbyLinks: [
    { slug: 'garland-tx', name: 'Garland' },
    { slug: 'allen-tx', name: 'Allen' },
    { slug: 'rockwall-tx', name: 'Rockwall' },
    { slug: 'plano-tx', name: 'Plano' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Wylie, TX | ARED',
    description:
      'ARED Furniture Repair is located in Wylie, TX. Visit our workshop at 10 Regency Dr Bldg B for expert antique restoration, refinishing, and custom upholstery.',
  },
};
