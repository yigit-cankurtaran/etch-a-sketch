// let's see what works and what doesn't.
console.log("Hello world!");
// prints

// create a div with a class of grid-container and append it to the body
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
console.log("hi");
//prints
document.body.appendChild(gridContainer); // problematic line, uncaught typeerror
console.log("hi");
// this doesn't print.

// make the divs appear as a 16x16 grid
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
gridContainer.style.gap = "1px";
