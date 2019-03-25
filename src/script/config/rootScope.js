angular.module('app').run(['$rootScope', function($rootScope){
  'use strict';
  $rootScope.$on('$stateChangeStart', function(event, next, current) {
    // $rootScope.loading = true;
  });
  $rootScope.$on('$stateChangeSuccess', function(event, next, current){
      // $rootScope.loading = false;
  });
  $rootScope.loading = function(){
    document.getElementById('mask').style.display = "block";
  };
  $rootScope.loaded = function(){
    document.getElementById('mask').style.display = "none";
  };
}]);
