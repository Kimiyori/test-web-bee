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
    window.location.pathname === el.querySelector("a").pathname && highlightButton(el);
    el.onclick = () => {
      childs.forEach((el) => removeHighlightButton(el));
      highlightButton(el);
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

export const handleHoverButtons = () => {
  navLists.forEach((navLst) => highlightHoverButton(navLst));
};
export const handleSideBarButton = () => {
  const location = window.location.pathname;
  const sideBarButton = document.querySelector("#sidebar-menu");
  sideBarButton.hidden = location.endsWith("/") || location.endsWith("resume") ? false : true;
};
