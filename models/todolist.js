const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    prioridade: { type: String },
    status: { type: String },
    prazo: { type: String },
    dataCriacao: { type: Date, default: Date.now },
  });
  
  const TodolistModel = mongoose.model("todolist", todolistSchema);
  
  module.exports = TodolistModel;