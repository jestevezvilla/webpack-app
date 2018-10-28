export const getProps = selector =>
  JSON.parse(document.querySelector(selector).dataset.props);
