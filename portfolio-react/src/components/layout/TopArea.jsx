import React from "react";

function TopArea(props) {
  const topScroll = (a) => {
    const aboutArea = document.querySelector("." + a);
    if (!aboutArea) return;

    const bcrVal = aboutArea.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset; // 현재 스크롤 위치
    const targetTop = bcrVal.top + scrollTop; // 전체 문서 기준 타켓 위치

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };
  return (
    <header id="header-area">
      <header className="header-area">
        <a href="#">jiYeong's portfolio</a>
        <nav className="gnb">
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // 링크 기본 동작 방지
                  topScroll("about");
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  topScroll("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  topScroll("projects");
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </header>
  );
}

export default TopArea;
