function Foo() {
  this.isA = 'Foo';
}

Foo.prototype = {
  
    // bar: function() { console.log('PASS');  }
  
};

var foo = new Foo();

function onClick() {
  foo.bar();
}

window.addEventListener('load', function() {
  document.body.addEventListener('click', onClick);
});