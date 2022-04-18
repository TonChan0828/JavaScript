class Person{
  constructor(fullname,age,gender){
    this.fullname =fullname;
    this.age = age;
    this.gender = gender;
  }
}

const taro = new Person("太郎", 18, "男");
const jiro = new Person("次郎", 15, "男");
const saburo = new Person("三郎", 10, "男");
const hanako = new Person("花子", 23, "女");
const hanayo = new Person("花代", 18, "女");

const friends = new Map;

friends.set(taro,new Set([jiro,hanayo]));
console.log(friends);

friends.set(hanako, new Set([hanayo,taro,saburo]));
console.log(friends);

const taroFriends = friends.get(taro);
taroFriends.add(hanako);
console.log(taroFriends);

const taroFriendsArray = Array.from(taroFriends);
taroFriendsArray.sort((friend1,friend2) => friend1.age - friend2.age);
console.log(taroFriendsArray);

const result = taroFriendsArray.filter(person => {
  return person.gender !== taro.gender;
})
console.log(result.length);

for(const [person, friendSet] of friends){
  let friendStr ="";
  for(const friend of friendSet){
    friendStr += `[${friend.fullname}]`;
  }
  console.log(`私の名前は${person.fullname}です。友達は${friendStr}がいます。`);
};
