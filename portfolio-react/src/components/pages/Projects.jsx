import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

// css
import "../../css/projects.scss";

// data
import projectData from "../data/projects_data";

function Projects(props) {
  const selData = projectData;

  // 컴포넌트 전역변수
  const myRef = useRef(null);

  return (
    <div className="part projects">
      <div
        className="swiper-button-prev"
        onClick={() => {
          myRef.current.slidePrev();
        }}
      ></div>
      <div className="projects-wrap wrap">
        <div className="projects-tit core-title">
          <span>PROJECTS</span>
        </div>

        <div className="projects-box">
          <Swiper
            slidesPerView={1}
            //   하단불릿
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            speed={1000}
            //   이동버튼
            navigation={true}
            /* 사용할 모듈을 여기에 적용시킨다 */
            modules={[Pagination, Navigation]}
            // 스와이퍼 사이즈별 슬라이드수 변경!
            className="mySwiper"
          >
            {selData.map((v, i) => (
              <SwiperSlide key={i}>
                <h2>{v.title}</h2>
                <span>{v.date}</span>
                <div className="projects-info">
                  <div className="swiper-img">
                    <img src="/img/1 (1).jpg" alt="으아아아" />
                  </div>
                  <div className="projects-txt" style={{ textAlign: "left" }}>
                    <span className="protxt-span">{v.txt}</span>
                    <div className="projects-desc">
                      <div className="project-functions">
                        <strong>주요기능</strong>
                        <span>{v.desc}</span>
                      </div>
                      <div className="project-tech">
                        <strong>사용기술</strong>
                        <span>{v.tech}</span>
                      </div>
                    </div>
                    {/* projects-desc */}
                  </div>
                  {/* projects-txt */}
                </div>
                {/* projects-info */}
              </SwiperSlide>
            ))}

            {/* 불릿 */}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
        {/* projects-box */}
      </div>
      {/* <!-- projects-wrap --> */}
      <div
        className="swiper-button-next"
        onClick={() => {
          myRef.current.slideNext();
        }}
      ></div>
    </div>
    // part
  );
}

export default Projects;
