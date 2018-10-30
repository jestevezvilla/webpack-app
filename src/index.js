const Pages = {
  '/': import('./home'),
  '/index.html': import('./home'),
  '/detail.html': import('./detail'),
};

const renderPage = () => {
  const a = new Promise((done, reject) => done());
  fetch('http://www.google.com')
    .then(result => console.log(result))
    .catch(error => console.log(error));
  return Pages[location.pathname].then(result => result.render());
};

renderPage();
