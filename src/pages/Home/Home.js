import React from "react";
import ListTodolist from "../../components/structure/ListTodolist";
import './Home.css'

const Home = () => {
  return (
    <section class="main-content">
    <div class="container">
      <h1 class="text-center h1">Pagina de tarefas</h1>
      <ListTodolist/>
    </div>
    </section>
    
  );
};

export default Home;
