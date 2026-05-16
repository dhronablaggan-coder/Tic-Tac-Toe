let modes = document.querySelector("#modes");


let mode = "light mode ";

modes.addEventListener("click" , () => {
   if(mode === "light mode ") {
    mode = "dark mode "
    document.querySelector("div").style.backgroundColor = "black"
    document.querySelector("div").style.color = "white"
    document.querySelector("body").style.backgroundColor = "white"

   }else{
    mode = "light mode ";
    document.querySelector("div").style.backgroundColor = "white"
    document.querySelector("div").style.color = "black"
    document.querySelector("body").style.backgroundColor = "black"
   }

   console.log(mode);
})