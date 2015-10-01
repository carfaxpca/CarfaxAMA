(function(){
  'use strict';
  angular
       .module('home', ['ngRoute'])
       .controller('HomeController', [
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
  function HomeController($http, userService) {
    var self = this;

    self.matchingEmployees = [];

    self.search = function(){
      userService
        .loadAllUsers()
        .then( function( users ) {
              self.matchingEmployees = users;
        });
    };
  }

})();
