import {LocalePrefix, Pathnames} from "next-intl/routing";

export const locales = ["am", "ru", "en"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  '/about': '/about',
  '/gallery': '/gallery',
}

export const localePrefix: LocalePrefix<Locales> = "always";