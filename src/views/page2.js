import BaseView from "../BaseView.js";
export default class extends BaseView {
  constructor() {
    super();
    this.setTitle("Page2");
    this.setPageHeader("This is page 2");
    this.setHtmlPath("src/views/page2.html");
  }
}
