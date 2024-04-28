(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu-categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'src/items.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
}
})();