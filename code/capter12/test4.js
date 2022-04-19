Array.prototype[Symbol.iterator] = function* (){
  let arry =this;
  for(let index =0; index < arry.length;index++){
    yield [index,arry[index]];
  }
};

for(let item of ["Hello", "World"]){
  console.log(item);
}
