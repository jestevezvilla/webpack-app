const Pages = {
  "/": import("./home"),
  "/index.html": import("./home"),
  "/detail.html": import("./detail")
};

const renderPage = () =>
  Pages[location.pathname].then(result => result.render());

renderPage();
