angular.module('app.controller').controller('searchCtrl', ['$scope', '$http', '$state', 'dict', function($scope, $http, $state, dict) {
  'use strict';
  $scope.keyword = $state.params.keyword;
  $scope.loading();
  $http.get('/data/positionList.json', {
    params: $state.params,
    cache: true
  }).success(function(res) {
    $scope.positionList = res;
  });
  $scope.tabs = [{
    id: 'city',
    _text: '城市'
  }, {
    id: 'salary',
    _text: '薪资'
  }, {
    id: 'scale',
    _text: '公司规模'
  }];
  angular.forEach($scope.tabs, function(tab){
    if($state.params[tab.id]){
      angular.forEach(dict[tab.id], function(item){
        if(item.id===$state.params[tab.id]) {
          tab.text = item.text;
          $scope.filterObj = $scope.filterObj || {};
          $scope.filterObj[tab.id] = item.id;
        }
      });
    } else {
      tab.text = tab._text;
    }
    $scope.loaded();
  });
  $scope.cancelText = '取消';
  $scope.okText = '确定';
  $scope.search = function() {
    $state.go('search', angular.merge($state.params, {keyword: $scope.keyword}), {location:'replace', reload: true});
  };
  $scope.showTab = function() {
    var tab = $scope.tabs[$scope.tabs.index];
    $scope.buttons = dict[tab.id];
    $scope.sheetVisible = true;
  };
  $scope.chooseItem = function() {
    var tab = $scope.tabs[$scope.tabs.index];
    var button = $scope.buttons[$scope.buttons.index];
    tab.text = button.id ? button.text : tab._text;
    $scope.filterObj = $scope.filterObj || {};
    $scope.filterObj[tab.id] = button.id;
    $state.params[tab.id] = button.id;
    $state.go('search', $state.params, {location: 'replace'});
  };
}]);
