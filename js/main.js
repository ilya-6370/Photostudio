let menuToggler = document.getElementsByClassName("menuToggler")[0];
let navList = document.getElementsByClassName("nav_list")[0];

menuToggler.addEventListener("click", ()=>{
    navList.classList.toggle("active")
})


