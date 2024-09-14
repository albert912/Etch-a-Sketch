let container = document.querySelector(".main");


function randomize(){
max = 256;
  
  
let red = Math.floor(Math.random() * max);

let blue = Math.floor(Math.random() * max);

let green = Math.floor(Math.random() * max) ;

return `rgb(${red}, ${blue}, ${green})`;

}

//function opacity() {
   
  //for (let i=0.1; i<=1; i+= 0.1)
 
//}


container.addEventListener
("mouseover", () => {
   
    container.style.backgroundColor = randomize();
  
   
    container.style.opacity -= "-0.1" 

     
     
})


  




//let newdiv = document.createElement("div");

//newdiv.classList.add ("subdiv");

//container.appendChild(newdiv);
