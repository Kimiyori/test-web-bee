const routes = ["/", "/map", "/time"];
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

export const highlightActiveButton = (label) => {
  const childs = getNavElements(label);
  childs.forEach((el) => {
    el.onclick = () => {
      childs.forEach((el) => el.classList.remove("bg-body-secondary", "bg-opacity-50"));
      el.classList.add("bg-body-secondary", "bg-opacity-50");
    };
  });
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
export const handleSideBarButton = () => {
  const location = window.location.pathname;
  const sideBarButton = document.querySelector("#sidebar-menu");
  sideBarButton.hidden = location.endsWith("/") || location.endsWith("activity") ? false : true;
};
