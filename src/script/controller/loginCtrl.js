angular.module('app.controller').controller('loginCtrl', ['$scope', '$http', '$state', 'cache', function($scope, $http, $state, cache){
  'use strict';
  $scope.login = function(){
    $scope.loading();
    $http.post('/data/login.json', $scope.user).success(function(res){
      cache.put('user', res, true);
      $scope.loaded();
      $state.go('main');
    });
  }
}]);
