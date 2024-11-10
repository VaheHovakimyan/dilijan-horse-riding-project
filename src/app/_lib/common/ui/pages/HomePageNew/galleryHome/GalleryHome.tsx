import { IGalleryHomeImages, IGalleryRow } from "@/app/interfaces/gallery";
import style from "./GalleryHome.module.scss";
import mediaStyle from './GalleryHomeMedia.module.scss';
import NavigationLink from "@/app/_components/NavigationLink";

const GalleryHomeImages: IGalleryHomeImages = {
  firstRow: [
    {
      src: 'https://i.ibb.co/5MQjrs3/home-gallery-1.webp',
    },
    {
      src: 'https://i.ibb.co/LtDv9Cs/home-gallery-2-1.webp',
    },
    {
      src: 'https://i.ibb.co/DphBS3S/home-gallery-3-1.webp',
    },
  ],
  secondRow: [
    {
      src: 'https://i.ibb.co/x3wKDfs/home-gallery-4.webp'
    },
    {
      src: 'https://i.ibb.co/C2m0FDD/home-gallery-5.webp'
    },
    {
      src: 'https://i.ibb.co/92YfYsJ/home-gallery-6.webp'
    },
  ]
};

export const GalleryHome = ({ }: {}) => {

  return (
    <NavigationLink href={"/gallery"}>
      <div className={`${style.gallery_home_main} ${mediaStyle.gallery_home_main}`}>
        <div className={`${style.gallery_home} ${mediaStyle.gallery_home}`}>

          <div className={`${style.gallery_home_main_1} ${mediaStyle.gallery_home_main_1}`}>
            {GalleryHomeImages.firstRow.map((item: IGalleryRow, index: number) => {
              return (
                <div
                  className={`${style.gallery_home_main_item} ${mediaStyle.gallery_home_main_item}`}
                  style={{backgroundImage: `url(${item.src})`}}
                  key={index}
                >
                  
                  <div className={style.gallery_home_main_item_opacity}></div>
                </div>
              )
            })}
          </div>

          <div className={`${style.gallery_home_main_2} ${mediaStyle.gallery_home_main_2}`}>
            {GalleryHomeImages.secondRow.map((item: IGalleryRow, index: number) => {
              return (
                <div
                  className={`${style.gallery_home_main_item} ${mediaStyle.gallery_home_main_item}`}
                  style={{backgroundImage: `url(${item.src})`}}
                  key={index}
                >
                  <div className={`${style.gallery_home_main_item_opacity} ${mediaStyle.gallery_home_main_item_opacity}`}>
                    {index === GalleryHomeImages.secondRow.length - 1 &&
                      <p className={`${style.gallery_home_main_item_opacity_last} ${mediaStyle.gallery_home_main_item_opacity_last}`}>+ 343</p>
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </NavigationLink>
  );
};

export default GalleryHome;
