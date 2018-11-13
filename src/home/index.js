import Item from './Item';

const emit = el => console.log(el);

export const render = () => {
  Item('#home ul li');
  document.querySelector('[data-component=dialog]').addEventListener('click', emit, false);
};
