const sideNavBtn = document.querySelector(".collapsible");
const sideNav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".closebtn");
const navItems = document.querySelectorAll(".nav-items a")
const activeElem = document.querySelector("#active")
        
sideNavBtn.addEventListener('click', () => {
    sideNav.style.width = "380px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
});

closeBtn.addEventListener('click', () => {
    sideNav.style.width = "0px"
});

// activeElem.addEventListener('mouseover', () => {
//     activeElem.parentElement.classList.toggle("nav-item")
//     // console.log("hello");
// })

// activeElem.addEventListener('mouseout', () => {
//     activeElem.parentElement.classList.toggle("nav-item")
//     // console.log("bye");
// })
