const container = document.querySelector("div");

for (let i = 1; i <= 16; i++) {
    // Create a new div element
    const rowdivs = document.createElement('div');

    // Assign a unique class name to each div
    rowdivs.className = `row-div-${i}`;


    // Append the new div to the container
    container.appendChild(newDiv);
  }


  for (let i = 1; i <= 16; i++) {
    // Create a new div element
    const coldivs = document.createElement('div');

    // Assign a unique class name to each div
    coldivs.className = `col-div-${i}`;


    // Append the new div to the container
    container.appendChild(newDiv);
  }

