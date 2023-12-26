import styles from "@/components/MySwiper/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdStar } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const MySwiper = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.container}>
      <div className={`${styles.spacer} ${styles.layer1}`}>
        <svg
          id="visual"
          viewBox="0 0 900 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 106L11.5 109C23 112 46 118 69 120.3C92 122.7 115 121.3 138.2 117.8C161.3 114.3 184.7 108.7 207.8 108.2C231 107.7 254 112.3 277 116.2C300 120 323 123 346 121.2C369 119.3 392 112.7 415.2 110.2C438.3 107.7 461.7 109.3 484.8 110.5C508 111.7 531 112.3 554 115.7C577 119 600 125 623 125.7C646 126.3 669 121.7 692.2 117.5C715.3 113.3 738.7 109.7 761.8 109.2C785 108.7 808 111.3 831 112.2C854 113 877 112 888.5 111.5L900 111L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ff9729"
          ></path>
          <path
            d="M0 91L11.5 93.2C23 95.3 46 99.7 69 100.3C92 101 115 98 138.2 98.2C161.3 98.3 184.7 101.7 207.8 102.8C231 104 254 103 277 100.2C300 97.3 323 92.7 346 92.2C369 91.7 392 95.3 415.2 93.7C438.3 92 461.7 85 484.8 82C508 79 531 80 554 82.7C577 85.3 600 89.7 623 89C646 88.3 669 82.7 692.2 83.8C715.3 85 738.7 93 761.8 96.2C785 99.3 808 97.7 831 94.8C854 92 877 88 888.5 86L900 84L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffb162"
          ></path>
          <path
            d="M0 60L11.5 64C23 68 46 76 69 75.8C92 75.7 115 67.3 138.2 66.3C161.3 65.3 184.7 71.7 207.8 75.3C231 79 254 80 277 78.2C300 76.3 323 71.7 346 68.5C369 65.3 392 63.7 415.2 62.7C438.3 61.7 461.7 61.3 484.8 60.5C508 59.7 531 58.3 554 60.7C577 63 600 69 623 73C646 77 669 79 692.2 80.2C715.3 81.3 738.7 81.7 761.8 77.7C785 73.7 808 65.3 831 62.7C854 60 877 63 888.5 64.5L900 66L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffc995"
          ></path>
          <path
            d="M0 59L11.5 55.7C23 52.3 46 45.7 69 45C92 44.3 115 49.7 138.2 49C161.3 48.3 184.7 41.7 207.8 38.3C231 35 254 35 277 36C300 37 323 39 346 39.3C369 39.7 392 38.3 415.2 38C438.3 37.7 461.7 38.3 484.8 42C508 45.7 531 52.3 554 52.7C577 53 600 47 623 46C646 45 669 49 692.2 50.2C715.3 51.3 738.7 49.7 761.8 49.3C785 49 808 50 831 48.8C854 47.7 877 44.3 888.5 42.7L900 41L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffe2c8"
          ></path>
          <path
            d="M0 36L11.5 32.7C23 29.3 46 22.7 69 18.7C92 14.7 115 13.3 138.2 16C161.3 18.7 184.7 25.3 207.8 25.8C231 26.3 254 20.7 277 20C300 19.3 323 23.7 346 26.8C369 30 392 32 415.2 31.7C438.3 31.3 461.7 28.7 484.8 25.3C508 22 531 18 554 16.2C577 14.3 600 14.7 623 17.5C646 20.3 669 25.7 692.2 26C715.3 26.3 738.7 21.7 761.8 21C785 20.3 808 23.7 831 25.8C854 28 877 29 888.5 29.5L900 30L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#fcfcfc"
          ></path>
        </svg>
      </div>
      <h3
        className={`${styles.textCenter} ${styles.sectionSubheading}`}
        data-aos="fade-up"
      >
        - Popular Delivery -
      </h3>
      <h1
        className={`${styles.textCenter} ${styles.sectionHeading}`}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Discover Alberto's Bestsellers.
      </h1>

      <Swiper
        data-aos="fade-up"
        data-aos-delay="300"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: `.${styles.swiperPagination}`, clickable: true }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/meatza.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱250</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Meatzza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/extravaganz.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱220</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Extravaganza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/peperoni.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱200</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Peperoni Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/viggie.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱230</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Viggie Ultimate</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/s1.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱180</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Cheese Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/pineapple.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱200</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Aloha Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/pacific.jpg"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>₱200</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Pacific Viggie</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.sliderControler}>
        <div
          className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}
        ></div>
        <div
          className={`${styles.swiperButtonNext} ${styles.sliderArrow}`}
        ></div>
        <div className={styles.swiperPagination}></div>
      </div>
    </div>
  );
};

export default MySwiper;
