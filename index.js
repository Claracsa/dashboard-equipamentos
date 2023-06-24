const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const formularioModel = require('./database/Formulario');

//Database
connection
  .authenticate()
  .then(() => {
    console.log('conecção feita!');
  })
  .catch(msgErro => {
    console.log(msgErro);
  });

//Para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
//Para o express exibir arquivos estaticos como imagens e css
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Caminho para a pagina da lista de equipamentos
app.get('/', (req, res) => {
  res.render('index', {});
});

//Caminho para a pagina do formulario de entrada de equipamentos
app.get('/formulario', (req, res) => {
  res.render('formulario');
});

app.post('/salvarformulario', (req, res) => {
  var solicitante = req.body.solicitante;
  var gati = req.body.gati;
  res.send(
    'Formulário recebido! Solicitante' + solicitante + ' ' + 'GATI' + gati
  );
});

//Acesso ao servidor
app.listen(8080, () => {
  console.log('App rodando');
});
