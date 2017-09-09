'use strict';

/**
 * @ngdoc service
 * @name naltisChallengeApp.StarWarsFactory
 * @description
 * # StarWarsFactory
 * Factory in the naltisChallengeApp.
 */
angular.module('naltisChallengeApp')
  .factory('StarWarsFactory', ['baseapi','$http','$cacheFactory',function (baseapi,$http,$cacheFactory) {
    //Http Cache Factory
    var $httpDefaultCache = $cacheFactory.get('$http');
    return {
      /**
       * Get All Starwars Character
       * @return {PROMISE} $http
       */
      getAllCharacters: function () {
        return $http({
          method: 'GET',
          url: baseapi + 'people/',
          cache: true
        });
      },

      /**
       * Get Character Species
       * @param  {INTEGER} id Character id
       * @return {PROMISE} $http
       */
      getCharacterSpecies: function(id){
        return $http({
          method: 'GET',
          url: baseapi + 'species/' + id,
          cache: true
        });
      },

      /**
       * Get Character Vehicles
       * @param  {INTEGER} id Character id
       * @return {PROMISE} $http
       */
      getCharacterVehicles: function(id){
        return $http({
          method: 'GET',
          url: baseapi + 'vehicles/' + id,
          cache: true
        });
      },
      cache : $httpDefaultCache
    };
  }]);
