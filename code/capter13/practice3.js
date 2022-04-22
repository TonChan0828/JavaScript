let instance = new Promise((resolve, reject) => {
  setTimeout(()=>{
    const time = new Date();
    const sec = time.getSeconds();
    if((sec % 2) === 0){
      resolve(sec);
    }else{
      reject(sec);
    }
  },1000);
})
.then(value =>{
  console.log(`${value}は偶数のため、成功とします。`);
})
.catch(value =>{
  console.error(`${value}は奇数のため、エラーとします。`);
})
.finally(()=> console.log("処理を終了します。"));
