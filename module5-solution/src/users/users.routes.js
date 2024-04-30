(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'src/users/signup/signup.html'
    })

    .state('user-info', {
      url: '/userinfo',
      templateUrl: 'src/users/user-info/user-info.html',
      controller: 'UserInfoController',
      controllerAs: 'userInfoCtrl',
      resolve: {
        userInfo: ['UsersService', function (UsersService) {
          return UsersService.getUserInfo();
        }],
        dish: ['UsersService', 'MenuService', function (UsersService, MenuService) {
          let category_with_dish_number = UsersService.getUserInfo().favorite_dish_short_name.replace(/\s+/g, "").toUpperCase();
          let category = category_with_dish_number.match(/^\D+/);
          let dish_number = category_with_dish_number.match(/\d+$/);
          if(category){
            category = category[0]
          }
          if(dish_number){
            dish_number = dish_number[0]
          }

          return MenuService.getItem(category, dish_number);
        }]
      }
    });
}
})();
