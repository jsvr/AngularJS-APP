angular.module('app.lib').directive('mkPositionClass', function() {
  return {
    scope: {
      postClass: '=data'
    },
    replace: true,
    templateUrl: 'view/template/positionClass.html'
  }
});
