process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

const server = require('../index');
const knex = require('../db/connection');

describe('routes: panoramics', () => {

  beforeEach(() => {
    return knex.migrate.rollback().then(() => {
      return knex.migrate.latest();
    }).then(() => {
      return knex.seed.run();
    });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /panoramics', () => {
    it('should return all URLs', (done) => {
      chai.request(server).get('/panoramics').end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.data.length.should.eql(3);
        res.body.data[0].should.include.keys('id', 'image_URL');
        done();
      });
    });

    it('should throw an error if the URL doesn\'t exist', (done) => {
      chai.request(server).get('/panoramics/hello').end((err, res) => {
        should.exist(err);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.status.should.eql('error');
        done();
      });
    });
  });

  describe('POST /panoramics', () => {
    it('should return the created URL', (done) => {
      chai.request(server).post('/panoramics').send({image_URL: 'http://thisisatest.com/image.jpeg'}).end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.data[0].should.include.keys('id', 'image_URL');
        done();
      });
    });

    it('should throw a new error if the  URL is invalid', (done) => {
      chai.request(server).post('/panoramics').send({number: 3}).end((err, res) => {
        should.exist(err);
        res.status.should.eql(404);
        res.type.should.equal('application/json');
        res.body.status.should.eql('error');
        done();
      });
    });
  });

});
