const express = require('express');
const app = express();

//Para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
//Para o express exibir arquivos estaticos como imagens e css
app.use(express.static('public'));

//Caminho para a pagina da lista de equipamentos
app.get('/', (req, res) => {
  res.render('index', {});
});

//Caminho para a pagina do formulario de entrada de equipamentos
app.get('/formulario', (req, res) => {
  res.render('formulario');
});

app.post('/salvarformulario', (req, res) => {
  res.send('Formulário recebido!');
});

//Acesso ao servidor
app.listen(8080, () => {
  console.log('App rodando');
});
