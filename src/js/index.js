import classList from 'classlist';
const CLASS = 'js-hamburger-button--open';

export default class HamburgerButton {
  constructor(opts) {
    const option = {
      target: '.js-hamburger-button',
      other: 11,
      ...opts
    };
    this.el = document.querySelector(option.target);
    this.targetEl = classList(this.el);
  }

  bindClick() {
    this.el.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick(e) {
    e.preventDefault();
    this.targetEl.toggle(CLASS);
  }
}
