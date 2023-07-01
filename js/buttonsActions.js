const routes = ["/", "/map.html", "/time.html"];

const getNavElements = (label) => {
  const navElements = document.querySelectorAll(`ul[aria-label="${label}"]`);
  const childs = [];
  navElements.forEach((elem) => {
    childs.push(...elem.querySelectorAll("li"));
  });
  return childs;
};

function highlightActiveButton(label) {
  const childs = getNavElements(label);
  for (let i = 0; i < childs.length; i++) {
    window.location.pathname.endsWith(routes[i]) && childs[i].classList.add("bg-body-secondary", "bg-opacity-50");
  }
}
function highlightHoverButton(label) {
  const childs = getNavElements(label);
  for (let i = 0; i < childs.length; i++) {
    childs[i].addEventListener("mouseenter", (event) => {
      event.target.classList.add("bg-body-secondary", "bg-opacity-50");
    });
    childs[i].addEventListener("mouseleave", (event) => {
      !window.location.pathname.endsWith(routes[i]) &&
        event.target.classList.remove("bg-body-secondary", "bg-opacity-50");
    });
  }
}
highlightHoverButton("header-nav");

document.addEventListener("DOMContentLoaded", () => highlightActiveButton("header-nav"));
