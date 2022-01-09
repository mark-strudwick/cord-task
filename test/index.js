const expect = require('chai').expect

describe('Two sample tests to show 1 passing, and 1 failing', function() {

  context('Not valid (failing)', () => {
    it('Add together 2 numbers', () => {
      expect(1+2).equal(100)
    })
  })

  context('Is a valid test', () => {
    it('Adds together 2 numbers', () => {
      expect(1+2).equal(3)
    })
  })
})