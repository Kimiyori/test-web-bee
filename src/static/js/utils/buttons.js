const getNavElements = (label) => {
  const navElements = document.querySelectorAll(`ul[aria-label="${label}"]`);
  const childs = [];
  navElements.forEach((elem) => {
    childs.push(...elem.querySelectorAll('li'));
  });
  return childs;
};

const highlightButton = (button) => {
  button.classList.add('bg-body-secondary', 'bg-opacity-50');
};
const removeHighlightButton = (button) => {
  button.classList.remove('bg-body-secondary', 'bg-opacity-50');
};

export const highlightActiveButton = (label) => {
  const childs = getNavElements(label);
  childs.forEach((el) => {
    window.location.pathname === el.querySelector('a').pathname && highlightButton(el);
    el.onclick = () => {
      childs.forEach((el) => removeHighlightButton(el));
      highlightButton(el);
    };
  });
};

export const handleSideBarButton = () => {
  const location = window.location.pathname;
  const sideBarButton = document.querySelector('#sidebar-menu');
  sideBarButton.hidden = !location.endsWith('/') && !location.endsWith('resume');
};
