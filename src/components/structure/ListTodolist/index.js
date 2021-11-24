import React, { useState, useEffect } from "react";
import TodolistCard from "../TodolistCard";
import Api from '../../../api/api'

const ListTodolist = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getTodolist();
  }, []);

  const getTodolist= async () => {
    const request = await Api.fetchGetAll();
    const data = await request.json();

    setTodolist(data);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {todolist.map((todolist) => (
        <TodolistCard data={todolist} key={todolist._id} />
      ))}
    </div>
  );
};

export default ListTodolist;
