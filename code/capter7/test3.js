const dialog =delayMessageFactory(alert, 2000);
dialog("こんにちは");
const log = delayMessageFactory(console.log,1000);
log("こんばんは");

function delayMessageFactory(fn, time){
  return (greeting) => setTimeout(fn(greeting), time) ;
}
