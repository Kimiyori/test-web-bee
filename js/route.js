const onClick = (event) => {
  if (window.location.origin.includes("kimiyori.github.io")) {
    event.target.pathname = "/test-web-bee" + event.target.pathname;
  }
};
const routes = ["activity", "map", "time"];
function ready() {
  const navElement = document.getElementById("navigation");
  const childs = navElement.querySelectorAll("li");
  for (let i = 0; i < childs.length; i++) {
    if (window.location.pathname.includes(routes[i])) {
      childs[i].classList.add("bg-body-secondary", "bg-opacity-50");
    }
  }
}
document.addEventListener("DOMContentLoaded", ready);
