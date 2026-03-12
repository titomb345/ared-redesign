import type { CityData } from './types';

export const fortWorthTx: CityData = {
  slug: 'fort-worth-tx',
  name: 'Fort Worth',
  state: 'TX',
  driveTime: '55-65 minutes',
  tagline: 'Serving Fort Worth, TX',
  headerIntro:
    'We serve Fort Worth with free pickup and delivery. The drive to our Wylie workshop takes about an hour, but the results are worth the wait.',
  intro: `<p>
    Fort Worth is the farthest regular stop in our service area, about 55-65 minutes from
    our Wylie workshop. Despite the distance, we offer the same free pickup and delivery
    that we provide to every city we serve. No extra charge, no matter where in Fort Worth
    you are.
  </p>
  <p>
    The city has a deep respect for craftsmanship and heritage, from the Stockyards to the
    Cultural District to the historic neighborhoods of Fairmount and Ryan Place. If you have
    a piece worth restoring, give us a call and we will give you an honest assessment.
  </p>`,
  neighborhoods: [
    'Fairmount',
    'Ryan Place',
    'Arlington Heights',
    'Ridglea',
    'TCU Area',
    'Westover Hills',
    'Tanglewood',
    'Cultural District',
    'Stockyards Area',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural stabilization, hardware replacement, veneer repair, and authentic finish matching using materials and techniques true to the original period.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Full surface renewal on wood furniture - stripping old finishes, repairing damage, and applying new stains and protective coats.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Complete reupholstery on sofas, chairs, and ottomans including frame repair, spring and webbing replacement, new padding, and fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush seating, wood carving, metal frame welding, and hand waxing - traditional craft techniques for pieces that need specialized care.',
    },
  ],
  faqs: [
    {
      question: 'Fort Worth is over an hour from Wylie. Is pickup really free?',
      answer: 'Yes. Fort Worth is at the edge of our regular service area, but there is never a charge for pickup or delivery, no matter where you are in Fort Worth.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'dallas-tx', name: 'Dallas' },
    { slug: 'frisco-tx', name: 'Frisco' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Fort Worth, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Fort Worth, TX. Free pickup and delivery from our Wylie workshop. Over 45 years of experience.',
  },
};
