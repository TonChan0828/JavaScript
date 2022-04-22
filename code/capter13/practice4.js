function promiseFactory(count){
  return new Promise(resolve =>{
    setTimeout(()=>{
      console.log(count);
      count +=2;
      resolve(count);
    },1000);
  })
}

promiseFactory(0).then(count => {return promiseFactory(count)})
.then(count => {return promiseFactory(count)})
.then(count => {return promiseFactory(count)});
