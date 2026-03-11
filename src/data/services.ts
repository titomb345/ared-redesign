export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    name: 'Antique Furniture Restoration',
    slug: 'restoration',
    shortDescription:
      'Careful restoration that preserves the original character and patina of your treasured antiques.',
    longDescription:
      'Our restoration work begins with a thorough assessment of each piece. We understand that every antique tells a story, and our goal is to preserve that narrative while returning structural integrity and beauty. From repairing loose joints and replacing missing hardware to carefully matching original finishes, we treat each piece with the respect it deserves. Our team uses traditional joinery techniques alongside modern conservation methods to ensure your furniture will last another century.',
    features: [
      'Structural repair and stabilization',
      'Period-accurate hardware replacement',
      'Veneer repair and replacement',
      'Color matching and touch-up',
      'Conservation-grade materials',
      'Full documentation of work performed',
    ],
    icon: 'M12 3L2 12h3v8h14v-8h3L12 3zm0 3.5L18 12h-2v6H8v-6H6l6-5.5z',
  },
  {
    name: 'Custom Upholstery & Repair',
    slug: 'upholstery',
    shortDescription:
      'Expert reupholstering using premium fabrics and time-tested techniques for lasting comfort.',
    longDescription:
      'Whether you are looking to breathe new life into a family heirloom or update a favorite armchair, our upholstery team delivers exceptional results. We strip each piece down to the frame, inspect and repair the structure, replace worn springs and padding, and apply your chosen fabric with precision. We carry a wide selection of high-quality fabrics, or you are welcome to provide your own. From classic tufting to modern clean lines, we handle every style with confidence.',
    features: [
      'Full strip-down and frame inspection',
      'Spring and webbing replacement',
      'Foam and padding upgrades',
      'Extensive fabric selection available',
      'Custom cushion fabrication',
      'Decorative trim and nailhead finishing',
    ],
    icon: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z',
  },
  {
    name: 'Refinishing & Refurbishing',
    slug: 'refinishing',
    shortDescription:
      'Complete surface renewal that brings out the natural beauty of the wood grain.',
    longDescription:
      'Our refinishing process transforms tired, damaged surfaces into stunning showcases of natural wood beauty. We carefully strip old finishes using methods appropriate for each piece, whether that means chemical strippers for delicate antiques or careful sanding for more robust items. After surface preparation, we apply hand-rubbed stains and protective topcoats that highlight the grain while providing lasting protection. We work with lacquer, polyurethane, shellac, tung oil, and wax finishes, choosing the right one for your piece and its intended use.',
    features: [
      'Complete finish removal',
      'Wood grain restoration',
      'Custom color matching and staining',
      'Hand-rubbed oil and wax finishes',
      'Lacquer and polyurethane topcoats',
      'Water ring and heat damage repair',
      'Veneer repair for scratches, lifting, and missing sections',
    ],
    icon: 'M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V3h8v5.17c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3H7z',
  },
  {
    name: 'Specialty Work',
    slug: 'specialty',
    shortDescription:
      'Specialized craftsmanship including welding, caning, rush work, carvings, and hand waxing.',
    longDescription:
      'Some projects require specialized skills that go beyond standard furniture repair. Our team has decades of experience in traditional craft techniques that many shops simply cannot offer. From hand-woven cane and rush seats to custom wood carvings and metal welding for furniture frames, we have the tools and talent to handle the unusual. These old-world techniques are increasingly rare, and we take pride in keeping them alive through our daily work.',
    features: [
      'Hand-woven cane and rush seating',
      'Custom wood carving and turning',
      'Metal frame welding and repair',
      'French polishing',
      'Gold leaf application',
      'Marquetry and inlay repair',
    ],
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  },
];

export const serviceAreas = [
  'Wylie',
  'Plano',
  'Dallas',
  'McKinney',
  'Allen',
  'Frisco',
  'Richardson',
  'Garland',
  'Mesquite',
  'Rowlett',
  'Sachse',
  'Murphy',
  'Lucas',
  'Lavon',
  'Princeton',
  'Anna',
  'Fort Worth',
  'Arlington',
  'Irving',
  'Carrollton',
];
