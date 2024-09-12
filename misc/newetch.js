const container = document.querySelector("div");


for (let i=1; i <= 16; i++) {
   const subcontainer = document.createElement("div");

    subcontainer.classList.add("sub1");

    container.appendChild(subcontainer);

    subcontainer.addEventListener("mouseover", event => {
        event.target.style.background = "lightblue";
   });



    for (let i = 1; i <= 16; i++) {
     const box = document.createElement("div");

     box.classList.add("square");

     subcontainer.appendChild(box);
 
    box.addEventListener("mouseover", event => {
      event.target.style.background = "purple";
    })

}


}

 

   

