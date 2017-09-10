process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

const server = require('../index');
const knex = require('../db/connection');

describe('routes: panoramic', () => {

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

    describe('GET /panoramic', () => {
      it('should return all URLs', (done) => {
        chai.request(server).get('/panoramic').end((err, res) => {
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
        chai.request(server).get('/panoramic/hello').end((err, res) => {
          should.exist(err);
          res.status.should.eql(404);
          res.type.should.eql('application/json');
          res.body.status.should.eql('error');
          done();
        });
      });
    });

    describe('POST /panoramic', () => {
      it('should return the created URL', (done) => {
        chai.request(server).post('/panoramic').send({image_URL: 'http://thisisatest.com/image.jpeg'}).end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys('id', 'image_URL');
          done();
        });
      });

      it('should throw a new error if the  URL is invalid', (done) => {
        chai.request(server).post('/panoramic').send({number: 3}).end((err, res) => {
          should.exist(err);
          res.status.should.eql(404);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          done();
        });
      });
    });

    describe('PUT /panoramic', () => {
    it('should return the updated URL', (done) => {
      knex('PAN').then((panoramics) => {
        const PAN = panoramics[0];
        chai.request(server).put(`/panoramic/${PAN.id}`).send({image_URL: 'WAT'}).end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys('image_URL');
          done();
        });
      });
    });

    it('Should throw an error if the URL doesn\'t exist', (done) => {
      chai.request(server).put('/panoramic/1234567').send({image_URL: 'WAT'}).end((err, res) => {
        should.exist(err);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.status.should.eql('error');
        done();
      });
    });
  });

  describe('DELETE /panoramic', () => {
    it('should return a deleted URL', (done) => {
      knex('PAN').then((panoramics) => {
        const PAN = panoramics[0];
        const tempLength = panoramics.length;
        chai.request(server).delete(`/panoramic/${PAN.id}`).end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys('image_URL');
          knex('PAN').then((panoramics) => {
            panoramics.length.should.eql(tempLength - 1);
            done();
          });
        });
      });
    });

    it('should throw an error if URL exists', (done) => {
      chai.request(server).delete('/panoramic/1234567').end((err, res) => {
        should.exist(err);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
        res.body.status.should.eql('error');
        done();
      });
    });
  });
});
