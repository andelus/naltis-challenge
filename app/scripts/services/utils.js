'use strict';

/**
 * @ngdoc service
 * @name naltisChallengeApp.utils
 * @description
 * # utils
 * Factory in the naltisChallengeApp.
 */
angular.module('naltisChallengeApp')
  .factory('utils', function () {
    return {
      parseUrlId: function (url) {
        var urlId;
        if(typeof url !== "undefined")
        {
          urlId = url.match(/[0-9]\d*/g);
          return urlId;
        }else{
          return url = 0;
        }
      }
    };
  });
