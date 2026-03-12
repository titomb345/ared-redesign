import type { CityData } from './types';

export const richardsonTx: CityData = {
  slug: 'richardson-tx',
  name: 'Richardson',
  state: 'TX',
  driveTime: '20-25 minutes',
  tagline: 'Serving Richardson, TX',
  headerIntro:
    'Richardson is about 20-25 minutes from our Wylie workshop. Free pickup and delivery on every project.',
  intro: `<p>
    Richardson has a character that sets it apart from the newer suburbs. Many of its
    neighborhoods were established in the 1960s and 1970s, which means the homes here
    often contain furniture from that same era - solid wood pieces built with real
    craftsmanship that you simply cannot find in stores anymore.
  </p>
  <p>
    Our Wylie workshop is about 20-25 minutes from Richardson. We offer free pickup and
    delivery on every project, and we will give you an honest assessment of what your
    piece needs before any work begins.
  </p>`,
  neighborhoods: [
    'Canyon Creek',
    'Cottonwood Heights',
    'Mimosa Place',
    'Northrich',
    'Prairie Creek',
    'Reservation',
    'Richardson Heights',
    'Sherrill Park',
    'Telecom Corridor',
    'University Village',
  ],
  commonProjects: [
    {
      title: 'Antique restoration',
      description:
        'Preserving the character of older furniture with structural repair, hardware replacement, veneer work, and period-appropriate finishes.',
    },
    {
      title: 'Refinishing & refurbishing',
      description:
        'Stripping worn finishes and applying new stains and protective topcoats on dining tables, dressers, desks, and other wood furniture.',
    },
    {
      title: 'Upholstery & reupholstery',
      description:
        'Full reupholstery on sofas, armchairs, ottomans, and dining chairs - frame repair, springs, padding, and new fabric.',
    },
    {
      title: 'Specialty work',
      description:
        'Caning, rush seating, custom wood carving, metal frame welding, and hand waxing for pieces that need specialized attention.',
    },
  ],
  faqs: [
    {
      question: 'How does pickup and delivery work from Richardson?',
      answer: 'Call us at (214) 682-6371 to schedule a time. We drive to your Richardson home, carefully load your furniture, and bring it to our Wylie workshop about 20-25 minutes away. We deliver it back when the work is done at no charge.',
    },
    {
      question: 'How do I get a free estimate?',
      answer: 'Call us at (214) 682-6371 or send us a message through our contact form. We will give you an honest assessment of what the piece needs and what it will cost. Estimates are always free.',
    },
  ],
  nearbyLinks: [
    { slug: 'plano-tx', name: 'Plano' },
    { slug: 'dallas-tx', name: 'Dallas' },
    { slug: 'garland-tx', name: 'Garland' },
  ],
  meta: {
    title: 'Furniture Repair & Antique Restoration in Richardson, TX | ARED',
    description:
      'Expert furniture repair and antique restoration serving Richardson, TX. Free pickup and delivery from our Wylie workshop, about 20-25 minutes away.',
  },
};
