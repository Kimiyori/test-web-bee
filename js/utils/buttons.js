export const highlightActiveButton = () => {
  const navElement = document.querySelector('ul[aria-label="main"]');
  const childs = navElement.querySelectorAll("li");
  childs.forEach((el) => {
    el.onclick = () => {
      childs.forEach((el) => el.classList.remove("bg-body-secondary", "bg-opacity-50"));
      el.classList.add("bg-body-secondary", "bg-opacity-50");
    };
  });
};
export const handleSideBarButton = () => {
  const location = window.location.pathname;
  const sideBarButton = document.querySelector("#sidebar-menu");
  sideBarButton.hidden = location.endsWith("/") || location.endsWith("activity") ? false : true;
};
