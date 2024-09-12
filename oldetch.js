

const container = document.querySelector("div");


const squareSize = container.clientWidth/16;

for (let i = 1; i <= 16*16; i++) {
   const box = document.createElement('div');
   box.classList.add("square");

   box.style.width = `${squareSize}px`;

  box.style.height = `${squareSize}px`;


    container.appendChild(box);

    box.addEventListener("mouseover", event => {
        event.target.style.background = "crimson";
   });

}



    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {

        let input = prompt("Grid Size");

        let number = parseInt(input);

        if(number>100) {
            alert("Grid Size should be 100 or smaller")
        } else {
            generateGrid(number);

       }

    });


    function generateGrid(number){

 
   let maindiv = document.querySelector(".main");

   maindiv.innerHTML = " ";
    
   
   
   const squareSize2 = maindiv.clientWidth/number;




   for (let i=0; i < number*number; i++) {

    const box2 = document.createElement('div');
    box2.classList.add("square2");
 
    box2.style.width = `${squareSize2}px`;
 
   box2.style.height = `${squareSize2}px`;
 
 
     container.appendChild(box2);
 
     box2.addEventListener("mouseover", event => {
         event.target.style.background = "crimson";
    });

   }

    }
        

  

   

 







