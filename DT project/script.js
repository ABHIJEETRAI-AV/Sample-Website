// document.addEventListener('DOMContentLoaded', function () {


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
       
//         if (entry.isIntersecting) {
//             entry.target.classList.add('section2');
//             console.log(entry.isIntersecting)
//         } else {
//             entry.target.classList.remove('section2');
//         }
//     });
// });

// const section = document.querySelectorAll('.section2-show');


// section.forEach((el) =>
//     observer.observe(el))


// const observer1 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('flash');
//         } else {
//             entry.target.classList.remove('flash');
//         }
//     });
// });

// const section1 = document.querySelectorAll('.flash-show');

// section1.forEach((el) =>
//     observer.observe(el))

const icon= document.querySelector(".theme-icon")
const link= document.querySelector(".change-css")
const link1= document.querySelector(".change-css1")
const head= document.querySelector("head")
const theme= document.querySelector(".theme-icon")
link1.remove();


icon.addEventListener('click', function(){
// link.href.toggle="style.css"
const link2= document.querySelector(".change-css")
if(link2){
link.remove();
head.appendChild(link1);
theme.innerHTML='<i class="fa-solid fa-sun"></i>'
}
else{
    link1.remove();
    head.appendChild(link);
    theme.innerHTML='<i class="fa-solid fa-moon"></i>'
}
})





const side_menu = document.querySelector(".menu-icon");
const side_menu_content = document.querySelector("#side-menu-id");
const cross = document.querySelector(".cross");
// const x = window.matchMedia("(max-width: 375px)")


side_menu.addEventListener('click', function(){
    side_menu_content.className = "display side-menu";
    console.log("Yo")

})

cross.addEventListener('click', function(){
    side_menu_content.className = "hide side-menu";
    console.log("Yo")

})
