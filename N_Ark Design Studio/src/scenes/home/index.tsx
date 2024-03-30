import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import * as React from "react";
import "./styles.css";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import ArchImage from "../projects/ArchImage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  height: number;
};


const Home = ({ setSelectedPage, height }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [swiperIndex, setSwiperIndex] = React.useState<Number>(0);

  const items = [
    {
      id: 0,
      src: "home11.jpg",
      text1: 'Residence'
    },
    {
      id: 0,
      src: "home2.png",
      text1: 'Interior',
      text2: 'Design'
    },
    {
      id: 0,
      src: "home3.jpg",
      text1: 'Exterior',
      text2: 'Design'
    }
  ]

  const mystyle = {
    color: "white"
  };

  const getImageUrl = (image: string) => {
    return new URL(`../../assets1/${image}`, import.meta.url).href;
  }


  const navBarHeight = height-33;
  return (
    <section id="home" className=" py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        key={'home'}
      >

        <div className="mx-auto md:w-5/6 w-full items-center justify-center">
          <div style={{marginTop: `${navBarHeight}px`}}>
          {/* /mt-12 xs:mt-13 md:mt-16" */}

            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={0}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}

              pagination={{
                clickable: true
              }}
              onSwiper={(swiper: any) => console.log(swiper)}
              simulateTouch={true}
              onActiveIndexChange={(core: any) => {
                setSwiperIndex(core.realIndex);
              }}

              onClick={(slider: any) => {
                console.log(swiperIndex, '-- Index');
              }}
              className={"mySwiper"}
              key={'home_swiper'}
            >

              {
                items.map((object) => {
                  return (
                    <SwiperSlide key={object.id + "_home"}>
                      <div className="md:h-[600px] flex" key={object.id + "_homediv"}>
                        <img src={getImageUrl(object.src)} style={{objectFit: 'cover'}} className="sm:max-h-[99.9%] object-fill" key={object.id + "_homeimage"}/>
                        <div className="absolute top-1/3 right-[25px] opacity-80">
                        <p className="md:text-4xl xs:text-2xl text-white">
                          {object.text1} 
                        </p>
                        {object.text2 && <p className="md:text-4xl xs:text-2xl text-white">
                          {object.text2} 
                        </p>}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
