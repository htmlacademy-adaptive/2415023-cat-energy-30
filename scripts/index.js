document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".header__menu-button"),n=document.querySelector(".main-navigation__list");t.addEventListener("click",()=>{t.classList.toggle("header__menu-button--closed"),t.classList.toggle("header__menu-button--opened"),t.classList.contains("header__menu-button--opened")?(n.classList.add("main-navigation__list--opened"),n.classList.remove("main-navigation__list--closed")):(n.classList.add("main-navigation__list--closed"),n.classList.remove("main-navigation__list--opened"))});let i=document.querySelector(".operation-example__slider-button"),a=document.querySelector(".operation-example__slider"),d=document.querySelector(".operation-example__slider-wrapper--before"),l=document.querySelector(".operation-example__slider-wrapper--after"),o=!1,s=0;i.addEventListener("mousedown",e=>{e.preventDefault(),o=!0,s=e.clientX,i.style.opacity="0.6"}),document.addEventListener("mousemove",e=>{if(o){let c=e.clientX-s,r=Math.min(Math.max(d.offsetWidth+c*1,0),a.offsetWidth),u=a.offsetWidth-r;d.style.width=`${r}px`,l.style.width=`${u}px`,s=e.clientX}}),document.addEventListener("mouseup",()=>{o=!1})});