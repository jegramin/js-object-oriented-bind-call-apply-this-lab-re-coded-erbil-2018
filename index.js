function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, ourArguments) {
  return fn.apply(thisValue, ourArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
// function justInvoke(fn){
//   let returnValue = fn();
//   return returnValue;
// }

// function setThisWithCall(fn, thisValue, arg){
//   return fn.call(thisValue,arg);
// }

// function setThisWithApply(fn, thisValue, args){
//   return fn.apply(thisValue,args);
// }

// function returnNewFunctionOf(functionToBeCopied, thisValue){
//   return functionToBeCopied.bind(thisValue);
// }