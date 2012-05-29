
function makeExample() {
  "use strict"
  var remote = {a: 1};
  Object.freeze(remote);
  return remote;
};