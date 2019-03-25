angular.module('app').config(['$provide', function($provide){
  $provide.decorator('$http', ['$delegate', '$q', function($delegate, $q){
    var get = $delegate.get;
    $delegate.post = function(url, data) {
      var defer = $q.defer();
      if(Math.random()<0.1){
        defer.reject({code:-1,error: url + ' request error!'});
      } else {
        $delegate.get(url).success(function(res){
          defer.resolve(res);
        }).error(function(err){
          defer.reject(err);
        });
      }
      return {
        success: function(cb) {
          $q.when(defer.promise).then(function(res) {
            cb.call(cb, res);
          });
          return this;
        },
        error: function(cb) {
          $q.when(defer.promise).catch(function(err) {
            cb.call(cb, err);
          });
        }
      };
    }
    return $delegate;
  }]);
}]);
