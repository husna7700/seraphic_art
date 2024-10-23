let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick =() =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
}
window.onscroll =() =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
let header = document.querySelector("header");
window.addEventListener("scroll",() =>{
    header.classList.toggle("header-active",window.scrollY > 0);
});
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll",() =>{
    scrollTop.classList.toggle("scroll-active",window.scrollY >=  400);
});
function sendMail(){
    n=document.getElementById("Name").value;
    e=document.getElementById("Email").value;
    m=document.getElementById("Message").value;
    if(n!=""&& e!=""&& m!="")
    {
    var params ={
        name:n,
        email:e,
        message:m
    } 
    emailjs.send("service_81kyrzb", "template_ubt077r", params).then((res)=>{
        console.log(res);
        alert("your message send successfully");
    })
    .catch(err =>console.log(err))
}
}

