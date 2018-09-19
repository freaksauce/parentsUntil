# parentsUntil
This is a packaged version of the [Chris Ferdinandi](https://gomakethings.com) utility function that replicates the functionality of the Jquery function of the same name.

## Installation
```
npm i parentsuntil
```

## Usage
```
import parentsUntil from 'parentsUntil'

var elem = document.querySelector('#some-element');
var parentsUntil = parentsUntil(elem, '.some-class');
var parentsUntilByFilter = parentsUntil(elem, '.some-class', '[data-something]');
```

### Real world example
Add an `is-active` class to the `<ul>` when a menu item is clicked

```
<div class="nav">
  <ul class="nav__submenu">
    <li class="navItem"><a href="#">nav item</a></li>
  </ul>
</div>

document.querySelector('.navItem').addEventListener('onClick', onClick)

onClick(event) {
  const navItem = event.target
  const parents = parentsUntil(navItem, '.nav')
  parents.forEach(DOMNode => {
    if (DOMNode.classList.contains('nav__submenu')) {
      DOMNode.parentNode.classList.add('is-active')
    }
  })
}
```