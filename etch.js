

const container = document.querySelector("div");


for (let i = 1; i <= 256; i++) {
   const box = document.createElement('div');
   box.classList.add("square");
    container.appendChild(box);

    box.addEventListener("mouseover", event => {
        event.target.style.background = "crimson";
   });



}


    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {

       
         
       

        const input = parseInt(prompt("Enter the number of squares of the new grid",));

         
        


       //if (input<100)
        //input.addEventListener("input", () => {

          
            
         
         //});

        });

  



   
  
   

 







