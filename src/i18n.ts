import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {locales} from "./config";

interface RequestConfigParams {
  locale: string; // Type the `locale` as a string
}

export default getRequestConfig(async ({locale}: RequestConfigParams) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
})