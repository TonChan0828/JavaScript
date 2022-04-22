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

async function startRelay(){
  let result;

  try{
    result = await run("太郎");
    printTime(result);
    result = await run("次郎");
    printTime(result);
    result = await run("三郎");
    printTime(result);
  }catch({personName}){
    console.log(`${personName}がコケました。レースやり直し！`);
  }
}

startRelay();
