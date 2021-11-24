const TodolistModel = require("./../models/todolist");

class todolistService {
  findAll = async () => await TodolistModel.find();

  findById = async (id) => {
    return await TodolistModel.findById(id);
  };

  create = async (todolist) => {
    return await TodolistModel.create(todolist);
  };

  edit = async (id, t) => {
    return await TodolistModel.updateOne({ _id: id }, todolist);
  };

  delete = async (id) => {
    return await TodolistModel.deleteOne({ _id: id });
  };
}

module.exports = todolistService;