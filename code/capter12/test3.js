Array.prototype[Symbol.iterator] = function(){
  let index =0;
  let arry =this;
  return{
    next(){
      if(index< arry.length){
        return {
          done:false,
          value: [index,arry[index++]],
        };
      }else{
        return {
          done: true,
        };
      }
    },
  };
};

for(let item of ["Hello", "World"]){
  console.log(item);
}
