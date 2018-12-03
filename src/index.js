import './icon.font';

const Pages = {
  '/': import('./home'),
  '/index.html': import('./home'),
  '/detail.html': import('./detail'),
};

(async () => {
  const module = await Pages[window.location.pathname];
  module.default();
})();
