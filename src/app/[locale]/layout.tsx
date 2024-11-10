import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "../_lib/common/ui";
import Header from "../_lib/common/ui/shared/Header/Header";
import AllRights from "../_lib/common/ui/shared/AllRights/AllRights";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilijan Horse Riding",
  description: "Dilijan Horse Riding",
  keywords: ["Horse", "Riding", "Dilijan", "Horse Riding", "Dilijan Horse Riding", "Services", "Верховая езда", "Джиппинг в Диматс", "Джиппинг", "Тимбилдинг", "Фотосессия", "Кемпинг", "Квадроцикл"],
  icons: "/favicon.ico",
  openGraph: {
    title: "Dilijan Horse Riding, official website",
    description: "Dilijan Horse Riding, jeeping, team building, etc.",
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
  

  return (
    <html lang="ru">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <AllRights />
      </body>
    </html>
  );
};

export default RootLayout;