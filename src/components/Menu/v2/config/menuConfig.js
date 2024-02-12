import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";
import style from "@/components/Menu/v1/Menu.module.scss";

export const menuConfig = {
  'WhatAboutUs' : {
    title: 'About Us',
    icon: <IconArchivum />,
    color: 'mustard',
    menu: [
      { title: 'The Archivum' },
      { title: 'Research Room' },
      { title: 'The Goldberger House' },
      { title: 'Staff' },
      { title: 'We are CEU' },
      { title: 'Policies' },
      { title: 'Annual reports'},
      { title: 'Partners' },
      { title: 'Media Appearances' },
      { title: 'Join Us' }
    ]
  },
  'Collections': {
    title: 'Collections',
    icon: <IconCollections />,
    color: 'orange',
    menu: [
      { title: 'Catalog' },
      { title: 'About Our Collections' },
      { title: 'Access' },
      { title: 'Curated Collections' },
      { title: 'Archival Lab' },
      { title: 'Deposit' },
      { title: 'Archival News & Blogs'}
    ]
  },
  'Academics': {
    title: 'Academics',
    icon: <IconAcademics />,
    color: 'aqua',
    menu: [
      { title: 'About' },
      { title: 'Academic Events' },
      { title: 'Grants and Fellowships' },
      { title: 'Research Projects' },
      { title: 'Internships' },
      { title: 'CEU Courses' },
      { title: 'Teacher Training'},
      { title: 'Education Program'},
      { title: 'Academics News & Blogs'},
    ]
  },
  'PublicPrograms': {
    title: 'Public Programs',
    icon: <IconPublicPrograms />,
    color: 'sage',
    menu: [
      { title: 'About' },
      { title: 'Galeria Centralis' },
      { title: 'Upcoming Programs' },
      { title: 'Public History Projects' },
      { title: 'Volunteering' },
      { title: 'Verzio 20' },
      { title: 'Public Program News'}
    ]
  }
}