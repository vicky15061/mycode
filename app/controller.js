
var phonecatControllers= angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl',['$scope','$http',function ($scope, $http) {
    $http.get('phones.json').success(function(data){
        $scope.phones=data;
    });
    $scope.orderProp='age';
    $scope.orderProp='snippet';
}]);
phonecatControllers.controller('phoneDetailsCtrl',['$scope','$routeParams',function($scope, $routeParams)
{
 $scope.phoneId=$routeParams.phoneId;
}]);
