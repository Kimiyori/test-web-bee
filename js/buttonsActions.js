const routes = ["/", "/map.html", "/time.html"];
const navLists = ["header-nav", "upper-nav", "side-nav"];
const getNavElements = (label) => {
  const navElements = document.querySelectorAll(`ul[aria-label="${label}"]`);
  const childs = [];
  navElements.forEach((elem) => {
    childs.push(...elem.querySelectorAll("li"));
  });
  return childs;
};

const highlightButton = (button) => {
  button.classList.add("bg-body-secondary", "bg-opacity-50");
};
const removeHighlightButton = (button) => {
  button.classList.remove("bg-body-secondary", "bg-opacity-50");
};

const highlightActiveButton = (label) => {
  const childs = getNavElements(label);
  for (let i = 0; i < childs.length; i++) {
    if (window.location.pathname.endsWith(routes[i])) {
      highlightButton(childs[i]);
      break;
    }
  }
};
const highlightHoverButton = (label) => {
  const childs = getNavElements(label);
  childs.forEach((child) => {
    child.addEventListener("mouseenter", (event) => {
      highlightButton(event.target);
    });
    child.addEventListener("mouseleave", (event) => {
      const currentLink = event.target.querySelector("a").pathname;
      !window.location.pathname.endsWith(currentLink) && removeHighlightButton(event.target);
    });
  });
};


navLists.forEach((navLst) => highlightHoverButton(navLst));

document.addEventListener("DOMContentLoaded", () => highlightActiveButton("header-nav"));
