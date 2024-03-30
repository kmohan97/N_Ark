import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


// ht - 250
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageViewer from "./ImageViewer";
import ArchImage from './ArchImage';

const projects = [
  {
    id: "1",
    details: {
      client: "Yonex solution",
      location: "Hyderabad",
      date: "12/10/22",
      category: "Residence Design"
    },
    images: [
      "p10.jpg",
      "p11.jpg",
      "p12.jpg",
      "p13.jpg",
      "p14.jpg",
      "p15.jpg"
    ]
  },
  {
    id: "2",
    details: {
      client: "Lining Solutions",
      location: "Bhubaneshwar",
      date: "13/10/23",
      category: "Interior Design"
    },
    images: [
      "p20.png",
      "p21.png",
      "p22.png",
      "p23.png",
      "p24.png",
      "p25.png",
      "p26.png"
    ]
  },
  {
    id: "3",
    details: {
      client: "Victor Solutions",
      location: "CDA Sector-10, Cuttack",
      date: "10/01/24",
      category: "Facade Design"
    },
    images: [
      "p30.jpg",
      "p31.jpg",
      "p32.jpg"
    ]
  },{
    id: "3",
    details: {
      client: "Victor Solutions",
      location: "Dhanupali, Sambalpur",
      date: "13/05/20",
      category: "Apartment Design"
    },
    images: [
      "p40.jpg",
      "p41.jpg",
      "p42.jpg",
      "p43.jpg"
      
    ]
  }
]

export const getImageUrl = (image: string) => {
  return new URL(`../../assets1/${image}`, import.meta.url).href;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const image: undefined | string = undefined;
  const [selectedImage, setSeletedImage] = useState(image);

  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  // setSlidesPerView(isAboveMediumScreens ? 2 : 1);

  const closeViewer = () => {
    setSeletedImage(undefined);
  };

  return (
    <section id="ourprojects" className="mx-auto min-h-full w-5/6 py-14">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProjects)}
      >
        <>
          
          <HText>OUR PROJECTS</HText>

          {
            projects.map((item, index) => {
              return (
                <div className="py-5 h-auto">
                  <div className="pb-2">
                    <p className="font-bold flex">Architect -&ensp;
                      <p className="font-normal text-gray-600"> N_Ark Design Studio</p>
                    </p>
                    <p className="font-bold flex">Location -&ensp;
                      <p className="font-normal text-gray-600"> {item.details.location}</p>
                    </p>
                    <p className="font-bold flex">Date -&ensp;
                      <p className="font-normal text-gray-600">{item.details.date}</p>
                    </p>
                    <p className="font-bold flex">Category -&ensp;
                      <p className="font-normal text-gray-600">{item.details.category}</p>
                    </p>
                  </div>
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={isAboveMediumScreens ? 2 : 1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    key={item.id}
                    onClick={(slider: any) => {
                      console.log('-- Index ', slider.clickedIndex, " item index - ", index);
                      // setSeletedImage
                      const imageName = projects[index].images[slider.clickedIndex];
                      console.log(imageName);
                      const url = getImageUrl(imageName);
                      setSeletedImage(url);
                    }}
                    simulateTouch={true}
                  >
                    {
                      item.images.map((image) => {
                        return (
                          <SwiperSlide key={item.id + "_" + image}>
                            <div key={item.id + "_" + image} className="md:p-[10px] p-[0px] max-h-[450px] md:max-h-[500px] sm:p-0 h-auto flex">
                              <ArchImage key={item.id + "_" + image} imageUrl={getImageUrl(image)} width={500} height={400} />
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
              )
            })
          }
        </>
      </motion.div>
      <div>
        {selectedImage && <ImageViewer imageUrl={selectedImage} onClose={closeViewer} />}
      </div>

    </section>
  );
};

export default Projects;
