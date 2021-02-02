export default class {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  setPageHeader(header) {
    this.__header = header;
  }
  setHtmlPath(path) {
    this.__htmlPath = path;
  }

  async getHtml() {
    const html = await fetch(this.__htmlPath);
    return await html.text();
  }
}
