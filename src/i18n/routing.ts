import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['am', 'ru', 'en'],
  defaultLocale: 'am',
  pathnames: {
    '/': '/',
    '/#services': '/#services',
    '/about': {
      am: '/about',
      ru: '/about',
      en: '/about'
    },
    '/gallery': {
      am: '/gallery',
      ru: '/gallery',
      en: '/gallery'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);