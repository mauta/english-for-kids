export default class Control {
  constructor(parentNode, tag = 'div', className = '', content = '') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    parentNode.appendChild(this.node);
  }
}
