import HomePage from "@pages/home";
import ListPage from "@pages/list";
import Layout from "./components/shared/Layout";

const $root = document.getElementById("root");

const routes = {
  "/": HomePage,
  "/list": ListPage,
};

const changeUrl = (requestedUrl) => {
  const matchedComponent = routes[requestedUrl];

  matchedComponent ? new Layout($root, matchedComponent).render() : null;
};

export const navigateTo = (path) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", window.location.origin + path);
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
