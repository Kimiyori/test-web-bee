import { highlightActiveButton } from './utils/buttons.js';
import {
  findMatchRoute,
  getTarget,
  updateTitle,
  handleLoadActions,
  assignHtml
} from './utils/routes.js';
import { handleScriptLoading } from './utils/loadScripts.js';

const route = async () => {
  const route = findMatchRoute();
  await assignHtml(route);
  await handleScriptLoading(route);
  updateTitle(route.title);
  handleLoadActions();
  3;
};

const navigateTo = (pathname) => {
  history.pushState(null, null, pathname);
  route();
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
  route();
});
window.addEventListener('popstate', route);
