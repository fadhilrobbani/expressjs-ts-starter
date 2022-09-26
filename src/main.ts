import express, { Express } from 'express';

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

app.listen(3000, () => console.log('⚡server listen port 3000 ⚡'));
