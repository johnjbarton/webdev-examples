function testDeclarationList() {
  var a = 0, b = 1+2, c = a+b, d = ++a, e = c+d;
  return e;
}

console.log('testDeclarationList 4==='+testDeclarationList());

function testNullForInitializer() {
  for(;;) {
    break;
  }
  return 1;
}

console.log('testNullForInitializer 4==='+testNullForInitializer());
