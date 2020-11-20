export default class Control {
  constructor(parentNode, tag = 'div', className = '', content = '', bgrImg = '') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    this.node.style.backgroundImage = `url("${bgrImg}")`;
    parentNode.appendChild(this.node);
  }
}
