import BaseView from "../BaseView.js";
export default class extends BaseView {
  constructor() {
    super();
    this.setTitle("Home page");
    this.setPageHeader("This is Home page");
    this.setHtmlPath("src/views/home.html");
  }
}
