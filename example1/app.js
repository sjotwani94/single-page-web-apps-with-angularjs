(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name="Siddharth";
  $scope.giveGreetings = function () {
    return "Hello Coursera!";
  };
});

})();
