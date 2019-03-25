angular.module('app.lib').factory('cache', ['$cacheFactory', '$cookies', function($cacheFactory, $cookies) {
  var cache = $cacheFactory('cache');
  return {
    info: function() {
      return cache.info();
    },
    get: function(key) {
      return cache.get(key)||$cookies.getObject(key)||$cookies.get(key);
    },
    put: function(key, value, cookieable) {
      if (cookieable) {
        angular.isObject(value) ? $cookies.putObject(key, value) : $cookies.put(key, value);
      }
      cache.put(key, value);
    },
    remove: function(key) {
      $cookies.remove(key);
      cache.remove(key);
    }
  };
}]);
