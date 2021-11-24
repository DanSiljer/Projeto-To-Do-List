import React, { useState, useEffect } from "react";
import "./View.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Api from "../../api/api";

const View = () => {
  const [todolist, setTodolist] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);

  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTodolistById();
  }, []);

  const { id } = useParams();
  console.log(id);
  const getTodolistById = async () => {
    const request = await Api.fetchGetById(id);
    const todolist = await request.json();
    setTodolist(todolist);
  };

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if (data.message) {
      console.log("excluido", data.message);
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card w-50 my-5 CssCard">
        <h1 className="text-center my-4">
          <b>Nome: </b>
          {todolist.titulo}
        </h1>
        <h4 className="text-center">
          <b>Prioridade: </b>
          {todolist.prioridade}
        </h4>
        <h4 className="text-center">
          <b>Status: </b> {todolist.status}
        </h4>
        <h4 className="text-center">
          <b>Prazo: </b>
          {todolist.prazo}
        </h4>
        <p className="text-center">
          Data de criação: <span>{todolist.dataCriacao}</span>
        </p>

        <h5 class="card-text">{todolist.descricao}</h5>
          <div class="dropdown-menu">
            <Link to={`/edit/${todolist._id}`} className="fa fa-pencil mr-1">
              Editar
           </Link>
          <button class="dropdown-item text-danger" onClick={AbreModal}>
            Escluir
          </button>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false} classNames="modalcss">
        <h2 className="my-4">Realmente deseja excluir essa tarefa?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>
            Não!
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Sim!
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
