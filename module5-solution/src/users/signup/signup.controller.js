(function () {
"use strict";

angular.module('users')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', '$location', 'UsersService', 'MenuService'];
function SignUpController($scope, $location, UsersService, MenuService) {
  $scope.first_name = ""
  $scope.last_name = ""
  $scope.email = ""
  $scope.address = ""
  $scope.favorite_dish_short_name = ""



  $scope.onSubmit = function () {
    let category_with_dish_number = $scope.favorite_dish_short_name.replace(/\s+/g, "").toUpperCase();
    let category = category_with_dish_number.match(/^\D+/);
    let dish_number = category_with_dish_number.match(/\d+$/);
    if(category){
      category = category[0]
    }
    if(dish_number){
      dish_number = dish_number[0]
    }

    if($scope.first_name == ""){
      $scope.first_name_error = "First Name required"
    }else{
      $scope.first_name_error = ""
    }

    if($scope.last_name == ""){
      $scope.last_name_error = "Last Name required"
    }else{
      $scope.last_name_error = ""
    }

    if($scope.email == ""){
      $scope.email_error = "Email required"
    }else{
      // var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      // console.log($scope.email)
      // if(!$scope.email.match(validEmail)){
      //   $scope.email_error = "Wrong Email format"
      // }else{
      //   $scope.email_error = ""
      // }
      $scope.email_error = ""
    }

    if($scope.address == ""){
      $scope.address_error = "Address required"
    }else{
      $scope.address_error = ""
    }

    MenuService.getItem(category, dish_number)
      .then(function(data){
        if(!data){
          $scope.favorite_dish_short_name_error = "Favorite dish Doesn't exists."
        }else{
          $scope.favorite_dish_short_name_error = ""
          UsersService.saveUserInfo(
            $scope.first_name,
            $scope.last_name,
            $scope.email,
            $scope.address,
            $scope.favorite_dish_short_name
          )
          $location.path('/userinfo');
        }
      })
  }
}


})();
