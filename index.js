const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Formulario = require('./database/Formulario');
const { raw } = require('body-parser');

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
  //SLECT * ALL FROM formulario
  Formulario.findAll({
    raw: true,
    order: [
      ['id', 'DESC'], //ASC = Crescente || DESC = Decrescente
    ],
  }).then(formulario => {
    res.render('index', {
      formulario: formulario,
    });
  });
});

//Caminho para a pagina do formulario de entrada de equipamentos
app.get('/formulario', (req, res) => {
  res.render('formulario', { data: null, hora: null });
});

// Rota para buscar a data e hora atual
app.get('/data-hora', (req, res) => {
  const dataHoraAtual = new Date();
  const data = dataHoraAtual.toLocaleDateString();
  const hora = dataHoraAtual.toLocaleTimeString();

  res.render('formulario', { data, hora });
});

app.post('/salvarformulario', (req, res) => {
  var solicitante = req.body.solicitante;
  var gati = req.body.gati;
  Formulario.create({
    solicitante: solicitante,
    gati: gati,
  }).then(() => {
    res.redirect('/');
  });
});

app.get('/equipamento/:id', (req, res) => {
  var id = req.params.id;
  Formulario.findOne({
    where: { id: id },
  }).then(formulario => {
    if (formulario != undefined) {
      //Equipamento encontrado
      res.render('equipamento', {
        formulario: formulario,
      });
    } else {
      //Equipamento nao encontrado
      res.redirect('/');
    }
  });
});

//Acesso ao servidor
app.listen(8080, () => {
  console.log('App rodando');
});
