import React, { Fragment, useRef } from "react";
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
import imgData from "../data/project_img_data";

// jquery
import $ from "jquery";

function Projects(props) {
  const selData = projectData;
  const selImgData = imgData;

  // 컴포넌트 전역변수
  const myRef = useRef(null);

  return (
    <div className="part projects">
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
                    {/* 이미지 슬라이더 */}
                    {selImgData.map((v, i) => (
                      <SwiperSlide key={i}>
                        {
                          (console.log("확인용", v, i),
                          console.log("이미지 데이터", selImgData))
                          // 3개의 데이터가 각각 3번씩 뜸 큰 문제 없어보이는데 일단 ㄱ
                        }
                      </SwiperSlide>
                    ))}
                  </div>
                  <div className="projects-txt" style={{ textAlign: "left" }}>
                    <span className="protxt-span">
                      {/* {v.txt} */}
                      <div>
                        {/* 문자데이터 중 "^"로 잘라서 배열로 만들고 각각 p태그로 랩핑해줌 */}
                        {v.txt.split("^").map((v, i) => (
                          <React.Fragment key={i}>
                            <p style={{ marginTop: "1em" }}>{v}</p>
                          </React.Fragment>
                        ))}
                      </div>
                    </span>
                    <div className="projects-desc">
                      <div className="project-functions">
                        {v.mem == "team" ? (
                          <strong>담당 기능</strong>
                        ) : (
                          <strong>주요 기능</strong>
                        )}
                        <span>{v.desc}</span>
                      </div>
                      <div className="project-git">
                        <strong>GitHub</strong>
                        <span>
                          <a
                            href={v.git}
                            target="_blank"
                            style={{ color: "#80bfe9" }}
                          >
                            {v.stit}
                          </a>
                        </span>
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
    </div>
    // part
  );
}

export default Projects;
