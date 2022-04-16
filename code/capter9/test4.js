class User {
  constructor(username){
    this.username = username;
    this.deleted =0;
  }
  login(){
    if(this.deleted === 0){
      console.log(`${this.username}はログインに成功しました。`);
    }else{
      console.log(`${this.username}はログインに失敗しました。`);
    }
  }
}

class AdminUser extends User{
  constructor(username){
    super(username);
  }
  deleteUser(user){
    user.deleted = 1;
    console.log(`${user.username}を削除しました。`);
  }
}

const user = new User("user1");
const admin = new AdminUser("user2");

admin.deleteUser(user);
user.login();
