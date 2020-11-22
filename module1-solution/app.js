(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodItems = "";
  $scope.outputMessage = "";
  $scope.look = "message";

  $scope.checkTooMuch = function () {
    const dishes = $scope.foodItems.split(",");
    var totalItems = getTotalItems(dishes);
    var message = assignOutputMessage(totalItems);
    $scope.outputMessage = message;
  };

  function getTotalItems(dishes){
    var items = 0;
    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i]!="") {
        items++;
      }
    }
    return items;
  }

  function assignOutputMessage(totalItems) {
    var stringValue = "";
    if (totalItems == 0) {
      stringValue = "Please enter data first";
      $scope.look = "redmessage";
    } else if (totalItems <= 3) {
      stringValue = "Enjoy!";
      $scope.look = "greenmessage";
    } else {
      stringValue = "Too much!";
      $scope.look = "greenmessage";
    }
    return stringValue;
  }
}

})();
