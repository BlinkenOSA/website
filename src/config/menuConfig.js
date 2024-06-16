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
          { key: 'about-us-menu', title: 'About Us', url: '/about-us/about-the-archivum' },
          { key: 'vera-and-donald-blinken', title: 'Vera and Donald Blinken', url: '/about-us/vera-and-donald-blinken'},
          { key: 'goldberger-house', title: 'Goldberger House', url: '/about-us/the-goldberger-house'},
          { key: 'we-are-ceu', title: 'We are CEU', url: '/external/we-are-ceu' },
          { key: 'what-archives-are', title: 'What are archives?', url: '/about-us/what-are-archives'},
        ]
      },
      { key: 'staff', title: 'Staff', url: '/about-us/staff'},
      { key: 'annual-reports', title: 'Annual Reports', url: '/about-us/annual-reports' },
      { key: 'news', title: 'News', url: '/news'},
      { key: 'partner-projects', title: 'Partner Projects', url: '/about-us/partner-projects'},
      { key: 'join-us', title: 'Join Us', submenu: [
          { key: 'visegrad-scholarship', title: 'Visegrad Scholarships', highlight: 'Information about the Visegrad Scholarship Program.', url: '/about-us/visegrad-scholarship-at-osa' },
          { key: 'jobs', title: 'Jobs', highlight: 'Work with us on arhcival processing, digitization projects, exhibitions. You will get paid.', url: '/about-us/jobs' },
          { key: 'volunteering', title: 'Volunteering', highlight: "Work with us on arhcival processing, digitization projects, exhibitions. You won't get paid"}]
      },
      { key: 'visit-us', title: 'Visit Us', url: '/about-us/visit-us' },
      { key: 'blog', title: 'Blog', url: '/entries' },
    ]
  }, {
    key: 'collections',
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    url: '/collections',
    menuItems: [
      { key: 'about-our-collections', title: 'About our Collections', url: '/collections/about-our-collections'},
      { key: 'catalog', title: 'Catalog', url: '/external/catalog'},
      { key: 'access-the-collections', title: 'Access the Collections', submenu: [
          { key: 'help-with-your-research', title: 'Help with your Research', url: '/collections/help-with-your-research'},
          { key: 'research-room', title: 'Research Room Access', url: '/collections/research-room'},
          { key: 'digitization-on-demand', title: 'Digitization on Demand', url: '/collections/digitization-on-demand'}]
      },
      { key: 'selected-collections', title: 'Selected Collections', submenu: [
          { key: 'curated-collections', title: 'Curated Collections', url: '/collections/curated-collections'},
          { key: 'online-collections', title: 'Online Collections', url: '/collections/online-collections'},
          { key: 'av-collections', title: 'Audio-Visual Collections', url: '/collections/av-collections'}]
      },
      { key: 'archival-projects', title: 'Archival Projects', url: '/collections/archival-projects' },
      { key: 'donate-your-archive', title: 'Donate your Archive', url: '/collections/donate-your-materials' },
      // { key: 'collections-news-and-blog', title: 'Archival News', url: '/news?profile=Collections'},
      // { key: 'blog', title: 'Blog', url: '/entries'}
    ]
  }, {
    key: 'academics',
    title: 'Academics',
    icon: <IconAcademics />,
    color: 'aqua',
    url: 'academics',
    menuItems: [
      { key: 'research-and-publications', title: 'Our Research and Publications', url: '/academics/our-research' },
      { key: 'visegrad-scholarship', title: 'Visegrad Scholarship', url: '/academics/visegrad-scholarship-at-osa'},
      { key: 'fellows', title: 'Fellows', submenu: [
          { key: 'current-fellows', title: 'Current Fellows',  highlight: "You can meet them, when you are in the Archivum.", url: '/academics/current-fellows'},
          { key: 'past-fellows', title: 'Past fellows', highlight: "All the participants of the Visegrad Fellowship Program.", url: '/academics/past-fellows'}]
      },
      // { key: 'university-courses', title: 'University Courses' },
      { key: 'edupro', title: 'Education Program', submenu: [
          {key: 'for-teachers', title: 'For Teachers', url: 'https://edupro.osaarchivum.org/tanaroknak/'},
          {key: 'for-students', title: 'For Students', url: 'https://edupro.osaarchivum.org/diakok/'}
        ]},
      { key: 'academic-events', title: 'Academic Events', url: '/public-programs/program-calendar?programType=Academic'},
      // { key: 'academic-news-and-blog', title: 'Academic News', url: '/news?profile=Academic'},
    ]
  }, {
    key: 'public-programs',
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    url: '/public-programs',
    menuItems: [
      { key: 'program-calendar', title: 'Program Calendar', url: '/public-programs/program-calendar' },
      { key: 'galeria-centralis', title: 'Galeria Centralis', url: '/external/galeria-centralis'},
      { key: 'verzio', title: 'Verzio', url: '/external/verzio' },
      { key: 'public-history-projects', title: 'Public History Projects', url: '/public-programs/public-history-projects' },
      // { key: 'public-program-news', title: 'Public Program News', url: '/news?profile=Public'},
    ]
  }
]