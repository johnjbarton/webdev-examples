function reEvalMe() {
  console.log("reEvalMe should run");
}

function main() {
  var str = reEvalMe.toString() + "\nreEvalMe();";
  eval(str);
}

main();
