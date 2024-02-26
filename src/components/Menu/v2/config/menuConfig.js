import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";

export const menuConfig = [
  {
    key: 'about-us',
    title: 'About Us',
    icon: <IconArchivum />,
    color: 'mustard',
    url: '/about',
    menuItems: [
      { key: 'the-archivum', title: 'The Archivum' },
      { key: 'we-are-ceu', title: 'We are CEU' },
      { key: 'partner-projects', title: 'Partner Projects' },
      { key: 'staff', title: 'Staff' },
      { key: 'join-us', title: 'Join Us', submenu: [
          { key: 'jobs', title: 'Jobs' },
          { key: 'archivum-internships', title: 'Archivum Internships' },
          { key: 'volunteering', title: 'Volunteering' }]
      },
      { key: 'annual-reports', title: 'Annual Reports' },
      { key: 'visit-us', title: 'Visit Us' }
    ]
  }, {
    key: 'collections',
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    url: '/collections',
    menuItems: [
      { key: 'access-the-collections', title: 'Access the Collections', submenu: [
          { key: 'catalog', title: 'Catalog' },
          { key: 'help-with-your-research', title: 'Help with your Research'},
          { key: 'research-room', title: 'Research Room Access'},
          { key: 'digitization-on-demand', title: 'Digitization on Demand'}]
      },
      { key: 'digital-collections', title: 'Digital Collections' },
      { key: 'curated-collections', title: 'Curated Collections' },
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
      { title: 'Research and Publications' },
      { title: 'Visegrad Scholarship', submenu: [
          { title: 'About the V Fund' },
          { title: 'Open call'},
          { title: 'Visegrad current fellows'},
          { title: 'Visegrad past fellows'}]
      },
      { title: 'Other Fellowships' },
      { title: 'Archivum Internships' },
      { title: 'University Courses' },
      { title: 'Edupro' },
      { title: 'Academic Events'},
      { title: 'Academic News and Blog'},
    ]
  }, {
    key: 'public-programs',
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    url: '/public-programs',
    menuItems: [
      { title: 'Program calendar' },
      { title: 'Galeria Centralis' },
      { title: 'Past Programs' },
      { title: 'Public History Projects' }
    ]
  }
]