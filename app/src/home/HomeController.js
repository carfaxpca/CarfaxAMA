(function(){
  'use strict';
  angular
       .module('home', ['ngRoute'])
       .controller('HomeController', [
         '$scope',
         '$http',
         'userService',
          HomeController
       ])
       .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'src/home/view/index.html', controller: 'HomeController'});
       }]);


  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HomeController($scope, $http, userService) {
    $scope.search = function(){
      $scope.matchingEmployees = userService.search($scope.query).
        then(function(results){
          $scope.matchingEmployees = results.data.hits.hits;
        })
    };
  }

})();
