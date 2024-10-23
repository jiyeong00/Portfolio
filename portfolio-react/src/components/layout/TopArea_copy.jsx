import React, { useEffect, useState } from "react";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

import mFn from "../func/my_function";
import { openMenu, closeMenu } from "../func/top_area";
import TopMenu_M from "../modules/TopMenu_M";

//데이터
import menuData from "../data/menu_data";

function TopArea(props) {
  const topScroll = (a) => {
    const aboutArea = document.querySelector("." + a);
    if (!aboutArea) return;

    const bcrVal = aboutArea.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset; // 현재 스크롤 위치
    const targetTop = bcrVal.top + scrollTop; // 전체 문서 기준 타켓 위치

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  ////top메뉴 - 모바일////////////////////////////////////
  useEffect(() => {
    // 모바일에서 메뉴 클릭시 on빼서 메인으로 가기
    const clickLi = mFn.qsa(".topMenu-link li");
    clickLi.forEach((ele) => {
      ele.onclick = () => {
        closeMenu();
      };
    });
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  // width 값 실시간으로 가져오기
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  ////top메뉴 - 모바일////////////////////////////////////

  ////스크롤시 헤더 색 변경////////////////////////////////////
  useEffect(() => {
    const topArea = mFn.qs(".header-area");
    if (!topArea) return;

    const handleScroll = () => {
      // 스크롤 등장 기준설정 : 화면의 2/3
      const CRITERIA = window.innerHeight / 4;
      let scrollLocation = document.documentElement.scrollTop;

      if (CRITERIA < scrollLocation) {
        topArea.style.backgroundColor = "white";
        topArea.style.transition = ".3s ease-out";
      } else if (CRITERIA > scrollLocation) {
        topArea.style.backgroundColor = "rgba(0, 0, 0, 0)";
        topArea.style.transition = ".3s ease-out";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  ////스크롤시 헤더 색 변경////////////////////////////////////

  console.log(menuData.id);

  return (
    <header id="header-area">
      <header className="header-area">
        <a href="#">jiYeong's portfolio</a>
        {/* width가 990 이상일떄 */}
        {width > 990 && (
          <nav className="gnb">
            <ul>
              {/* {menuData.map((v,i)=>(
              ))} */}
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
        )}
        {/* width가 990 이하일떄 */}
        {width <= 990 && (
          <>
            {/* 모바일 햄버거버튼 */}
            <div className="nav-img" onClick={openMenu}>
              <img
                src={process.env.PUBLIC_URL + "/img/menu_w.png"}
                alt="메뉴버튼 이미지"
              />
              <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
            </div>
            <div className="drop_menu"></div>
          </>
        )}
      </header>
      <TopMenu_M/>
    </header>
  );
}

export default TopArea;
