import Resume from "../views/Resume.js";
import Map from "../views/Map.js";
import Timer from "../views/Timer.js";
import { myTimer } from "../timer/timer.js";
import { toggleDropdownMenu } from "../utils/dropdownMenu.js";
import { handleSideBarButton, handleHoverButtons } from "../utils/buttons.js";
export const ROUTES = {
  "/": {
    template: Resume,
    title: "Resume",
    scripts: ["static/components/skillsList.js"],
  },
  "/resume": {
    template: Resume,
    title: "Resume",
    scripts: ["static/omponents/skillsList.js", "static/js/utils/dropdownMenu.js"],
  },
  "/map": {
    template: Map,
    title: "Map",
    scripts: [
      "static/components/wrapper.js",
      "https://api-maps.yandex.ru/3.0/?apikey=408b142c-6392-4e29-8703-3017a9505008&lang=en_EN",
      "static/js/map/map.js",
    ],
  },
  "/time": {
    template: Timer,
    title: "Time",
    scripts: ["static/components/wrapper.js"],
  },
};

export const findMatchRoute = () => {
  return ROUTES[window.location.pathname];
};

export const getTarget = (event) => {
  const isAnchor = event.target.tagName.toLowerCase() === "a";
  return isAnchor ? event.target : event.target.closest("a");
};

export const updateTitle = (title) => (document.title = title);

export const handleLoadActions = () => {
  window.location.pathname.endsWith("time") && myTimer(false);
  handleSideBarButton();
  handleHoverButtons();
  toggleDropdownMenu();
};

export const assignHtml = async (route) => {
  document.getElementById("content").innerHTML = await route.template();
};
