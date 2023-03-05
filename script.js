document.addEventListener("DOMContentLoaded", () => {
  // this fixed it.
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  if (document.body) {
    document.body.appendChild(gridContainer); // problematic line, uncaught typeerror
  }

  // create the individual grid items and append them to the grid container
  for (let i = 0; i < 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    // adding them to the item class
    gridContainer.appendChild(gridItem);
  }

  // set the dimensions and styles of the grid items
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.style.flex = "1 0 auto";
    gridItem.style.width = "100px";
    gridItem.style.height = "100px";
    gridItem.style.border = "1px solid black";
  });

  // set the grid template and grid container styles
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  gridContainer.style.gap = "1px";
  gridContainer.style.gridAutoFlow = "dense";
  gridContainer.style.overflow = "auto";
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  gridContainer.style.width = "100%";
});
