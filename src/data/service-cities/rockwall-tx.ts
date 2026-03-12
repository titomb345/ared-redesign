import type { CityData } from './types';

export const rockwallTx: CityData = {
  slug: 'rockwall-tx',
  name: 'Rockwall',
  state: 'TX',
  driveTime: '10-15 minutes',
  tagline: 'Serving Rockwall, TX',
  headerIntro:
    'Rockwall is just 10-15 minutes from our Wylie workshop, right across the lake. Free pickup and delivery on every project.',
  intro: `<p>
    Rockwall sits just across Lake Ray Hubbard from our Wylie workshop, making it one of
    the closest cities we serve. The drive takes barely 10 minutes, and we offer free
    pickup and delivery on every project regardless of size.
  </p>
  <p>
    The city has a mix of established neighborhoods near the historic downtown square and
    newer lakefront developments. Rockwall's downtown square has a handful of antique shops
    and consignment stores worth browsing. If you find something with potential but it needs
    work, bring it to us and we will tell you honestly whether restoration makes sense for
    the piece.
  </p>`,
  neighborhoods: [
    'Chandlers Landing',
    'Stone Creek Estates',
    'The Shores',
    'Dalton Ranch',
    'Highland Meadows',
    'Sonoma Verde',
    'Tubbs Addition',
    'Lake Rockwall Estates',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Structural repair, hardware replacement, veneer work, and careful finish matching to preserve the character of older pieces.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Complete surface renewal on dining tables, dressers, desks, and other wood furniture. We strip, sand, stain, and seal.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Full strip-down, frame inspection, spring and padding replacement, and new fabric on sofas, chairs, and dining seats.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush seating, wood carving, welding, and hand waxing for pieces that need traditional craft techniques.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from Rockwall?',
      answer: 'Give us a call at (214) 682-6371 or send us a message through our contact form. Once you approve the estimate, we schedule a pickup at your Rockwall home, bring the piece to our Wylie workshop just across the lake, and deliver it back when the work is done. No charge for the trip.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'wylie-tx', name: 'Wylie' },
    { slug: 'garland-tx', name: 'Garland' },
    { slug: 'dallas-tx', name: 'Dallas' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Rockwall, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Rockwall, TX. Free pickup and delivery from our Wylie workshop, just across the lake.',
  },
};
