import { isNotLocalhost, ROUTES, REPO_NAME, getTarget, scriptIsLoaded } from "./utils/routes.js";
import { highlightActiveButton, handleSideBarButton } from "./utils/buttons.js";
import { myTimer } from "./timer/timer.js";

const loadScript = async (src) => {
  return new Promise(function (resolve, reject) {
    if (scriptIsLoaded(src)) {
      src.endsWith("map.js") && initMap();
      src.endsWith("dropdownMenu.js") && toggleDropdownMenu();
      return resolve();
    }
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Something went wrong with ${src}`));

    document.body.append(script);
  });
};
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
  route?.scripts?.reduce((acc, src) => acc.then(() => loadScript(src)), Promise.resolve());
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
