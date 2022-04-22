function run(personName) {
  return new Promise((resolve, reject) => {
      const time = Math.floor(Math.random() * 11);
      setTimeout(() => {
          if (time % 4 === 0) { // 4の倍数のとき
              // 途中でコケる
              reject({ personName });
          } else {
              // 完走
              resolve({ personName, time });
          }
      }, time);
  });
}

const printTime = ({personName, time}) =>console.log(`${personName}のタイムは${time}です。`);

run("太郎")
        .then(result => {
            printTime(result); // 太郎の結果
            return run("次郎"); // 次郎スタート
        })
        .then(result => {
            printTime(result); // 次郎の結果
            return run("三郎"); // 三郎スタート
        })
        .then(result => {
            printTime(result); // 三郎の結果
        })
        .catch(({ personName }) => { // 誰かこけた時
            console.error(`${personName}がこけました。レースやり直し！`);
        });


Promise.any([run("太郎"),run("次郎"),run("三郎")])
.then(({personName,time})=>{
  console.log(`一番最初にゴールしたのは${personName}で、タイムは${time}です。`);
})
.catch(()=>{
  console.error("レースやり直し！！");
})

Promise.all([run("太郎"),run("次郎"),run("三郎")])
  .then((results)=>{
    for(const {personName,time} of results){
      console.log(`${personName}のタイムは${time}です。`);
    }
  })
  .catch(({personName})=>{
    console.error(`${personName}がコケました。レースやり直し！`);
  });

Promise.allSettled([run("太郎"),run("次郎"),run("三郎")])
  .then((results)=>{
    for(const{status,value,reason} of results){
      if(status === "fulfilled"){
        console.log(`${value.personName}がゴールしました`);
      }else{
        console.error(`${reason.personName}がコケました`)
      }
    }
  });

Promise.race([run("太郎"),run("次郎"),run("三郎")])
  .then(({personName})=>{
    console.log(`${personName}がゴールしました`);
  })
  .catch(({personName})=>{
    console.log(`${personName}がコケました`);
  })
