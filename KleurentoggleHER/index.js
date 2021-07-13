//MENU
const dropdownbtn = document.querySelector('.dropdownbtn');
let dropdowncontent = document.querySelector('.dropdowncontent');

dropdownbtn.addEventListener('click', function(){
    dropdowncontent.style.visibility = "visible";
});

//kleurentoggle

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
    dropdowncontent.style.visibility = "hidden";
};

whitebtn.addEventListener("click", makebackgroundwhite);

const makeBackgroundRed = () => {
    bodycolor.classList.remove("wit", "oranje", "geel", "groen", "blauw");
    bodycolor.classList.add("rood");
    text.classList.add('text');
    text.innerText = 'ROOD';
    dropdowncontent.style.visibility = "hidden"
};
redbtn.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    bodycolor.classList.remove("rood", "wit", "geel", "groen", "blauw");
    bodycolor.classList.add("oranje");
    text.classList.add('text');
    text.innerText = 'ORANJE';
    dropdowncontent.style.visibility = "hidden"
};
orangebtn.addEventListener("click", makeBackgroundOrange);

const makeBackgroundyellow = () => {
    bodycolor.classList.remove("red", "oranje", "wit", "groen", "blauw");
    bodycolor.classList.add("geel");
    text.classList.add('text');
    text.innerText = 'GEEL';
    dropdowncontent.style.visibility = "hidden"
};
yellowbtn.addEventListener("click", makeBackgroundyellow);

const makeBackgroundGreen = () => {
    bodycolor.classList.remove("red", "oranje", "geel", "wit", "blauw");
    bodycolor.classList.add("groen");
    text.classList.add('text');
    text.innerText = 'GROEN';
    dropdowncontent.style.visibility = "hidden"
};
greenbtn.addEventListener("click", makeBackgroundGreen);

const makeBackgroundblue = () => {
    bodycolor.classList.remove("red", "oranje", "geel", "wit", "wit");
    bodycolor.classList.add("blauw");
    text.classList.add('text');
    text.innerText = 'BLAUW';
    dropdowncontent.style.visibility = "hidden"
};
bluebtn.addEventListener("click", makeBackgroundblue);


