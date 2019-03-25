angular.module('app.lib').directive('mkTab', function () {
  return {
    scope:{
      tabList: '=',
      tabClick: '&'
    },
    replace: true,
    templateUrl: 'view/template/tab.html',
    link: function(scope, elem, attr){
      scope.clickTab = function(index){
        scope.tabList.index = index;
        scope.tabClick();
      };
    }
  };
});
