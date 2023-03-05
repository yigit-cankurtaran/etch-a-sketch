// create a page with a 16x16 grid of square divs

// create a div with a class of grid-container and append it to the body
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.appendChild(gridContainer);

// make the divs appear as a 16x16 grid
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
gridContainer.style.gap = "1px";

// show the grids on screen, different color for each
for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.backgroundColor = "black";
  gridContainer.appendChild(grid);
}
