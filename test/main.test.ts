import express, { Express } from 'express';
import request from 'supertest';

const app: Express = express();
app.get('/', (req, res) => {
  res.send(`${req.method} and ${req.get('accept')} ${req}`);
});

app.get('/login', (req, res) => {
  if (req.query.name) {
    res.status(200).send(`hello ${req.query.name}`);
  } else {
    res.status(400).end();
  }
});

test('test get login', async () => {
  const response = await request(app).get('/login').query({ name: 'fadhil' });
  expect(response.text).toBe('hello fadhil');
});

app.get('/data', (req, res) => {
  res.set('Content-type', 'application/json');
  res.send({
    code: 200,
    status: 'OK',
  });
});

app.listen(3001, () => console.log('⚡server listen port 3000 ⚡'));
