import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./index.css";

// 컴포넌트 불러오기
import Layout from "./components/layout/Layout";
import Main from "./components/page/Main";


export default function MainComponent() {
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
    </Route>
  </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
