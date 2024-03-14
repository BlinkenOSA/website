import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";

export const menuConfig = [
  {
    key: 'about-us',
    title: 'About Us',
    icon: <IconArchivum />,
    color: 'mustard',
    url: '/about',
    menuItems: [
      { key: 'the-archivum', title: 'The Archivum', submenu: [
          { key: 'about-us-menu', title: 'About Us', highlight: 'The story of the Vera & Donald Blinken Open Society Archives.' },
          { key: 'vera-and-donald-blinken', title: 'Vera and Donald Blinken', highlight: 'Our main donors.' },
          { key: 'goldberger-house', title: 'Goldberger House', highlight: 'Where are we located? The story of our building.'},
          { key: 'what-archives-are', title: 'What archives are?', highlight: 'What is the role of the archives nowadays?'},
        ]
      },
      { key: 'we-are-ceu', title: 'We are CEU' },
      { key: 'partner-projects', title: 'Partner Projects', url: '/about-us/partner-projects'},
      { key: 'staff', title: 'Staff', url: '/about-us/staff'},
      { key: 'join-us', title: 'Join Us', submenu: [
          { key: 'visegrad-scholarships', title: 'Visegrad Scholarships', highlight: 'Information about the Visegrad Scholarship Program.' },
          { key: 'jobs', title: 'Jobs', highlight: 'Work with us on arhcival processing, digitization projects, exhibitions. You will get paid', url: '/about-us/jobs' },
          { key: 'archivum-internships', title: 'Internships', highlight: 'Work with us on arhcival processing, digitization projects, exhibitions. You will get paid slightly less' },
          { key: 'volunteering', title: 'Volunteering', highlight: "Work with us on arhcival processing, digitization projects, exhibitions. You won't get paid"}]
      },
      { key: 'annual-reports', title: 'Annual Reports', url: '/about-us/annual-reports' },
      { key: 'visit-us', title: 'Visit Us' }
    ]
  }, {
    key: 'collections',
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    url: '/collections',
    menuItems: [
      { key: 'about-our-collections', title: 'About our Collections'},
      { key: 'catalog', title: 'Catalog'},
      { key: 'access-the-collections', title: 'Access the Collections', submenu: [
          { key: 'help-with-your-research', title: 'Help with your Research', highlight: 'Get stuck?! Let us find you useful stuff for your research.'},
          { key: 'research-room', title: 'Research Room Access', highlight: 'Would you like to come to us? This is how you can reach our research room.'},
          { key: 'digitization-on-demand', title: 'Digitization on Demand', highlight: 'Found something relevant? We will digitize it for you!'}]
      },
      { key: 'collection-highlights', title: 'Collection Highlights', url: '/collections/collection-highlights' },
      { key: 'archival-projects', title: 'Archival Projects' },
      { key: 'donate-your-archive', title: 'Donate your Archive' },
      { key: 'archival-news-and-blog', title: 'Archival News and Blog'}
    ]
  }, {
    key: 'academics',
    title: 'Academics',
    icon: <IconAcademics />,
    color: 'aqua',
    url: 'academics',
    menuItems: [
      { key: 'research-and-publications', title: 'Research and Publications' },
      { key: 'visegrad-scholarship', title: 'Visegrad Scholarship', submenu: [
          { key: 'about-the-visegrad-fund', title: 'About the V Fund', highlight: "Find out more about the history of the Visegrad Fund" },
          { key: 'open-call', title: 'Open call', highlight: "We are waiting for your application"},
          { key: 'visegrad-current-fellows', title: 'Visegrad current fellows',  highlight: "You can meet them, when you are in the Archivum."},
          { key: 'visegrad-past-fellows', title: 'Visegrad past fellows', highlight: "All the participants of the Visegrad Fellowship Program."}]
      },
      { key: 'other-fellowships', title: 'Other Fellowships' },
      { key: 'archivum-internships', title: 'Archivum Internships' },
      { key: 'university-courses', title: 'University Courses' },
      { key: 'edupro', title: 'Edupro' },
      { key: 'academic-events', title: 'Academic Events'},
      { key: 'academic-news-and-blog', title: 'Academic News and Blog'},
    ]
  }, {
    key: 'public-programs',
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    url: '/public-programs',
    menuItems: [
      { key: 'program-calendar', title: 'Program Calendar', url: '/public-programs/program-calendar' },
      { key: 'galeria-centralis', title: 'Galeria Centralis', },
      { key: 'past-programs', title: 'Past Programs' },
      { key: 'public-history-projects', title: 'Public History Projects' }
    ]
  }
]