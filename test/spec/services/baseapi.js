'use strict';

describe('Service: baseapi', function () {

  // load the service's module
  beforeEach(module('naltisChallengeApp'));

  // instantiate service
  var baseapi;
  beforeEach(inject(function (_baseapi_) {
    baseapi = _baseapi_;
  }));

  it('should do something', function () {
    expect(!!baseapi).toBe(true);
  });

});
