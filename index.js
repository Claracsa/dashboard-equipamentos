const express = require('express');
const app = express();

//Para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
  res.render('index', {});
});

app.get('/formulario', (req, res) => {
  res.render('formulario');
});

app.listen(8080, () => {
  console.log('App rodando');
});
