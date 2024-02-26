import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";
import {
  IconAboutUsMenu,
  IconAcademicsMenu,
  IconCollectionsMenu,
  IconPublicProgramsMenu
} from "@/components/Icon/MenuBackgroundIcon";

export const menuConfig = [
  {
    key: 'about_us',
    title: 'About Us',
    icon: <IconArchivum />,
    menuBGIcon: <IconAboutUsMenu />,
    color: 'mustard',
    url: '/about',
    submenu: [
      { title: 'The Archivum' },
      { title: 'We are CEU' },
      { title: 'Partner Projects' },
      { title: 'Staff' },
      { title: 'Join Us', submenu: [
          { title: 'Jobs' },
          { title: 'Archivum Internships' },
          { title: 'Volunteering' }]
      },
      { title: 'Annual Reports' },
      { title: 'Vist Us' }
    ]
  }, {
    key: 'collections',
    title: 'Collections',
    icon: <IconCollections />,
    menuBGIcon: <IconCollectionsMenu />,
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
      { title: 'Archival News and Blog'}
    ]
  }, {
    key: 'academics',
    title: 'Academics',
    icon: <IconAcademics />,
    menuBGIcon: <IconAcademicsMenu />,
    color: 'aqua',
    url: 'academics',
    submenu: [
      { title: 'Research and Publications' },
      { title: 'Visegrad Scholarship & Fellowship', submenu: [
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
    key: 'public_programs',
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    menuBGIcon: <IconPublicProgramsMenu />,
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