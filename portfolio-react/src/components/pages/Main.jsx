import React from "react";
import Projects from "./Projects";

// 제이쿼리
import $ from "jquery";

// css
import "../../css/main.scss";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faPen,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// data
import skillsData from "../data/skills_data";

function Main(props) {
  const selData = skillsData;
  console.log(selData.front.skillsName);
  // console.log($(".skills h3").text());
  return (
    <section className="mainArea">
      <div className="part main">
        <div className="main-wrap wrap">
          <h1>신입 프론트엔드 개발자 포트폴리오</h1>
          <hr className="hr-tag" />
          <div className="intro-text">
            <p>
              안녕하세요.
              <br />
              꿈을 향해 도전하는 개발자, <strong>유지영</strong>입니다.
            </p>

            <p>
              <strong>React</strong>를 중심으로 프론트엔드 개발을 공부하며
              <br />
              사용자 중심의 UI/UX를 구현하는 것에 큰 관심을 가지고 있습니다.
            </p>

            <p>
              현재는 프론트엔드를 집중적으로 다루고 있지만,
              <br />
              궁극적으로는 백엔드까지 확장하여
              <br />
              <strong>풀스택 개발자</strong>로 성장하는 것을 목표로 하고
              있습니다.
            </p>

            <p>
              아직 배울 것이 많은 신입 개발자지만,
              <br />
              끊임없이 배우고, 꾸준히 성장하며 개발에 대한 이해를 넓혀가고
              있습니다.
            </p>

            <p>잘 부탁드립니다!</p>
          </div>
        </div>
        {/* <!-- main-wrap --> */}
      </div>
      {/* <!-- main --> */}
      <div className="part about">
        <div className="about-wrap wrap">
          <div className="about-tit core-title">
            <span>ABOUT ME</span>
          </div>
          <ul className="about-list">
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon className="font-awesome" icon={faUser} />
                <div className="about-info">
                  <strong>이름</strong>
                  <span>유지영</span>
                </div>
              </div>
            </li>
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon className="font-awesome" icon={faCalendar} />
                <div className="about-info">
                  <strong>생년월일</strong>
                  <span>99.12.06</span>
                </div>
              </div>
            </li>
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon
                  className="font-awesome"
                  icon={faLocationDot}
                />
                <div className="about-info">
                  <strong>주소지</strong>
                  <span>서울특별시 성동구</span>
                </div>
              </div>
            </li>
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon
                  className="font-awesome"
                  icon={faPhoneVolume}
                />
                <div className="about-info">
                  <strong>연락처</strong>
                  <span>010-3449-5231</span>
                </div>
              </div>
            </li>
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon className="font-awesome" icon={faEnvelope} />
                <div className="about-info">
                  <strong>이메일</strong>
                  <span>buti12@naver.com</span>
                </div>
              </div>
            </li>
            <li>
              <div className="list-wrap">
                <FontAwesomeIcon className="font-awesome" icon={faPen} />
                <div className="about-info">
                  <strong>학력</strong>
                  <span>
                    배화여자대학교
                    <br />
                    SW보안융합학과
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="about-git">
            <a href="https://github.com/jiyeong00" target="_blank">
              https://github.com/jiyeong00
            </a>
          </div>
        </div>
        {/* <!-- about-wrap --> */}
      </div>
      {/* <!-- about me --> */}
      <div className="part skills">
        <div className="skills-wrap wrap">
          <div className="skills-tit core-title">
            <span>SKILLS</span>
          </div>
          <ul>
            <li>
              <h3>Frontend</h3>
              <ol>
                {skillsData.front.skillsName.map((v, i) => (
                  <li key={i}>
                    <img src={`/img/front-${i + 1}.png`} alt={v} />
                  </li>
                ))}
              </ol>
            </li>
            <li>
              <h3>Backend</h3>
              <ol>
                {skillsData.back.skillsName.map((v, i) => (
                  <li key={i}>
                    <img src={`/img/back-${i + 1}.png`} alt={v} />
                  </li>
                ))}
              </ol>
            </li>
          </ul>
        </div>
        {/* skills-wrap */}
      </div>
      {/* skills */}
      <Projects />
    </section>
  );
}

export default Main;
