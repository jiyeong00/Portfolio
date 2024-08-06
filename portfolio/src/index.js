import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 컴포넌트 불러오기
import Main from "./components/page/Main";


export default function MainComponent() {
  <Router>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="character" element={<Character />} />
    </Route>
  </Router>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
