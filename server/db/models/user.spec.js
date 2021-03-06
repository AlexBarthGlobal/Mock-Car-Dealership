/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          address: '555 nice avenue',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    })
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          address: '555 nice avenue',
          password: 'bones'
        })
        console.log(
          '🚀 ~ file: user.spec.js ~ line 41 ~ beforeEach ~ cody',
          cody
        )
      })

      it('returns true if userType is USER by default', () => {
        expect(cody.userType).to.equal('USER')
      })
    })
    // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
