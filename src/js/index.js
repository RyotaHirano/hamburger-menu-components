const CLASS_OPEN = 'js-hamburger-button--open';
const CLASS_CLOSE = 'js-hamburger-button--close';

export default class HamburgerButton {
  constructor(opts) {
    const option = {
      target: '.js-hamburger-button',
      other: 11,
      ...opts
    };
    this.el = document.querySelector(option.target);
  }

  bindClick() {
    this.el.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick(e) {
    e.preventDefault();
    const regex = /js-hamburger-button--open/;
    if(regex.test(this.el.className) === true) {
      this.el.classList.remove(CLASS_OPEN);
      this.el.classList.add(CLASS_CLOSE);
    } else {
      this.el.classList.remove(CLASS_CLOSE);
      this.el.classList.add(CLASS_OPEN);
    }
  }
}
