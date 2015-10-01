(function(){

  angular
       .module('home', ['ngRoute'])
       .controller('HomeController', [
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
  function HomeController() {
    var self = this;

  }

})();
