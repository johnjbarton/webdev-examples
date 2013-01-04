// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2013 Google Inc. johnjbarton@google.com


function Background() {
  
}

var debug = true;

Background.prototype = {};
// Cross site XHR, xhr(url) -> content 
//
Background.prototype.request = function(method, url, callback, errback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.addEventListener('load', function(e) {
    if (xhr.status == 200 || xhr.status == 0) {
      if (debug) 
        console.log("end xhr "+url);
      
      callback(xhr.responseText);
    } else {
      if (debug) 
        console.error("err xhr "+url);

      errback(xhr.status);
    }
  }.bind(this), false);
  var onFailure = function() {
    errback.apply(null, arguments);
  }.bind(this);
  xhr.addEventListener('error', onFailure, false);
  xhr.addEventListener('abort', onFailure, false);
  xhr.send();
};


// Cross site XHR, xhr(url) -> content 
//
Background.prototype.xhr = function(url, callback, errback) {
  if (debug)
    console.log("start xhr "+url);
  this.request('GET', url, callback, errback);
};

Background.prototype.GET = function(url, callback, errback) {
  this.request('GET', url, callback, errback);
};

// Cross site XHR WebDAV, xhr(url) -> content 
//
Background.prototype.PUT = function(url, callback, errback) {
  this.request('PUT', url, callback, errback);
};

// Cross site XHR WebDAV, xhr(url) -> content 
//
Background.prototype.PROPFIND = function(url, callback, errback) {
  this.request('PROPFIND', url, callback, errback);
};


var aBackground = new Background();

function test() {
  testOne("http://localhost:8686/test/qpd.html");
  testOne("https://www.google.com/intl/en_ALL/images/logos/images_logo_lg.gif");
  testOne("https://www.google.com/intl/");
  testOne("http://google.com");
}

function testOne(url) {
  aBackground.GET(
    url,
    function result(){
      console.log("Success for "+url);
    }, 
    function err(message){
      console.error("Failed for "+url, message);
    }
  );
}

setTimeout(test, 3000);
