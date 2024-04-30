(function () {
"use strict";

angular.module('users')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['userInfo', 'dish'];
function UserInfoController(userInfo, dish) {
    var $ctrl = this;
    $ctrl.userInfo = userInfo;
    if(dish){
        $ctrl.description = dish.description;
        $ctrl.name = dish.name
        $ctrl.urlImg = ""
    }

    let category_with_dish_number = userInfo.favorite_dish_short_name.replace(/\s+/g, "").toUpperCase();
    let category = category_with_dish_number.match(/^\D+/);
    let dish_number = category_with_dish_number.match(/\d+$/);
    if(category){
      category = category[0]
    }
    if(dish_number){
      dish_number = dish_number[0]
    }
    $ctrl.urlImg = "images/menu/"+category+"/"+category+dish_number+".jpg"

    console.log(dish)
}

})();