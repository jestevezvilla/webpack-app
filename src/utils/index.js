import ReactHtmlParser from 'react-html-parser';

const getProps = selector => ({
  ...selector.dataset,
  children: ReactHtmlParser(selector.innerHTML),
});

export default getProps;
