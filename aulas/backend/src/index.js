const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * metodos HTTP:
 * 
 * get: buscar informções no backend
 * post: criar uma informação no backend
 * put: alterar um informcão no backend
 * delete: deleta uma informação no backend
 */

 /**
  * tipos de parametros:
  * 
  * query: parametros nomeados enviados na rota apos '?' (filtros, paginação)
  * route: prametros utilizados pra indentificar recursos
  * body: corpo da requisição, utilizado para crair ou alterar recursos
  */

app.get('/',function(req, res){});

app.listen(3333);