document.addEventListener("DOMContentLoaded", () => {
  // this fixed it.
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  if (document.body) {
    document.body.appendChild(gridContainer); // problematic line, uncaught typeerror
  }

  // make the divs appear as a 16x16 grid
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  gridContainer.style.gap = "1px";
});
