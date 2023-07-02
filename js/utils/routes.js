export const ROUTES = {
  "/": {
    template: "/pages/index.html",
    title: "Activity",
    scripts: ["components/skillsList.js", "components/sideNavElement.js", "js/utils/dropdownMenu.js"],
  },
  "/resume": {
    template: "/pages/index.html",
    title: "Activity",
    scripts: ["components/skillsList.js", "components/sideNavElement.js", "js/utils/dropdownMenu.js"],
  },
  "/map": {
    template: "/pages/map.html",
    title: "Map",
    scripts: [
      "components/wrapper.js",
      "js/utils/dropdownMenu.js",
      "https://api-maps.yandex.ru/3.0/?apikey=408b142c-6392-4e29-8703-3017a9505008&lang=en_EN",
      "js/map/map.js",
    ],
  },
  "/time": {
    template: "/pages/time.html",
    title: "Time",
    scripts: ["js/utils/dropdownMenu.js", "components/wrapper.js"],
  },
};

export const REPO_NAME = "/test-web-bee";

export const isNotLocalhost = window.location.origin.includes("kimiyori.github.io");

export const getTarget = (event) => {
  const isAnchor = event.target.tagName.toLowerCase() === "a";
  return isAnchor ? event.target : event.target.closest("a");
};

export const scriptIsLoaded = (src) => {
  return Boolean(document.querySelector(`script[src="${src}"]`));
};
