//DOM
document

//opdracht1
const button = document.querySelector ('#mybutton1')
button.addEventListener ('click', function (){
    console.log ("button clicked")
    alert ("button clicked")
}
)

//opdracht2
const body = document.querySelector ("body")
const mybutton2 = document.querySelector ("mybutton2")

const changecolor = document.querySelector ("#mybutton2") 
changecolor.addEventListener ('click', function () {
    body.classList.add ("red-background") ;
   }
)

    
//opdracht3

const togglecolor = () => {
    body.classList.toggle("red-background");
};

mybutton2.addEventListener ("click", togglecolor); 

