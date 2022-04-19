function genStep(min,max,step){
  let currentValue = min - step;

  return {
    next(){
      currentValue += step;
      if(currentValue <= max){
        return {
          done: false,
          value: currentValue
        }
      }else{
        return {
          done: true
        }
      }
    }
  }
}

const it =genStep(4,10,2);
let a =it.next();
while(!a.done){
  console.log(a.value);
  a = it.next();
}
