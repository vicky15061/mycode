var phonecatApp=angular.module('phonecatApp',['ngRoute','phonecatControllers']);
phonecatApp.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/phones',{
        templateUrl:'partials/phonelist.html',
        controller: 'PhoneListCtrl'}).
          when('/phones/:phoneId',{
            templateUrl:'partials/phonedetails,html',
            controller: 'phoneDetailsCtrl'
          }).otherwise({
            redirectTo:'/phones'
          });

    }]);