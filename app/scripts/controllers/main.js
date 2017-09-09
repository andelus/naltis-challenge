'use strict';

/**
 * @ngdoc function
 * @name naltisChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naltisChallengeApp
 */
angular.module('naltisChallengeApp')
  .controller('MainCtrl', ['StarWarsFactory','utils',function (StarWarsFactory,utils) {
    var vm = this;

    //Self Execute The API Call on Route Access
    (function(){
      StarWarsFactory.getAllCharacters()
      .then(function(res){
        vm.people = expandDetails(res.data.results);
        console.log(vm.people);
      })
      .catch(function(err){
          //Handle Error
          console.error('StarWarsFactory:getAllCharacters',err);
      });
    })();

    /**
     * Takes The API Return
     * @param  {OBJECT} data API Return
     * @return {OBJECT} mutatedData
     */
    function expandDetails(data){
      angular.forEach(data, function(value,key){
        //Get One Species
        StarWarsFactory.getCharacterSpecies(utils.parseUrlId(value.species[0]))
          .then(function(res){
            value.species[0] = res.data;
          })
          .catch(function(err){
          });

        // Get First Vehicles
        if(utils.parseUrlId(value.vehicles[0]) !== 0){
          StarWarsFactory.getCharacterVehicles(utils.parseUrlId(value.vehicles[0]))
            .then(function(res){
              value.vehicles[0] = res.data;
            })
            .catch(function(err){  
            });
          }else{
            value.vehicles[0] = { name : "n/a" };
          }

      });
      return data;
    }
  }]);
