import React from "react";
import Lista from "../../components/structure/Lista";
import './Home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1">Página de Tarefas</h1>
      <Lista/>
    </div>
  );
};

export default Home;
