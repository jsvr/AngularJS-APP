angular.module('app.lib').filter('filterById', [function() {
  'use strict';
  return function(list, filterObj) {
    list = list || [];
    var array = list.concat();
    if (angular.isObject(filterObj)) {
      for (var e in filterObj) {
        var fArray = [];
        angular.forEach(array, function(item) {
          item[e + 'Id'] === filterObj[e] ? fArray.push(item) : 1 == 1;
        });
        array = fArray;
      }
    }
    return array;
  };
}]);
