import Control from '../utils/control';

export default class Footer extends Control {
  constructor() {
    const inner = `<a class="link-gh" href="https://github.com/mauta"> mauta</a>
    <span> in </span>
    <a class="link-rs" href="https://rs.school/js/"></a>`;
    super(document.body, 'footer', 'footer', inner);
  }
}
