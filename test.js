var parentsUntil = require('./index.js')

document.body.innerHTML = '<div class="container"><div class="nav">' +
                            '<ul class="nav__submenu">' +
                              '<li class="nav__item"><a href="#">nav item</a>' +
                                '<ul class="nav__submenu">' +
                                  '<li class="nav__item"><a id="findMe" href="#">sub item</a></li>' +
                                '</ul>' +
                              '</li>' +
                            '</ul>' +
                          '</div></div>';

test('test parentsUntil', function() {
  var findMe = document.querySelector('#findMe');
  var parents = parentsUntil(findMe, '.nav');
  parents.forEach(DOMNode => {
    if (DOMNode.classList.contains('nav__submenu')) {
      DOMNode.parentNode.classList.add('is-active')
    }
  })
  expect(document.querySelectorAll('.nav__item')[0].classList.contains('is-active')).toBe(true)
})