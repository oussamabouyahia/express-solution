const axios = require('axios')

describe('server on testing ', ()=> {
  test('should respond to GET requests for /api/blogs with a 200 status code', async () => {
        var response = await axios.get('http://127.0.0.1:3000/api/blogs')
        expect(response.status).toEqual(200);
  });
  test('should send back parsable stringified JSON', async () => {
        var response = await axios.get('http://127.0.0.1:3000/api/blogs',{transformResponse: []})
        expect(JSON.parse.bind(this,response.data)).not.toThrowError();
  });
  test('should send back an object', async ()=> {
        var response = await axios.get('http://127.0.0.1:3000/api/blogs')
        expect(typeof response.data).toBe('object');
  });
  test('should send an object containing a `results` array', async () => {
    var response = await axios.get('http://127.0.0.1:3000/api/blogs')
    expect(typeof response.data).toBe('object');
    expect(Array.isArray(response.data.results)).toBe(true);
  });
  test('should accept POST requests to /api/blogs',async()=>{
    let response = await axios.post('http://127.0.0.1:3000/api/blogs',{username: 'Jon',text: 'write my blog!'})
    expect(response.status).toEqual(201);
  });
  test('should respond with messages that were previously posted', async ()=> {
    let postResponse = await axios.post('http://127.0.0.1:3000/api/blogs', {
        username: 'Jon',
        text: 'write my blog!'})
      // Now if we request the log, that message we posted should be there:
    let response = await axios('http://127.0.0.1:3000/api/blogs')
    var messages = response.data.results;
        expect(messages[0].username).toEqual('Jon');
        expect(messages[0].text).toEqual('write my blog!');
      });
  test('Should 404 when asked for a nonexistent endpoint', async () => {
    try{
      let response = await axios.get('http://127.0.0.1:3000/arglebargle')
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });
});