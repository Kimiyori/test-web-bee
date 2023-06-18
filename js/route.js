const routes = {
  "/": {
    template: "/pages/activity.html",
    title: "Activity",
  },
  "/activity": {
    template: "/pages/activity.html",
    title: "Activity",
  },
  "/map": {
    template: "/pages/map.html",
    title: "Map",
    scripts: ["js/map/map.js"],
  },
  "/time": {
    template: "/pages/time.html",
    title: "Time",
  },
};
const route = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
  const buttons = document.querySelectorAll(".active-buttons");
  buttons.forEach((el) => {
    el.onclick = () => {
      buttons.forEach((el) => el.classList.remove("bg-body-secondary", "bg-opacity-50"));
      el.classList.add("bg-body-secondary", "bg-opacity-50");
    };
  });
  const location = window.location.pathname;
  const sideBarButton = document.querySelector("#sidebar-menu")
  sideBarButton.hidden = location === "/test-web-bee/" || location === "/test-web-bee/activity" ? false : true;
};

const loadScript = async (src) => {

  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);
};

const locationHandler = async () => {
  const REPO_NAME = "/test-web-bee";
  const location = window.location.pathname.replace(REPO_NAME, ""); // get the url path
  // const location = window.location.pathname;
  // get the route object from the urlRoutes object
  const route = routes[location];
  // get the html from the template
  const html = await fetch( route.template)
    .then((response) => response.text())
    .catch((e) => console.log("Connection error", e));
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
  route?.scripts?.forEach((src) => loadScript(src));
};
// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
