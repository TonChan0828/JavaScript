// setTimeout(function(personName){console.log(`こんにちは、${personName}`)}, 2000, "Matsushita");

// setTimeout((personName)=>console.log(`こんにちは、${personName}`), 2000, "Matsushita");

function add(val1, val2){return val1 + val2;}
function minus(val1,val2){return val1- val2;}

function calcAndDisp(calcFn,dispFn,val1,val2){
  dispFn(calcFn(val1,val2));
}

calcAndDisp(add,console.log,3,2);

calcAndDisp(minus,alert,3,2);
