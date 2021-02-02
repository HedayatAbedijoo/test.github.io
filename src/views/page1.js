import BaseView from "../BaseView.js";
export default class extends BaseView {
  constructor() {
    super();
    this.setTitle("Page 1");
    this.setPageHeader("This is Page 1");
    this.setHtmlPath("src/views/page1.html");
  }
}
