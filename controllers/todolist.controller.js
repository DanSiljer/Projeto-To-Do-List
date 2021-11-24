const TodolistService = require('./../services/todolist.service');

const todolistService = new TodolistService;


class TodolistController {
    getTodolist = async (req, res) => {
      const todolist = await  todolistService.findAll();
      res.send(todolist);
    }
  

    getTodolistById = async (req, res) => {
      const todolist = await todolistService.findById(req.params.id);
      if(!todolist){
        res.status(404).send({message:`Tarefa não encontrada`});
      }else{
      res.status(200).send(todolist);

      }
    }
    createTodolist = async (req, res) => {
      if(!req.body){
        return;
      }
      await todolistService.create(req.body)
      .then(() => {
        res.send({message: `Tarefa Criada com sucesso`})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({message: `Erro no servidor`})
      })
    }
  
    editTodolist = async (req, res) => {
      const idParam = req.params.id;
      const todolistEdit = req.body;
      await todolistService.edit(idParam, todolistEdit)
      .then(() => {
        res.send({message: `Tarefa Editada com sucesso`})
      })
      .catch( err => { 
        res.status(500).send({message: `Erro: ${err}`})
      })
    }
  
    deleteTodolist = async (req, res) => {
      const idParam = req.params.id;
      await todolistService.delete(idParam)
      .then(() => {
        res.send({message: 'Excluido com sucesso'})
      })
      .catch(err => {
        res.status(500).send({message: `Error: ${err}`});
      })
    }
  }
  
  module.exports = TodolistController;