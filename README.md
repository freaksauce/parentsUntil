# parentsUntil
This is a packaged version of the [Chris Ferdinandi](https://gomakethings.com) utility function that replicates the functionality of the Jquery function of the same name.

## Usage
```
import parentsUntil from 'parentsUntil'

var elem = document.querySelector('#some-element');
var parentsUntil = parentsUntil(elem, '.some-class');
var parentsUntilByFilter = parentsUntil(elem, '.some-class', '[data-something]');
```