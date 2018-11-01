import 'webpack-jquery-ui/datepicker';

const Pages = {
  '/': import('./home'),
  '/index.html': import('./home'),
  '/detail.html': import('./detail'),
};

const renderPage = () => Pages[window.location.pathname].then((result) => {
  result.render();
});

renderPage();
