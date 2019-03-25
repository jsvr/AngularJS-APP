angular.module('app.controller').controller('myFavoriteCtrl', ['$scope', '$http', function($scope, $http) {
  'use strict';
  $scope.loading();
  $http.get('/data/myFavorite.json').success(function(res) {
    $scope.list = res;
    $scope.loaded();
  });
  $scope.toggle = function() {
    $scope.list[0].select = !$scope.list[0].select;
  };
}]);
