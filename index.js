const express = require('express');
const app = express();

//Para o Express usar o EJS como View engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var nome = 'Clara';
  var lang = 'Java';
  res.render('index', {
    nome: nome,
    lang: lang,
    canal: 'tessste',
    inscritos: 8000,
  });
});

app.listen(8080, () => {
  console.log('App rodando');
});
