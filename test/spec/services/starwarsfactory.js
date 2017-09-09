'use strict';

describe('Service: StarWarsFactory', function () {

  // load the service's module
  beforeEach(module('naltisChallengeApp'));

  // instantiate service
  var StarWarsFactory;
  beforeEach(inject(function (_StarWarsFactory_) {
    StarWarsFactory = _StarWarsFactory_;
  }));

  it('should do something', function () {
    expect(!!StarWarsFactory).toBe(true);
  });

});
