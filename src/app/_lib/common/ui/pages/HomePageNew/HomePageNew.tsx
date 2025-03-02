import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import GalleryHome from "./galleryHome/GalleryHome";
import { PartnerHome } from "./partnerHome/PartnerHome";
import "../../scss/index.scss";


const HomePageNew = () => {

  return (
    <>
      <WelcomeComponent />
      <OurServicesHome />
      <GalleryHome />
      <PartnerHome />
    </>
  );
};

export default HomePageNew;
