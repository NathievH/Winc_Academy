//uitklapmenu
const toggleMenu = function(){
const dropdowncontent = document.querySelector('dropdowncontent');
dropdowncontent.classList.add('show-hide');
const dropdownbtn = document.querySelector('.dropdownbtn');
dropdownbtn.addEventListener('click', function(){
dropdowncontent.classList.toggle('show-hide');
});
}
  

//bodykleuren toggle
const bodycolor = document.querySelector("body");
const whitebtn = document.querySelector(".wit");
const redbtn = document.querySelector(".rood");
const orangebtn = document.querySelector(".oranje");
const yellowbtn = document.querySelector(".geel");
const greenbtn = document.querySelector(".groen");
const bluebtn = document.querySelector(".blauw");
const text = document.querySelector('.text');

const makebackgroundwhite = () => {
    bodycolor.classList.remove("rood", "oranje", "geel", "groen", "blauw");
    bodycolor.classList.add("wit");
    text.classList.add('text');
    text.innerText = 'WIT';
};
whitebtn.addEventListener("click", makebackgroundwhite);

const makeBackgroundRed = () => {
    bodycolor.classList.remove("wit", "oranje", "geel", "groen", "blauw");
    bodycolor.classList.add("rood");
    text.classList.add('text');
    text.innerText = 'ROOD';
};
redbtn.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    bodycolor.classList.remove("rood", "wit", "geel", "groen", "blauw");
    bodycolor.classList.add("oranje");
    text.classList.add('text');
    text.innerText = 'ORANJE';
};
orangebtn.addEventListener("click", makeBackgroundOrange);

const makeBackgroundyellow = () => {
    bodycolor.classList.remove("red", "oranje", "wit", "groen", "blauw");
    bodycolor.classList.add("geel");
    text.classList.add('text');
    text.innerText = 'GEEL';
};
yellowbtn.addEventListener("click", makeBackgroundyellow);

const makeBackgroundGreen = () => {
    bodycolor.classList.remove("red", "oranje", "geel", "wit", "blauw");
    bodycolor.classList.add("groen");
    text.classList.add('text');
    text.innerText = 'GROEN';
};
greenbtn.addEventListener("click", makeBackgroundGreen);

const makeBackgroundblue = () => {
    bodycolor.classList.remove("red", "oranje", "geel", "wit", "wit");
    bodycolor.classList.add("blauw");
    text.classList.add('text');
    text.innerText = 'BLAUW';
};
bluebtn.addEventListener("click", makeBackgroundblue);
