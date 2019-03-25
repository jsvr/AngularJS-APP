angular.module('app.controller').controller('registerCtrl', ['$scope', '$http', '$interval', 'cache', '$state', function($scope, $http, $interval, cache, $state){
  'use strict';
  $scope.regist = function(){
    $scope.loading();
    $http.post('/data/regist.json').success(function(res){
      cache.put('user', res);
      $scope.loaded();
      $state.go('main');
    });
  };
  $scope.sendMessage = function(){
    if($scope.form.phone.$valid){
      $http.get('/data/code.json', {phone: $scope.phone}).success(function(res){
        if(1===res.state){
          $scope.countdown = 60;
          var interval = $interval(function(){
            $scope.countdown--;
            if($scope.countdown<=0){
              $interval.cancel(interval);
              $scope.countdown = '';
            }
          }, 1000);
        }
      });
    }
  };
}]);
