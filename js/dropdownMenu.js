const toggleButtons = document.querySelectorAll(".drop-toggle");

const findMenu = (toggleElement) => {
  let menu;
  while (!menu) {
    toggleElement = toggleElement.parentNode;
    menu = toggleElement.querySelector(".drop-down");
  }
  return menu;
};

const toggleDropdownMenu = () => {
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      let menu = findMenu(toggleButton);
      const icon = toggleButton.querySelector("img");
      const isMap = menu.id === "map";
      if (isMap) {
        menu.style.height = !menu.style.height || menu.style.height === "700px" ? "0px" : "700px";
      }
      menu = isMap ? menu.querySelector("ymaps") : menu;
      menu.style.display = menu.style.display === "none" ? "block" : "none";
      icon.src = icon.src.endsWith("UpButton.svg")
        ? "assets/icons/common/Dropdown.svg"
        : "assets/icons/resume/nav/UpButton.svg";
    });
  });
};
toggleDropdownMenu();
