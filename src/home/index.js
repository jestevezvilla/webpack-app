import Item from './Item';

const emit = el => console.log(el);

const render = () => {
  const a = { e: 1 };
  const b = { ...a, f: 3 };
  Item('#home ul li');
  document.querySelector('[data-component=dialog]').addEventListener('click', emit, false);
};

export default render;
