  angular.module('app').value('dict',{}).run(['$http', 'dict',function($http, dict){
    $http.get('/data/city.json').success(function(res){
      dict.city = [];
      angular.forEach(res, function(item){
        dict.city.push({
          id: item.id,
          text: item.name
        });
      });
    });
    $http.get('/data/salary.json').success(function(res){
      dict.salary = [];
      angular.forEach(res, function(item){
        dict.salary.push({
          id: item.id,
          text: item.name
        });
      });
    });
    $http.get('/data/scale.json').success(function(res){
      dict.scale = [];
      angular.forEach(res, function(item){
        dict.scale.push({
          id: item.id,
          text: item.name
        });
      });
    });
  }]);
