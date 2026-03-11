export interface CityData {
  slug: string;
  name: string;
  state: string;
  driveTime: string;
  isHomeBase?: boolean;
  tagline: string;
  headerIntro: string;
  intro: string;
  neighborhoods: string[];
  commonProjects: { title: string; description: string }[];
  nearbyLinks: { slug: string; name: string }[];
  meta: { title: string; description: string };
}

export const serviceCities: CityData[] = [
  {
    slug: 'wylie-tx',
    name: 'Wylie',
    state: 'TX',
    driveTime: '',
    isHomeBase: true,
    tagline: 'Our Home Base',
    headerIntro:
      'Our workshop is right here in Wylie at 10 Regency Dr Bldg B. Drop off your piece in person, or we will pick it up from your Wylie home at no charge.',
    intro: `<p>
      We have been working out of our Wylie shop since we first opened our doors. This is where
      every restoration happens - from the initial assessment to the final coat of finish. When
      you bring your piece to us, you are bringing it to the same workbenches and tools we have
      used for over 35 years. There is no middleman, no subcontracting, and no shipping your
      furniture to a facility you have never seen.
    </p>
    <p>
      Wylie has changed a lot since we started. What was once a small town east of Plano has
      grown into a community of over 50,000 people, with new neighborhoods stretching in every
      direction. But the workshop has stayed the same. Our regulars know they can stop by, see
      their piece in progress, and talk directly with the person doing the work. That kind of
      access is rare in this business, and we think it matters.
    </p>
    <p>
      Living in Wylie also means you do not have to worry about pickup and delivery logistics.
      You can drop off your furniture on your way to work and pick it up when it is ready. Or if
      the piece is too large or heavy to move yourself, we will come get it - even if you are
      just a few minutes down the road. We are your neighbors, and we treat your furniture the
      way we would treat our own.
    </p>`,
    neighborhoods: [
      'Downtown Wylie',
      'Birmingham Farms',
      'Alanis Ranch',
      'Stone Creek',
      'Westgate',
      'Park at Waterview',
      'Southfork',
      'Inspiration',
      'Woodbridge',
      'Kreymer',
    ],
    commonProjects: [
      {
        title: 'Kitchen and dining furniture',
        description:
          'Many Wylie homes were built in the last 20 years, and the dining sets that came with them are starting to show wear. Loose chairs, scratched tabletops, and wobbly legs are easy fixes that save you hundreds over replacing.',
      },
      {
        title: 'Family heirlooms and keepsakes',
        description:
          'A lot of families moved to Wylie from other parts of Texas and brought furniture with them - grandmother\'s rocking chair, a cedar chest from the old house, a dresser that has been in the family for generations.',
      },
      {
        title: 'Outdoor and patio furniture',
        description:
          'Texas sun and heat take a toll on outdoor furniture. We repair and refinish wooden patio sets, Adirondack chairs, and porch rockers so they can handle another few years outside.',
      },
      {
        title: 'Church and commercial pieces',
        description:
          'Wylie\'s churches and local businesses bring us pews, podiums, reception desks, and restaurant furniture. We understand the tight turnarounds commercial work often requires.',
      },
      {
        title: 'Antique store and market finds',
        description:
          'The Canton Trade Days and local antique shops in the area keep us busy. Customers find a great piece at a good price and bring it straight to us for restoration before it goes in their home.',
      },
      {
        title: 'Pet and kid damage repair',
        description:
          'Chewed table legs, crayon on a dresser, scratches from the dog jumping on the couch frame. Life happens, and most of it is fixable. We see these repairs every week.',
      },
    ],
    nearbyLinks: [
      { slug: 'plano-tx', name: 'Plano' },
    ],
    meta: {
      title: 'Furniture Repair & Antique Restoration in Wylie, TX | ARED',
      description:
        'ARED Furniture Repair is located in Wylie, TX. Visit our workshop at 10 Regency Dr Bldg B for expert antique restoration, refinishing, and custom upholstery. Call (214) 682-6371.',
    },
  },
  {
    slug: 'plano-tx',
    name: 'Plano',
    state: 'TX',
    driveTime: '15-20 minutes',
    tagline: 'Serving Plano, TX',
    headerIntro:
      'Our Wylie workshop is just 15-20 minutes from Plano. We pick up your furniture, restore it with care, and deliver it back to your door. No charge for pickup or delivery, ever.',
    intro: `<p>
      Plano is home to some of the most beautiful furniture in the DFW metroplex. Many
      neighborhoods here were built during the 1980s and 1990s housing boom, and the families
      who moved in furnished their homes with quality pieces - formal dining sets, china cabinets,
      upholstered armchairs, and solid wood bedroom suites. Thirty or forty years later, those
      pieces are still structurally sound but showing their age. Finishes are worn, upholstery
      is faded, and joints have loosened from decades of use.
    </p>
    <p>
      That is exactly where we come in. Rather than replacing a solid oak dining table with
      something from a chain store, why not have it refinished? The wood underneath is better
      than anything you will find new. We see this all the time with Plano customers - they
      come to us expecting to hear "just buy a new one," and instead we show them what their
      existing furniture can look like with proper restoration.
    </p>
    <p>
      We also work with a lot of Plano residents who have inherited furniture from parents and
      grandparents. A settee from the old country, a rocking chair that has been in the family
      for generations, a dresser that traveled across the state in the back of a truck and
      arrived with a cracked leg and chipped veneer. These are the projects we love. We
      understand that the value of these pieces goes far beyond what any price tag can capture.
    </p>`,
    neighborhoods: [
      'West Plano',
      'East Plano',
      'Legacy West',
      'Willow Bend',
      'Preston Hollow',
      'Kings Ridge',
      'Deerfield',
      'Hunters Glen',
      'Shepards Glen',
      'Old Town Plano',
    ],
    commonProjects: [
      {
        title: 'Formal dining sets',
        description:
          'Refinishing worn tabletops, regluing loose chair joints, and reupholstering seat cushions on sets that have hosted decades of family dinners.',
      },
      {
        title: 'Inherited antiques',
        description:
          'Restoring pieces passed down from parents and grandparents - dressers, china cabinets, rocking chairs, and trunks with sentimental value that no store can replace.',
      },
      {
        title: 'Upholstered sofas and armchairs',
        description:
          'Full reupholstery on living room furniture - new fabric, springs, padding, and frame repair so your favorite seat feels brand new again.',
      },
      {
        title: 'Estate sale and auction finds',
        description:
          'Plano and the surrounding area have an active estate sale scene. We regularly restore pieces customers pick up at sales in Plano, Allen, and McKinney.',
      },
      {
        title: 'Moving and water damage repair',
        description:
          'Scratches, dents, and water rings from moves or accidents. We also help with insurance documentation if your piece was damaged in a covered event.',
      },
      {
        title: 'Style updates on quality furniture',
        description:
          'Love the bones of a piece but not the finish? We can give solid furniture a completely new look - darker stain, lighter wash, or even an antique patina on a newer piece.',
      },
    ],
    nearbyLinks: [
      { slug: 'wylie-tx', name: 'Wylie' },
    ],
    meta: {
      title: 'Furniture Repair & Antique Restoration in Plano, TX | ARED',
      description:
        'Expert furniture repair and antique restoration serving Plano, TX. Free pickup and delivery from our Wylie workshop, just 15-20 minutes away. Call (214) 682-6371.',
    },
  },
];
