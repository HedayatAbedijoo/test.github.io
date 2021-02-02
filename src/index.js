import router from "./router.js";
const navigateToUrl = (url) => {
  history.pushState(null, null, url);
  router();
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateToUrl(e.target.href);
    }
  });
  router();
});
