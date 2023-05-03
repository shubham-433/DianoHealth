
//  const navToggler = document.querySelector(".nav-toggler");
//  navToggler.addEventListener("click", navToggle);

//  function navToggle() {
//     navToggler.classList.toggle("active");
//     const nav = document.querySelector(".nav");
//     nav.classList.toggle("open");
//     if(nav.classList.contains("open")){
//     	nav.style.maxHeight = nav.scrollHeight + "px";
//     }
//     else{
//     	nav.removeAttribute("style");
//     }
//  } 

 window.addEventListener("scroll",()=>{
   let header = document.querySelector(".header-section")
   header.classList.toggle("sticky",window.scrollY > 100)
 })


     



