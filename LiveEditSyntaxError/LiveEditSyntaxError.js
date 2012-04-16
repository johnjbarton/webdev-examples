function Foo() {
  this.isA = 'Foo';
}

Foo.prototype = {
  
   bar: function() { console.log('PASS');  }
   // Add a semicolon on the next line
   
};

var foo = new Foo();

function onClick() {
  debugger;  // Edit Foo.prototype
  foo.bar();
}

window.addEventListener('load', function() {
  document.body.addEventListener('click', onClick);
});