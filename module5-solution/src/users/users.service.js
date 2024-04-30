(function () {
"use strict";

angular.module('users')
.service('UsersService', UsersService);

UsersService.$inject = ['MenuService'];
function UsersService(MenuService) {
  var service = this;
  var userInfo = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    favorite_dish_short_name: ""
  }

  service.saveUserInfo = function (firstName, last_name, email, address, favorite_dish_short_name) {
    userInfo.first_name = firstName;
    userInfo.last_name = last_name;
    userInfo.email = email;
    userInfo.address = address;
    userInfo.favorite_dish_short_name = favorite_dish_short_name;
  };

  service.getUserInfo = function () {
    return userInfo;
  }

}



})();
