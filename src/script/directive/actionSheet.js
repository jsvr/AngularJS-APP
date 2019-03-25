angular.module('app').directive('mkActionSheet', ['$document', function($document) {
  return {
    restrict: 'E',
    scope: {
      visible: '=',
      buttons: '=',
      cancelText: '=',
      cancelClick: '&'
    },
    replace: true,
    templateUrl: 'view/template/actionSheet.html',
    link: function($scope, $element) {
      $scope.cancel = function(){
        $scope.visible = false;
        $scope.cancelClick();
      };
      $scope.buttonClick = function(index){
        $scope.visible = false;
        $scope.buttons.index = index;
        $scope.cancelClick();
      }
    }
  };
}]);
