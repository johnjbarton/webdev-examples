function testExample() {
  "use strict";
  var eg = makeExample();
  console.assert(eg.a === 1);
  var pass;
  try {
    eg.b = 2;
    pass = false;
  } catch(exc) {
    pass = true;
  } finally {
    console.assert(pass);
  }
  console.log("Tests pass if there are no assert messages");
}