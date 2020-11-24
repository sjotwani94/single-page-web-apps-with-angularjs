(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var theBuyer = this;

  theBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  theBuyer.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    if (ShoppingListCheckOffService.checkEmptyToBuy()) {
      theBuyer.empty = "Everything is bought!";
    }
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  if (ShoppingListCheckOffService.checkEmptyAlreadyBought()) {
    showBoughtList.empty = "Nothing bought yet.";
  }
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "chips",
      quantity: 30
    },
    {
      name: "french fries",
      quantity: 100
    },
    {
      name: "nachos",
      quantity: 20
    },
    {
      name: "nuggets",
      quantity: 15
    }
  ];

  var alreadyBoughtList = [];

  service.buyItem = function (itemIndex) {
    var item = {
      name: toBuyList[itemIndex].name,
      quantity: toBuyList[itemIndex].quantity
    };
    alreadyBoughtList.push(item);
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.checkEmptyToBuy = function () {
    if (toBuyList.length == 0) {
      return true;
    }
    return false;
  };

  service.checkEmptyAlreadyBought = function () {
    if (alreadyBoughtList.length == 0) {
      return true;
    }
    return false;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtList;
  };
}

})();
