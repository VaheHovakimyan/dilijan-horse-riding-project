import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "../_lib/common/ui";
import Header from "../_lib/common/ui/shared/Header/Header";
// import { languages } from '../i18n/settings'

// import website_icon from "../_lib/common/ui/assets/icons/website_title_icons/website_title_icon.png";
import AllRights from "../_lib/common/ui/shared/AllRights/AllRights";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] });

// export async function generateStaticParams() {

//   return languages.map((lng) => ({ lng }))
// }

export const metadata: Metadata = {
  title: "Dilijan Horse Riding",
  description: "Dilijan Horse Riding",
  icons: "/favicon.ico",
  openGraph: {
    title: "Dilijan Horse Riding, official website",
    description: "Dilijan Horse Riding, jeeping, team building, etc.",
    // images:'path/to/image'
  },
};

const RootLayout = async ({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: any
  }
}>) => {


  
  // const messages = await getMessages();

  return (
    // <NextIntlClientProvider messages={messages}>
    <html lang={lng}>
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <AllRights /> */}
      </body>
    </html>
    // </NextIntlClientProvider>
  );
};

export default RootLayout

