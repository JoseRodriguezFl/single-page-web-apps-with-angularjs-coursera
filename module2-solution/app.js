(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  this.ToBuyItems = ShoppingListCheckOffService.getToBuy();

  this.buy = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.BoughtItems = ShoppingListCheckOffService.getBought();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "2"
    },
    {
      name: "Cookies",
      quantity: "3"
    },
    {
      name: "Chocolate",
      quantity: "4"
    },
    {
      name: "Bread",
      quantity: "1"
    }
  ];
  var bought = [];

  service.buy = function (itemIndex) {
    if ((toBuy.length > 0)) {
      bought.push(toBuy[itemIndex])
      toBuy.splice(itemIndex, 1);
    }
    else {
      throw new Error("Max items reached.");
    }
  };

  service.getToBuy = function () {
    return toBuy;
  };

  service.getBought = function () {
    return bought;
  };
}

})();
