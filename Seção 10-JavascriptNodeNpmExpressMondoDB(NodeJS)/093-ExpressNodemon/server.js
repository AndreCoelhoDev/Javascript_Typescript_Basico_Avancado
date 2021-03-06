const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello <b>World!</b>');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato.');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});