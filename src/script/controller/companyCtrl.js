angular.module('app.controller').controller('companyCtrl', ['$scope', '$http', function($scope, $http){
  'use strict';
  $scope.loading();
  $http.get('/data/company.json').success(function(res){
    $scope.company = res;
  $scope.loaded();
  });
}]);
