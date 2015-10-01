(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Princess Zelda',
        avatar: 'svg-1',
        headshot: 'princess_zelda',
        strengths: ['Wisdom', 'Precognition'],
        skills: ['Sword', 'Bow'],
        team: 'Triforce',
        content: "I had a dream... In the dream, dark storm clouds were billowing over the land of Hyrule... But suddenly, a ray of light shot out of the forest, parted the clouds and lit up the ground... The light turned into a figure holding a green and shining stone, followed by a fairy... I know this is a prophecy that someone would come from the forest... Yes, I thought you might be the one... Oh, I'm sorry! I got carried away with my story and didn't even properly introduce myself! I am Zelda, Princess of Hyrule."
      },
      {
        name: 'Boba Fett',
        avatar: 'svg-2',
        headshot: 'boba_fett',
        strengths: [],
        skills: [],
        team: '',
        content: "Maybe I'd have grown up a nice guy if a Jedi hadn't cut my dad's head off in front of me!"
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
