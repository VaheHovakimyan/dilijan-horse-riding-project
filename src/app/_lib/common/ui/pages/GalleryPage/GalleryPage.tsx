'use client';

import React, { FC, Fragment } from "react";
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";

import style from './GalleryPage.module.scss';
import mediaStyle from './GalleryPageMedia.module.scss';

import firstImage from "../../assets/images/home_main_background.jpg";
import secondImage from "../../assets/images/horse_image.jpg";
import thirdImage from "../../assets/images/slogan_background.jpg";


interface IGallery {
  firstRowImages: string[];
  secondRowImages: string[];
  thirdRowImages: string[];
}

interface IGalleryImage {
  img: string;
}

interface IGalleryRow {
  galleryImages: string[];
  className: string;
}

const GalleryRow: FC<IGalleryRow> = ({ galleryImages, className }) => {
  return (
    <div className={className}>
      {galleryImages.map((img: string, imageIndex: number) => {
        return (
          <GalleryImage
            key={imageIndex}
            img={img}
          />
        )
      })}
    </div>
  )
}

const GalleryImage: FC<IGalleryImage> = ({ img }) => {
  return (
    <div
      className={`${style.gallery_home_main_item} ${mediaStyle.gallery_home_main_item}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={style.gallery_home_main_item_opacity}></div>
    </div>
  )
}


export const GalleryPage = ({ }: {}) => {
  const galleryData: IGallery[] = [
    {
      firstRowImages: [
        firstImage.src,
        secondImage.src,
        thirdImage.src
      ],
      secondRowImages: [
        secondImage.src,
        firstImage.src,
        thirdImage.src
      ],
      thirdRowImages: [
        thirdImage.src,
        secondImage.src,
        firstImage.src
      ]
    },
    {
      firstRowImages: [
        firstImage.src,
        secondImage.src,
        thirdImage.src
      ],
      secondRowImages: [
        secondImage.src,
        firstImage.src,
        thirdImage.src
      ],
      thirdRowImages: [
        thirdImage.src,
        secondImage.src,
        firstImage.src
      ]
    }
  ];


  return (
    <section className={style.gallery}>
      <PageTitleComponent title={"Gallery"} />

      <div className={`${style.gallery_home_main} ${mediaStyle.gallery_home_main}`}>
        <div className={`${style.gallery_home} ${mediaStyle.gallery_home}`}>

          {galleryData.map((gallery: IGallery, index: number) => {
            return (
              <Fragment key={index}>
                <GalleryRow
                  galleryImages={gallery.firstRowImages}
                  className={`${style.gallery_home_main_row_first} ${mediaStyle.gallery_home_main_row_first}`}
                />

                <GalleryRow
                  galleryImages={gallery.secondRowImages}
                  className={`${style.gallery_home_main_row_second} ${mediaStyle.gallery_home_main_row_second}`}
                />

                <GalleryRow
                  galleryImages={gallery.thirdRowImages}
                  className={`${style.gallery_home_main_row_third} ${mediaStyle.gallery_home_main_row_third}`}
                />
              </Fragment>
            )
          })}

        </div>
      </div>

      {/* <div className={style.gallery_main}>
        {galleryItems.map((item) =>
          <img src={item.image} alt="galler_image" className={style.gallery_image} />
        )}
      </div> */}
    </section>
  );
};

export default GalleryPage;