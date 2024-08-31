const container = document.querySelector("div");


for (let i = 1; i <= 256; i++) {
    const box = document.createElement('div');
   box.classList.add("square");
    container.appendChild(box);
}

