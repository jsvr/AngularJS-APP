angular.module('app.lib').directive('mkPositionInfo', ['cache', '$http', function(cache, $http) {
  return {
    scope: {
      pos: '=data'
    },
    replace: true,
    templateUrl: 'view/template/positionInfo.html',
    link: function(scope, elem, attr){
      var user = cache.get('user');
      scope.isLogin = !!user;

      scope.toggle = function(){
        $http.get('/data/favorite.json?id=' + scope.pos.id).success(function(res){
          if(1===res.state){
            scope.pos.select = !scope.pos.select;
          }
        });
      };
    }
  }
}]);
