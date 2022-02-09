const express = require('express');
const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
     <form action="/" method="POST">
      Nome do Cliente: <input type="text" name="nome">
      <button>Enviar</button>
     </form>`
  );
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body.nome);
})

//  http://localhost:3000/testes/123
app.get('/testesParams/:idUsuario?', (req, res) => {
  console.log(req.params);
  res.send(req.params.idUsuario);
});

//  http://localhost:3000/testesQuery?nome=Andre&sobrenome=Coelho
app.get('/testesQuery/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});