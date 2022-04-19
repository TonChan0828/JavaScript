class Shape{
  constructor(options){
    const defaults ={
      type: "四角形",
      textColor:"黒",
      borderColor:"なし",
      bgColor:"白"
    };
    this.options ={...defaults, ...options};
  }

  draw(){
    const {type, textColor, borderColor, bgColor} = this.options;
    console.log(`形:[${type}] 文字列[${textColor}] 枠色:[${borderColor}] 背景色:[${bgColor}]`);
  }
}

const triangle = new Shape({type: "三角形"});
triangle.draw();
