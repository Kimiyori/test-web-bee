import { isNotLocalhost, ROUTES, REPO_NAME, getTarget } from "./utils/routes.js";
import { highlightActiveButton, handleSideBarButton } from "./utils/buttons.js";
import { myTimer } from "./timer/timer.js";
import { handleScriptLoading } from "./utils/loadScripts.js";

const locationHandler = async () => {
  const location = isNotLocalhost ? window.location.pathname.replace(REPO_NAME, "") : window.location.pathname;
  const route = ROUTES[location];
  try {
    const html = await fetch(isNotLocalhost ? REPO_NAME + route.template : route.template);
    const text = await html.text();
    document.getElementById("content").innerHTML = text;
    document.title = route.title;
  } catch (e) {
    throw new Error("Something went wrong!");
  }
  handleScriptLoading(route);
  window.location.pathname.endsWith("time") && myTimer(false);
};

const route = (event) => {
  event.preventDefault();
  const target = event && getTarget(event);
  target && window.history.pushState({}, "", isNotLocalhost ? REPO_NAME + target.pathname : target.pathname);
  locationHandler();
  highlightActiveButton("header-nav");
  handleSideBarButton();
};
window.onpopstate = locationHandler;
window.route = route;
locationHandler();
