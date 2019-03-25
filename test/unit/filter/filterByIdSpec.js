'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('app.lib'));


  describe('checkmark', function() {
    var array = [{
      aId: 'val1',
      bId: 'val2'
    }, {
      aId: 'val11',
      bId: 'val22'
    }];
    it('should convert boolean values to unicode checkmark or cross',
      inject(['filterByIdFilter', function(filterByIdFilter) {
        expect(filterByIdFilter(array, { a: 'val11' })).toEqual([array[1]]);
        expect(filterByIdFilter(array, { b: 'val2' })).toEqual([array[0]]);
      }]));
  });
});
