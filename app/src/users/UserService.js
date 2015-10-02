(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', '$http', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, $http){
    var service = {};
    var users = {};

    service.search = function(query){
      return $http.get('http://ess01aa01a.bat.ess.alpha.a.cdc.cfx:9200/people/_search?q='+query);
    }

    service.all = function(){
      return $http.get('http://ess01aa01a.bat.ess.alpha.a.cdc.cfx:9200/people/_search?size=50');      
    }

    service.getUser = function(id) {
      return $http.get('http://ess01aa01a.bat.ess.alpha.a.cdc.cfx:9200/people/person/'+id);
    }

    service.update = function(userId){
      return $http.get('http://ess01aa01a.bat.ess.alpha.a.cdc.cfx:9200/people/person/' + userId)
    }

    service.getUser

    return service;
  }

})();
