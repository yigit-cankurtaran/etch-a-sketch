document.addEventListener("DOMContentLoaded", () => {
  // this fixed it.
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  if (document.body) {
    document.body.appendChild(gridContainer);
  }

  const gridItems = document.querySelectorAll(".grid-item");

  // calculate container width and item size
  const numRows = 16;
  const numCols = 16;
  const screenMargin = 20;
  const screenWidth = window.innerWidth - screenMargin;
  const screenHeight = window.innerHeight - screenMargin;
  const containerWidth = Math.min(screenWidth, screenHeight) - screenMargin * 2;
  // ensuring that the grid items are square, and that they fit on the screen
  const itemSize = Math.floor(containerWidth / numCols) - 2;
  // 2 because the border is 1px on each side

  // set the grid template and grid container styles
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  gridContainer.style.width = `${numCols * (itemSize + 2)}px`;
  gridContainer.style.height = `${numRows * (itemSize + 2)}px`;
  gridContainer.style.justifyContent = "center";
  gridContainer.style.alignItems = "center";
  gridContainer.style.margin = "auto";

  // create the individual grid items and append them to the grid container
  for (let i = 0; i < numRows * numCols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    gridItem.style.border = "1px solid black";
    gridContainer.appendChild(gridItem);
  }

  // update grid size when the window is resized
  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth - screenMargin;
    const screenHeight = window.innerHeight - screenMargin;
    const containerWidth =
      Math.min(screenWidth, screenHeight) - screenMargin * 2;
    const itemSize = Math.floor(containerWidth / numCols) - 2;
    gridContainer.style.width = `${numCols * (itemSize + 2)}px`;
    gridContainer.style.height = `${numRows * (itemSize + 2)}px`;
    gridItems.forEach((item) => {
      item.style.width = `${itemSize}px`;
      item.style.height = `${itemSize}px`;
    });
  });
});
