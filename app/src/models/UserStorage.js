"use strict";

class UserStorage {
  //외부에서 접근하지 못하게 숨기는 것을 은닉화라고 하는데 # 로 처리하면 된다
  static #users = {
    id: ["woorim", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };
  //은닉화를 하게 되면 데이터를 받아올 수가 없는데 그것을 받아 올 수 있게 메소드로 처리하고 전달헤야함
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }

      return newUsers;
    }, {});

    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users; // users를 받아옴
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // users의 key값들만 리스트로 만듦 =>[id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
