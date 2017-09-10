process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

describe('I\'m a sample test.', () => {
  it ('I\'m passing!', (done) => {
    const sum = 1.3;
    sum.should.eql(1.3);
    sum.should.not.eql(40);
    done();
  })
})
