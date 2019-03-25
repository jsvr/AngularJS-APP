angular.module('app.controller').controller('myPostCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  'use strict';
  var list = [];
  $scope.tabs = [{
    id: '',
    text: '全部'
  }, {
    id: '1',
    text: '邀请面试'
  }, {
    id: '-1',
    text: '不合适'
  }];
  $scope.tabs.index = 0;
  $scope.loading();
  $http.get('/data/myPost.json').success(function(res) {
    list = res;
    $scope.list = list;
    $scope.loaded();
  });
  $scope.chooseItem = function() {
    switch ($scope.tabs.index) {
      case 1:
        $scope.list = $filter('filter')(list, {
          state: '!-1'
        })
        break;
      case 2:
        $scope.list = $filter('filter')(list, {
          state: '-1'
        })
        break;
      default:
        $scope.list = list;
    };
  };
}]);
