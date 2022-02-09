exports.paginaInicial = (req, res) => {
  res.send(
    `<!DOCTYPE html>
     <form action="/" method="POST">
      Nome do Cliente: <input type="text" name="nome">
      <button>Enviar</button>
     </form>`
  );
};

exports.trataPost = (req, res) => {
  res.send('Rota de POST');
};