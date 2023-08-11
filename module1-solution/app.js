(function () {
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function () {
        console.log($scope.items.split(",").length)
        if($scope.items.split(",").length > 3){
            $scope.message = "Too much!";
        }else{
            $scope.message = "Enjoy";
        }
    };
}

})();