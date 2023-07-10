const mapper = [
  { path: '/map', height: '700px' },
  { path: '/time', height: '30px' }
];
const findMenu = (toggleElement) => {
  let menu;
  while (!menu) {
    toggleElement = toggleElement.parentNode;
    menu = toggleElement.querySelector('.drop-down');
  }
  return menu;
};
const changeIcon = (target) => {
  const icon = target.querySelector('img');
  icon.src = icon.src.endsWith('UpButton.svg')
    ? 'static/assets/icons/common/Dropdown.svg'
    : 'static/assets/icons/resume/nav/UpButton.svg';
};

export const toggleDropdownMenu = () => {
  const toggleButtons = document.querySelectorAll('.drop-toggle');
  toggleButtons.forEach((toggleButton) => {
    let height = mapper
      .filter(({ path }) => path === window.location.pathname)
      .map(({ height }) => height)?.[0];
    toggleButton.addEventListener('click', () => {
      let menu = findMenu(toggleButton);
      const isMap = menu.id === 'map';
      height = height ?? `${menu.clientHeight}px`;
      menu.style.height = !menu.style.height || menu.style.height === height ? '0px' : height;
      menu = isMap ? menu.querySelector('ymaps') : menu;
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      menu.style.visibility = menu.style.visibility === 'hidden' ? 'visible' : 'hidden';
      changeIcon(toggleButton);
    });
  });
};
