import React from "react";
import TopArea from "./TopArea";
import MainArea from "./MainArea";

function Layout(props) {
  return (
    <>
      {/* // 상단영역 */}
      <TopArea />
      {/* // 메인영역 */}
      <MainArea />
    </>
  );
}

export default Layout;
