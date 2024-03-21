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
          { key: 'about-us-menu', title: 'About Us', url: '/about-us/archivum' },
          { key: 'vera-and-donald-blinken', title: 'Vera and Donald Blinken', url: '/about-us/vera-and-donald-blinken'},
          { key: 'goldberger-house', title: 'Goldberger House', url: '/about-us/goldberger-house'},
          { key: 'what-archives-are', title: 'What are archives?', url: '/about-us/what-are-archives'},
        ]
      },
      { key: 'we-are-ceu', title: 'We are CEU', url: '/about-us/we-are-ceu' },
      { key: 'partner-projects', title: 'Partner Projects', url: '/about-us/partner-projects'},
      { key: 'staff', title: 'Staff', url: '/about-us/staff'},
      { key: 'join-us', title: 'Join Us', submenu: [
          { key: 'visegrad-scholarship', title: 'Visegrad Scholarships', highlight: 'Information about the Visegrad Scholarship Program.' },
          { key: 'jobs', title: 'Jobs', highlight: 'Work with us on arhcival processing, digitization projects, exhibitions. You will get paid.', url: '/about-us/jobs' },
          { key: 'archivum-internships', title: 'Internships', highlight: 'Work with us on arhcival processing, digitization projects, exhibitions. You will get paid slightly less.' },
          { key: 'volunteering', title: 'Volunteering', highlight: "Work with us on arhcival processing, digitization projects, exhibitions. You won't get paid"}]
      },
      { key: 'annual-reports', title: 'Annual Reports', url: '/about-us/annual-reports' },
      { key: 'visit-us', title: 'Visit Us', url: '/about-us/visit-us' },
      { key: 'blog', title: 'Blog' },
      { key: 'news', title: 'News' }
    ]
  }, {
    key: 'collections',
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    url: '/collections',
    menuItems: [
      { key: 'about-our-collections', title: 'About our Collections', url: '/collections/about-our-collections'},
      { key: 'catalog', title: 'Catalog'},
      { key: 'access-the-collections', title: 'Access the Collections', submenu: [
          { key: 'help-with-your-research', title: 'Help with your Research', url: '/collections/help-with-your-research'},
          { key: 'research-room', title: 'Research Room Access', url: '/collections/research-room'},
          { key: 'digitization-on-demand', title: 'Digitization on Demand', url: '/collections/digitization-on-demand'}]
      },
      { key: 'collection-highlights', title: 'Collection Highlights', url: '/collections/collection-highlights' },
      { key: 'archival-projects', title: 'Archival Projects' },
      { key: 'donate-your-archive', title: 'Donate your Archive' },
      { key: 'archival-news-and-blog', title: 'Archival News'},
      { key: 'blog', title: 'Blog'}
    ]
  }, {
    key: 'academics',
    title: 'Academics',
    icon: <IconAcademics />,
    color: 'aqua',
    url: 'academics',
    menuItems: [
      { key: 'research-and-publications', title: 'Our Research and Publications' },
      { key: 'visegrad-scholarship', title: 'Visegrad Scholarship', submenu: [
          { key: 'about-the-visegrad-fund', title: 'About the V Fund', highlight: "Find out more about the history of the Visegrad Fund" },
          { key: 'open-call', title: 'Open call', highlight: "We are waiting for your application"},
          { key: 'visegrad-current-fellows', title: 'Current Fellows',  highlight: "You can meet them, when you are in the Archivum."},
          { key: 'visegrad-past-fellows', title: 'Past fellows', highlight: "All the participants of the Visegrad Fellowship Program."}]
      },
      { key: 'other-fellowships', title: 'Other Fellowships' },
      { key: 'archivum-internships', title: 'Archivum Internships' },
      { key: 'university-courses', title: 'University Courses' },
      { key: 'edupro', title: 'Edupro', submenu: [
          {key: 'for-teachers', title: 'For Teachers'},
          {key: 'for-students', title: 'For Students'}
        ]},
      { key: 'academic-events', title: 'Academic Events'},
      { key: 'academic-news-and-blog', title: 'Academic News'},
    ]
  }, {
    key: 'public-programs',
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    url: '/public-programs',
    menuItems: [
      { key: 'program-calendar', title: 'Program Calendar', url: '/public-programs/program-calendar' },
      { key: 'galeria-centralis', title: 'Galeria Centralis', submenu: [
          { key: 'current-exhibitions', title: ''},
          { key: 'online-exhibitions', title: ''},
          { key: 'past-exhibitions', title: ''},
          ]},
      { key: 'past-programs', title: 'Past Programs' },
      { key: 'public-history-projects', title: 'Public History Projects', url: '/public-programs/public-history-projects' }
    ]
  }
]