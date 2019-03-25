angular.module('app.controller').controller('mainCtrl', ['$scope', 'cache', '$http', function($scope, cache, $http) {
  'use strict';
  $scope.user = cache.get('user');
  $scope.loading();
  $http.get('/data/positionList.json').success(function(res) {
    $scope.list = res;
    $scope.loaded();
  });
}]);
