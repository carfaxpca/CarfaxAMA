(function(){
  'use strict';
  angular
       .module('home', ['ngRoute'])
       .controller('HomeController', [
         '$http',
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
  function HomeController($http) {
    var self = this;

    self.matchingEmployees = [];

    self.search = function(){
      console.log("am i doing anything");
      $http.get('http://ess01aa01a.bat.ess.alpha.a.cdc.cfx:9200/people/_search?q=java').
        then(function(results){
            self.matchingEmployees = results.data.hits.hits;
        });
    };
  }

})();
