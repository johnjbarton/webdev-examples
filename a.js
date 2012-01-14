/*globals window */

function writeOnPage() {
  var elt = window.document.querySelector('#writeHere');
  elt.innerHTML = "Kilroy was here";
}

window.addEventListener('load', writeOnPage, false);