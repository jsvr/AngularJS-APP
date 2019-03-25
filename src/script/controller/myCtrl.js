angular.module('app.controller').controller('myCtrl', ['$scope', 'cache', '$http', function($scope, cache, $http){
  'use strict';
  $scope.user = cache.get('user');
  $scope.logout = function(){
    $scope.loading();
    $http.get('/data/logout.json').success(function(res){
      $scope.loaded();
      if(res.state){
        cache.remove('user');
        delete $scope.user;
      }
    })
  };
}]);
