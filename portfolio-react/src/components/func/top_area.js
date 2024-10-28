// 모바일 탑아리아 메뉴 관련 JS

import mFn from "./my_function";
import $ from "jquery";

function openMenu(){
    // 클릭시 이미지 변경
    $(".fa-xmark").toggleClass("on");
    $(".fa-bars").toggleClass("on");
    // console.log("열렸따!");

    $(".drop_menu").toggleClass("on");
    

};
function closeMenu(){
    $(".fa-xmark").removeClass("on");
    $(".fa-bars").removeClass("on");

    $(".drop_menu").removeClass("on");

};

export {openMenu,closeMenu};