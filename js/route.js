const route = (event) => {
  const isNotLocalhost = window.location.origin.includes("kimiyori.github.io");
  const target = event.target.tagName.toLowerCase() === "a" ? event.target : event.target.closest("a");
  target.pathname = isNotLocalhost ? "/test-web-bee" + target.pathname : target.pathname;
};

function highlightActiveButton() {
  const routes = ["/", "/map.html", "/time.html"];
  const navElement = document.querySelector('ul[aria-label="main"]');
  const childs = navElement.querySelectorAll("li");

  for (let i = 0; i < childs.length; i++) {
    window.location.pathname.endsWith(routes[i]) && childs[i].classList.add("bg-body-secondary", "bg-opacity-50");
  }
}
document.addEventListener("DOMContentLoaded", highlightActiveButton);
