import React from "react";

function Projects(props) {
  return (
    <div className="part projects">
      <div className="projects-wrap wrap">
        <div className="projects-tit core-title">
          <span>PROJECTS</span>
        </div>
        <div className="projects-box">
          <h2>ShinHan Art</h2>
          <span>2024.06 ~ (1人 개인 프로젝트)</span>
          <div className="projects-info">
            {/* 스와이퍼 넣을 자리 */}
            <div className="swiper-img">
              <img src="/img/1 (1).jpg" alt="으아아아" />
            </div>
            <div className="projects-txt">
              <span>
                타임박스 플래너를 앱으로 활용하기 위한 PWA 기반의
                웹사이트입니다. 시중의 앱들은 필요 이상으로 복잡하여 타임박스
                플래너 본연의 기능만을 최소한으로 담도록 직접 개발하였습니다.
                조금씩 공부하고 있었던 새로운 버전의 Next.js를 본격적으로 체화할
                수 있었습니다. 인증의 구현을 위해 Supabase를 처음 사용해보며
                Firebase와 비교해볼 수 있었고, Vercel의 무료 PostgreSQL을
                사용해보며 Raw SQL에 더욱 익숙해질 수 있었습니다. 지원이 중단된
                Recoil 대신에 Zustand를 처음으로 익히면서 Recoil과의 차이점을
                느낄 수 있었습니다.
              </span>
              <div className="projects-desc">
                <strong>주요기능</strong>
                <span>
                  날짜별로 각 루틴의 달성 여부, 할 일 목록, 시간 단위 일정
                  기입하기, 월별로 각 루틴의 달성 여부를 한눈에 확인하기
                </span>
              </div>
            </div>
            {/* projects-txt */}
          </div>
          {/* projects-info */}
        </div>
        {/* projects-box */}
      </div>
      {/* <!-- projects-wrap --> */}
    </div>
    // part
  );
}

export default Projects;
