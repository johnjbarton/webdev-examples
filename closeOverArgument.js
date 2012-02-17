
/*globals console*/

function Promise(props) {
  var promise = {};
  Object.keys(props).forEach(function(key) {
    promise[key] = props[key];
  });
  return promise;
}


function ref(object) {
  return Promise({
    'post': function(name, value) {
      // Find the line 'var toBeFound', starting on this line:
      return object[name].apply(object, value); //@reproduction
    }
  });
}

var toBeFound = { //@desire
  'aFunction': function(value) {
     console.log("aFunction gets value: " + value);
  }
};

function closeOverArgument() {
  ref(toBeFound).post('aFunction', ["closeOverArgument"]);
}