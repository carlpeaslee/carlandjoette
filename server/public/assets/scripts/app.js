var myApp = angular.module("myApp", []);

myApp.controller("SuperController", ["$scope", "$http", function($scope, $http){

  $scope.studentArray = [];

  $scope.loadStudents = function () {
    $http.get("/students").then( function ( response ) {
      $scope.studentArray.push(response.data);
      console.log($scope.studentArray.students);
    })
  };

  $scope.loadStudents();





}]);
