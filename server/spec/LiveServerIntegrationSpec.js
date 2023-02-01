var request = require('request');
var expect = require('chai').expect;

describe('server', function() {
  it('should respond to GET requests for /api/blogs with a 200 status code', function(done) {
    request('http://127.0.0.1:3000/api/blogs', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should send back parsable stringified JSON', function(done) {
    request('http://127.0.0.1:3000/api/blogs', function(error, response, body) {
      expect(JSON.parse.bind(this, body)).to.not.throw();
      done();
    });
  });

  it('should send back an object', function(done) {
    request('http://127.0.0.1:3000/api/blogs', function(error, response, body) {
      var parsedBody = JSON.parse(body);
      expect(parsedBody).to.be.an('object');
      done();
    });
  });

  it('should send an object containing a `results` array', function(done) {
    request('http://127.0.0.1:3000/api/blogs', function(error, response, body) {
      var parsedBody = JSON.parse(body);
      expect(parsedBody).to.be.an('object');
      expect(parsedBody.results).to.be.an('array');
      done();
    });
  });
+
  it('should accept POST requests to /api/blogs', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:3000/api/blogs',
      json: {
        username: 'Jon',
        text: 'write my blog!'}
    };

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(201);
      done();
    });
  });

  it('should respond with messages that were previously posted', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:3000/api/blogs',
      json: {
        username: 'Jon',
        text: 'write my blog!'}
    };

    request(requestParams, function(error, response, body) {
      // Now if we request the log, that message we posted should be there:
      request('http://127.0.0.1:3000/api/blogs', function(error, response, body) {
        var messages = JSON.parse(body).results;
        expect(messages[0].username).to.equal('Jon');
        expect(messages[0].text).to.equal('write my blog!');
        done();
      });
    });
  });

  it('Should respond to OPTIONS request with a status code 204', function(done) {
    var requestParams = {method: 'OPTIONS',
      uri: 'http://127.0.0.1:3000/api/blogs',
    };

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(204);
      done();
    });
  });

  it('Should respond to OPTIONS request with a header GET, POST, HEAD', function(done) {
    var requestParams = {method: 'OPTIONS',
      uri: 'http://127.0.0.1:3000/api/blogs',
    };

    request(requestParams, function(error, response, body) {

      expect(response.headers['access-control-allow-methods']).to.equal('GET, POST, HEAD');
      done();
    });
  });

  it('Should 404 when asked for a nonexistent endpoint', function(done) {
    request('http://127.0.0.1:3000/arglebargle', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });


});
