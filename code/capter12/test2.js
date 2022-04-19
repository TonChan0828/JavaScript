  function* genStep(min,max,step){

    for(let currentValue = min; currentValue <= max; currentValue += step){
      yield currentValue;
    }
  }

  const it =genStep(4,10,2);
  let a =it.next();
  while(!a.done){
    console.log(a.value);
    a = it.next();
  }
