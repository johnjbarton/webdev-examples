function testLabeledBreakInWhile() {
  var i1 = 0;
  L1: while(i1 < 5) {
    ++i1;
    while (i1 < 5) {
      if (i1 > 2) {
        break L1;
      }
      ++i1;
    }
  }

  return i1;  // expect 3
}

console.log('3 == '+testLabeledBreakInWhile());

function testLabeledContinueInWhile() {
  var i1 = 0;
  L1: while(i1 < 5) {
    ++i1;
    while (i1 < 5) {
      if (i1 > 0) {
        continue L1;
      }
      i1 += 10;
    }
  }

  return i1;  // expect 5
}


console.log('5 == '+testLabeledContinueInWhile());

function testLabeledContinueInSwitch() {
  var i1 = 0;
  L1: while(i1 < 5) {
    ++i1;
    switch(i1) {
      case 1:
        continue L1;
      case 2: 
        i1 += 1;
        break;
      case 4: 
        break L1;
      default:
        throw new Error('Nope');
    }
  }
  return i1;  // expect 4
}


console.log('4 == '+testLabeledContinueInSwitch());
