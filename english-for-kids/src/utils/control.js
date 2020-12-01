export default class Control {
  constructor(parentNode, tag = 'div', className = '', content = '', bgrImg = 'none') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    // this.node.style.backgroundImage = bgrImg;
    parentNode.appendChild(this.node);
  }

  clear() {
    while (this.node.firstChild) {
      this.node.lastChild.remove();
    }
  }
}
