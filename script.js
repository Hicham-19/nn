let Toggle = document.querySelector(".bx");
AOS.init({
  duration:1200,

});
let Menu = document.querySelector(".Menu");
// InformationPost=document.querySelector('.InformationPost');
let iconMenu = document.querySelectorAll('.Menu li a');
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " w3-opacity-off";
// }
// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }




for(let i in iconMenu)
{
	iconMenu[i].onclick = ()=>{
		Menu.classList.remove("showMenu");
	}
}

// iconMenu[0].onclick=()=>{
//   Menu.classList.remove("showMenu");
// //  window.location.reload();
// window.location.reload();

// }
window.scroll=()=>{

		alert('gg');
	
}

// link = document.querySelectorAll('.Menu li');
Toggle.onclick = ()=>
{
	Menu.classList.toggle("showMenu");
}



window.onscroll = () =>{
    Menu.classList.remove('showMenu');
}
