
import AboutPage from "@/app/_lib/common/ui/pages/AboutPage/AboutPage";

// const fetchAboutPageData = async (locale: string) => {
//   const apiBaseUrl = "http://127.0.0.1:3000";
//   const url = `${apiBaseUrl}/${locale}/about/api/about-page`;


//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };


export default async function About() {
  return <AboutPage />;
}
