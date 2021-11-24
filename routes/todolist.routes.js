const express = require('express');

const TodolistController = require('./../controllers/todolist.controller');

const todolistController = new TodolistController;

const router = express.Router();

router.get('/', todolistController.getTodolist);

router.get('/:id', todolistController.getTodolistById);

router.post('/add', todolistController.createTodolist);

router.put('/:id', todolistController.editTodolist);

router.delete('/:id', todolistController.deleteTodolist);

module.exports = router;