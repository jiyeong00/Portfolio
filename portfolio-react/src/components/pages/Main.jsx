import React from "react";
import Projects from "./Projects";

function Main(props) {
  return (
    <section className="mainArea">
      <div className="part main">
        <div className="main-wrap">
          <h1>신입 프론트엔드 개발자 포트폴리오</h1>
          <h2>
            안녕하세요
            <br />
            꿈을 향해 달려가는 개발자 유지영입니다.
          </h2>
        </div>
        {/* <!-- main-wrap --> */}
      </div>
      {/* <!-- main --> */}
      <div className="part about">
        <div className="about-wrap">
          <div className="about-tit">ABOUT ME</div>
          <ul className="about-list">
            <li>
              <div className="icon"></div>
              <strong>이름</strong>
              <span>유지영</span>
            </li>
            <li>
              <div className="icon"></div>
              <strong>생년월일</strong>
              <span>99.12.06</span>
            </li>
            <li>
              <div className="icon"></div>
              <strong>주소지</strong>
              <span>서울특별시 성동구</span>
            </li>
            <li>
              <div className="icon"></div>
              <strong>연락처</strong>
              <span>010-3449-5231</span>
            </li>
            <li>
              <div className="icon"></div>
              <strong>이메일</strong>
              <span>buti12@naver.com</span>
            </li>
            <li>
              <div className="icon"></div>
              <strong>학력</strong>
              <span>배화여자대학교(정보보호과/SW보안융합학과)</span>
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
        <div className="skills-wrap">
          <div className="skills-tit">SKILLS</div>
          <ul>
            <li>
              <h3>업무에도 활용 가능해요!</h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Sass</li>
                <li>React</li>
              </ol>
            </li>
            <li>
              <ol>
                <h3>어느 정도 사용할 줄 알아요.</h3>
                <li>pSQL</li>
                <li>mySQL</li>
                <li>jQuery</li>
              </ol>
            </li>
            <li>
              <ol>
                <h3>보고 이해할 수는 있어요.</h3>
                <li>C</li>
                <li>파이선</li>
                <li>JAVA</li>
                <li>Vue.JS</li>
                <li>PHP</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <Projects/>
    </section>
  );
}

export default Main;
