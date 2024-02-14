import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";

export const menuConfig = [
  {
    title: 'About Us',
    icon: <IconArchivum />,
    color: 'mustard',
    url: '/about',
    submenu: [
      { title: 'The Archivum' },
      { title: 'We are CEU' },
      { title: 'Verzió' },
      { title: 'Partner Projects' },
      { title: 'News & Blog' },
      { title: 'Staff' },
      { title: 'Join Us', submenu: [
          { title: 'Jobs' },
          { title: 'Archivum Internships' },
          { title: 'Volunteering' }]
      },
      { title: 'Vist Us' },
      { title: 'Annual Reports' },
    ]
  }, {
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    url: '/collections',
    submenu: [
      { title: 'Access the Collections', submenu: [
          { title: 'Catalog' },
          { title: 'Help with your Research'},
          { title: 'Research Room Access'},
          { title: 'Digitization on Demand'}]
      },
      { title: 'Digital Collections' },
      { title: 'Curated Collections' },
      { title: 'Archival Projects' },
      { title: 'Donate your Archive' },
      { title: 'Deposit' },
      { title: 'Archival News and Blog'}
    ]
  }, {
    title: 'Academics',
    icon: <IconAcademics />,
    color: 'aqua',
    url: 'academics',
    submenu: [
      { title: 'Research and Publications' },
      { title: 'Visegrad Scholarship & Fellowship' },
      { title: 'Other Fellowships' },
      { title: 'Archivum Internships' },
      { title: 'University Courses' },
      { title: 'Edupro' },
      { title: 'Academic Events'},
      { title: 'Academic News and Blog'},
    ]
  }, {
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    url: '/public-programs',
    submenu: [
      { title: 'Program calendar' },
      { title: 'Galeria Centralis' },
      { title: 'Past Programs' },
      { title: 'Public History Projects' }
    ]
  }
]