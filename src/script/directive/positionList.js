angular.module('app.lib').directive('mkPositionList', ['filterByIdFilter', '$http', function(filterById, $http) {
  return {
    scope: {
      list: '=data',
      operable: '=',
      evaluationVisible: '=',
      filterObj: '='
    },
    replace: true,
    templateUrl: 'view/template/positionList.html',
    link: function(scope, elem, attr){
      scope.toggle = function(pos){
        $http.get('/data/favorite.json?id=' + pos.id).success(function(res){
          if(1===res.state){
            pos.select = !pos.select;
          }
        });
      };
    }
  }
}]);
