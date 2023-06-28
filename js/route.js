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

const REPO_NAME = "/test-web-bee";

const isNotLocalhost = window.location.origin.includes("kimiyori.github.io");

const replaceUrl = (event) => {
  const isAnchor = event.target.tagName.toLowerCase() === "a";
  const target = isAnchor ? event.target : event.target.closest("a");
  return target;
};
const highlightActiveButton = () => {
  const buttons = document.querySelectorAll(".active-buttons");
  buttons.forEach((el) => {
    el.onclick = () => {
      buttons.forEach((el) => el.classList.remove("bg-body-secondary", "bg-opacity-50"));
      el.classList.add("bg-body-secondary", "bg-opacity-50");
    };
  });
};
const hideSideBarButton = () => {
  const location = window.location.pathname;
  const sideBarButton = document.querySelector("#sidebar-menu");
  sideBarButton.hidden = location.endsWith("/") || location.endsWith("activity") ? false : true;
};

const loadScript = async (src) => {
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);
};

const locationHandler = async () => {
  const location = isNotLocalhost ? window.location.pathname.replace(REPO_NAME, "") : window.location.pathname;
  const route = routes[location];
  try {
    const html = await fetch(isNotLocalhost ? REPO_NAME + route.template : route.template);
    const text = await html.text();
    document.getElementById("content").innerHTML = text;
    document.title = route.title;
  } catch (e) {
    throw new Error(e);
  }
  route?.scripts?.forEach((src) => loadScript(src));
};

const route = (event) => {
  event.preventDefault();
  const target = replaceUrl(event);
  locationHandler();
  window.history.pushState({}, "", isNotLocalhost ? REPO_NAME + target.pathname : target.pathname);
  highlightActiveButton();
  hideSideBarButton();
};
window.onpopstate = locationHandler;
window.route = route;
locationHandler();
