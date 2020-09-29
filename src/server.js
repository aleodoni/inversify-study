import express from 'express';

import container from './container';
import TYPES from './types';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const weapon = container.get(TYPES.Katana);
  console.log(weapon.hit());
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`> Aplicação rodando em http://localhost:${port}`);
});
