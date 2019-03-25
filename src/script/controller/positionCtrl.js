angular.module('app.controller').controller('positionCtrl', ['$scope', '$state', '$http', 'cache', '$q', function($scope, $state, $http, cache, $q) {
  'use strict';
  var user = cache.get('user');
  $scope.isLogin = !!user;
  $scope.loading();
  function queryPosition() {
    var defer = $q.defer();
    $http.get('/data/position.json?id=' + $state.params.id).success(function(res) {
      defer.resolve(res);
    });
    return defer.promise;
  }

  function queryCompany(position) {
    var defer = $q.defer();
    $http.get('/data/company.json?id='+position.id).success(function(res) {
      defer.resolve({position: position, company: res});
    });
    return defer.promise;
  }

  function queryPostable() {
    var defer = $q.defer();
    if ($scope.isLogin) {
      $http.get('/data/isHandled.json?user=' + user.id + '&position=' + $state.params.id).success(function(res) {
        defer.resolve(0 === res.state);
      });
    } else {
      defer.resolve(false);
    }
    return defer.promise;
  }
  $q.all([queryPosition().then(queryCompany), queryPostable()]).then(function(result) {
    $scope.position = result[0].position;
    $scope.company = result[0].company;
    $scope.available = result[1];
    $scope.loaded();
  });
  $scope.next = function() {
    $scope.loading();
    $http.get('/data/handle.json?id=' + $scope.position.id).success(function(res) {
      if (1 === res.state) {
        $scope.available = false
      }
      $scope.loaded();
    });
  };
}]);
