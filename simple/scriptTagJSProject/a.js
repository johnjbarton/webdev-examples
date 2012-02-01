/*globals window console*/

function writeOnPage() {
  var elt = window.document.querySelector('#writeHere');
  elt.innerHTML = "Kilroy was here";
  console.log("#writeHere <- "+elt.innerHTML);
}

window.addEventListener('load', writeOnPage, false);