angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "view/main.html",
      controller: 'mainCtrl'
    })
    .state('position', {
      url: "/position/:id",
      templateUrl: "view/position.html",
      controller: "positionCtrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "view/login.html",
      controller: "loginCtrl"
    })
    .state('register', {
      url: "/register",
      templateUrl: "view/register.html",
      controller: "registerCtrl"
    })
    .state('my', {
      url: "/my",
      templateUrl: "view/my.html",
      controller: "myCtrl"
    })
    .state('search', {
      url: "/search/:keyword?city=&scale=&salary",
      templateUrl: "view/search.html",
      controller: "searchCtrl"
    })
    .state('myPost', {
      url: "/myPost",
      templateUrl: "view/myPost.html",
      controller: "myPostCtrl"
    })
    .state('myFavorite', {
      url: "/myFavorite",
      templateUrl: "view/myFavorite.html",
      controller: "myFavoriteCtrl"
    })
    .state('company', {
      url: "/company/:id",
      templateUrl: "view/company.html",
      controller: "companyCtrl"
    })
    ;
    $urlRouterProvider.otherwise("main");
}]);
