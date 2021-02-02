import home from "./views/home.js";
import page1 from "./views/page1.js";
import page2 from "./views/page2.js";
const routes = [
  {
    path: "/",
    view: home,
  },
  {
    path: "/page1",
    view: page1,
  },
  {
    path: "/page2",
    view: page2,
  },
];

export default routes;
