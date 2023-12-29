import HomePage from "./pages/home";

// export const initialzeRouter = () => {};

const $root = document.getElementById("root");

const routes = {
  "/": HomePage,
};

const changeUrl = (requestedUrl) => {
  console.log(requestedUrl);
  const matchedComponent = routes[requestedUrl];

  matchedComponent ? new matchedComponent($root).render() : null;
};

export const navigateTo = (path) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, window.location.origin + path);
    changeUrl(path);
  }
};

export const initialzeRouter = () => {
  window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
  });

  window.addEventListener("DOMContentLoaded", () => {
    changeUrl(window.location.pathname);
  });
};
