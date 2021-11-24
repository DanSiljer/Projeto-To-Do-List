if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()

}

const express = require('express');
const cors  = require('cors');
const TodolistRouter = require('./routes/todolist.routes');
const Conn = require('./conn/conn');
const app = express();

app.use(express.json());

app.use(cors());

app.use('/todolist', TodolistRouter);

// buscando os dados da variavel de ambiente
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data);

// inicializar o servidor http em alguma porta para podermos acessar ele.
const port = 3001;
app.listen(process.env.PORT || port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
})