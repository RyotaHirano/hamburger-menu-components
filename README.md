# hamburger-menu-components

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

```
npm i hamburger-menu-components
```

## Usage

### javascript
```js
import HamburgerMenuComponents from 'hamburger-menu-components';

const hamburgerMenu = new HamburgerMenuComponents({ target: '.js-hamburger-button' });
hamburgerMenu.bindClick();
```

### scss
```scss
@import '../../node_modules/hamburger-menu-components/css/hamburger-menu-components';
```

### html
```html
<!-- rotate -->
<div class="hamburger-button burger-rotate-normal js-hamburger-button">
  <div class="bar"></div>
</div>

<!-- fade out -->
<div class="hamburger-button burger-fadeout js-hamburger-button">
  <div class="bar"></div>
</div>

<!-- fade out delay -->
<div class="hamburger-button burger-fadeout--delay js-hamburger-button">
  <div class="bar"></div>
</div>

<!-- join -->
<div class="hamburger-button burger-join js-hamburger-button">
  <div class="bar"></div>
</div>

<!-- join funny -->
<div class="hamburger-button burger-join--funny js-hamburger-button">
  <div class="bar"></div>
</div>
```

## License

[MIT][license-url]

© RyotaHirano

[travis-image]: https://travis-ci.org/RyotaHirano/hamburger-menu-components.svg?branch=master
[travis-url]: https://travis-ci.org/RyotaHirano/hamburger-menu-components
[npm-url]: https://badge.fury.io/js/hamburger-menu-components
[npm-image]: https://badge.fury.io/js/hamburger-menu-components.svg
[license-url]: http://ryotahirano.mit-license.org
[license-image]: http://img.shields.io/:license-mit-blue.svg
