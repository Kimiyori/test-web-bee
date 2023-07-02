const heightMap = "700px";
const heightTime = "50px";
const mapper = [
  { path: "/map", height: "700px" },
  { path: "/time", height: "50px" },
];
const findMenu = (toggleElement) => {
  let menu;
  while (!menu) {
    toggleElement = toggleElement.parentNode;
    menu = toggleElement.querySelector(".drop-down");
  }
  return menu;
};
const toggleDropdownMenu = () => {
  const toggleButtons = document.querySelectorAll(".drop-toggle");
  toggleButtons.forEach((toggleButton) => {
    let height = mapper.filter(({ path }) => path === window.location.pathname).map(({ height }) => height)?.[0];
    toggleButton.addEventListener("click", () => {
      let menu = findMenu(toggleButton);
      const icon = toggleButton.querySelector("img");
      const isMap = menu.id === "map";
      height = height ?? `${menu.clientHeight}px`;
      menu.style.height = !menu.style.height || menu.style.height === height ? "0px" : height;
      menu = isMap ? menu.querySelector("ymaps") : menu;
      menu.style.display = menu.style.display === "none" ? "block" : "none";
      icon.src = icon.src.endsWith("UpButton.svg")
        ? "assets/icons/common/Dropdown.svg"
        : "assets/icons/resume/nav/UpButton.svg";
    });
  });
};
toggleDropdownMenu();
