const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { app } = require('../server');
const CODE = require('../constants/index');
const Table = require('../models/table');
const { tables, populateTables } = require('./seed/seed');

const { expect } = chai;

beforeEach(populateTables);

chai.use(chaiHttp);
const host = `http://localhost:${process.env.PORT}/api/v1`;

describe('/POST table', () => {
  it('it should create table', done => {
    const title = 'Table 1';
    chai
      .request(host)
      .post('/tables')
      .send({ title })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.equal(200);
        expect(res.body.code).to.equal(200);
        expect(res.body.data.title).to.equal('Table 1');
        Table.find({ title })
          .then(table => {
            expect(table.length).to.equal(1);
            expect(table[0].title).to.equal(title);
            return done();
          })
          .catch(e => done(e));
      });
  });
});

describe('GET tables', () => {
  it('it should GET all the tables', done => {
    chai
      .request(host)
      .get('/tables')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body.code).to.equal(200);
        expect(res.body.data.length).to.equal(2);
        done();
      });
  });
});

describe('GET table by id', () => {
  it('it should GET table by id', done => {
    chai
      .request(host)
      .get(`/tables/${tables[0]._id}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.title).to.equal(tables[0].title);
        done();
      });
  });
  it('it should return 404 if id not found', done => {
    chai
      .request(host)
      .get(`/tables/${mongoose.Types.ObjectId()}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.code).to.equal(404);
        done();
      });
  });
});

describe('DELETE table', () => {
  it('it should DELETE table by id', done => {
    chai
      .request(host)
      .delete(`/tables/${tables[0]._id}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body.code).to.equal(200);
        expect(res.body.data._id).to.equal(tables[0]._id);

        Table.find().then(tables => {
          expect(tables).to.have.lengthOf(1);
          done();
        });
      });
  });
});
