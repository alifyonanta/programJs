'use strict'; // Fixes (older transitional browsers/WebViews) "let: block-scoped declarations not yet supported outside strict mode"

var lTop, rTop, lBottom, rBottom;

// 'var' is in the function scope. It is NOT
// redeclared on every run through for's block {}
// and so is overwritten each time.
// One variable is declared, and 10 LEAKS.
function doVarScope() {
    lTop.innerHTML="<strong>Loop writes:</strong><br />";
    lBottom.innerHTML="<strong>setTimeout sees:</strong><br />";
    
    for(var i=1; i<10; i++) {
      lTop.innerHTML += i + "<br />";
      setTimeout(function() {
        lBottom.innerHTML += i + "<br />";
          
      },1000);
    }
}

// 'let' is block scoped, inside the for loop's
//   curly braces {}. It is redeclared on every loop.
//  Nine variables are declared and it does NOT leak
//    into the function.
function doLetScope() {
    rTop.innerHTML="<strong>Loop writes:</strong><br />";
    rBottom.innerHTML="<strong>setTimeout sees:</strong><br />";
    
    for(let i=1; i<10; i++) {
      rTop.innerHTML += i + "<br />";
      setTimeout(function() {
        rBottom.innerHTML += i + "<br />";
      },1500);
    }
}

function init() {
   lTop = document.querySelector("#leftTop");
   rTop = document.querySelector("#rightTop");
   lBottom = document.querySelector("#leftBottom");
   rBottom = document.querySelector("#rightBottom");   

   doVarScope();
   doLetScope();
}
