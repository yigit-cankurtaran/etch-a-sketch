document.addEventListener("DOMContentLoaded", () => {
  // this fixed it.
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  if (document.body) {
    document.body.appendChild(gridContainer); // problematic line, uncaught typeerror
  }

  // set the dimensions and styles of the grid items
  const gridItems = document.querySelectorAll(".grid-item");
  const numRows = 16;
  const numCols = 16;
  const screenMargin = 20;
  const screenWidth = window.innerWidth - screenMargin;
  const screenHeight = window.innerHeight - screenMargin;
  const containerWidth = Math.min(screenWidth, screenHeight) - screenMargin * 2;
  // ensuring that the grid items are square, and that they fit on the screen
  const itemSize = Math.floor(containerWidth / numCols);
  // -2 because of the borders

  // create the individual grid items and append them to the grid container
  for (let i = 0; i < numRows * numCols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    // adding them to the item class
    gridContainer.appendChild(gridItem);
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    gridItem.style.border = "1px solid black";
  }

  gridItems.forEach((gridItem) => {
    gridItem.style.flex = `1 0 ${100 / numCols}%`;
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    gridItem.style.border = "1px solid black";
  });

  // set the grid template and grid container styles
  gridContainer.style.overflow = "auto";
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  gridContainer.style.width = `${numCols * (itemSize + 2)}px`;
});
