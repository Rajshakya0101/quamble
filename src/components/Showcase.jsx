import React, { useRef } from "react";
import "../styles/showcase.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Showcase = ({ type }) => {
  const banners = [
    {image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    },
    {image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    },
    {image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    },
    {image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    },
    {image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    },
    {image:"https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
      link: "",
    }, 
  ];
  const windowSize = useRef(window.innerWidth);

  return (
    <section className={`showcase ${type}-showcase`}>
      <div className="showcase-container container">
        <Swiper
          spaceBetween={1}
          slidesPerView={windowSize.current <= 1150 ? 1 : 2}
          pagination={(true, { clickable: true })}
          autoplay={{
            delay: 3500,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          speed={800}
        >
          {banners.map((ele, i) => {
            return (
              <SwiperSlide key={i}>
                <a href = {ele.link}>
                  <img
                    src={ele.image}
                    alt={"brand"}
                    style={{height: "225px", width: "1582px"}}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
