angular.module('app.lib').directive('mkHeadBar', function() {
  return {
    scope: {
      title: '=headline',
      back: '='
    },
    replace: true,
    templateUrl: 'view/template/headBar.html',
    link: function(scope, elem, attr) {
      if (attr.back) {
        scope.isBack = true;
        scope.goBack = function() {
          history.back();
        }
      }
    }
  };
});
