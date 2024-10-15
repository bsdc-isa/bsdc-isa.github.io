const about=document.getElementById("about");
const services = document.getElementById("services");
const insta = document.getElementById("insta");
const snap = document.getElementById("snap");
const whatsapp = document.getElementById("whatsapp");
const x = document.getElementById("x");

about.addEventListener("click", function(){
    window.location.href="about.html";
});
services.addEventListener("click", function(){
    window.location.href="services.html";
})
insta.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/isaz.143?igsh=MWVsdTF3YWE1emRqbg==";
});
snap.addEventListener("click",function(){
    window.location.href="https://www.snapchat.com/add/isa.z143?share_id=GJL8gMIISUOJtviaaE73iw&locale=en_GB";
});
whatsapp.addEventListener("click", function(){
    alert("07496 932296");
});
x.addEventListener("click",function(){
    window.location.href="https://x.com/zamirauto";
});