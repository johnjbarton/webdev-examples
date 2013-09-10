function onLoad() {
  var p = "baz";
  var q = "foo"; 
  document.querySelector('.in').addEventListener('click', function () {
    var elt = document.querySelector('.out');
    elt.textContent = p + q;
  });    
}

window.addEventListener('load', onLoad);