import { highlightActiveButton } from './utils/buttons.js';
import {
  findMatchRoute,
  getTarget,
  updateTitle,
  handleLoadActions,
  assignHtml
} from './utils/routes.js';
import { handleScriptLoading } from './utils/loadScripts.js';

const handleRouting = async () => {
  const route = findMatchRoute();
  await assignHtml(route);
  await handleScriptLoading(route);
  updateTitle(route.title);
  handleLoadActions();
};

const navigateTo = (pathname) => {
  history.pushState(null, null, pathname);
  handleRouting();
};

const setClickNavEvents = () => {
  const elements = document.querySelectorAll(`ul[aria-label="header-nav"] a`);
  elements.forEach((element) =>
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const target = getTarget(event);
      navigateTo(target.pathname);
    })
  );
};

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveButton('header-nav');
  setClickNavEvents();
  handleRouting();
});
window.addEventListener('popstate', handleRouting);
