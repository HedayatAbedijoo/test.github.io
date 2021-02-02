import routes from "./routes.js";
const router = async () => {
  //debugger;
  const pages = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname == route.path,
    };
  });

  let current = pages.find((item) => item.isMatch);

  if (!current) {
    current = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new current.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
};

export default router;
