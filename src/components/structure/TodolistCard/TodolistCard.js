import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const TodolistCard = (props) => {
  const todolist = props.data;

  return (
    <Link to={`/view/${todolist._id}`} className="col LinkStyle">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="card bg-white p-3 mb-4 shadow">
            <div class="d-flex justify-content-between mb-4">
              <div class="user-info">
                <div class="user-info__img">
                  <div
                    img
                    src="https://img.icons8.com/emoji/48/000000/hedgehog-emoji.png"
                    alt="User Img"
                  ></div>
                </div>
                <div class="user-info__basic">
                  <h3 class="mb-0">{todolist.titulo}</h3>
                  <p>
                    Status:<span class="quote2">{todolist.status}</span>
                  </p>
                </div>
              </div>
              <div class="dropdown open">
                <a
                  href="#!"
                  class="px-2"
                  id="triggerId1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="triggerId1">
                  <a class="dropdown-item" href="#">
                    <i class="fa fa-pencil mr-1"></i> 
                    Editar
                  </a>
                  <a class="dropdown-item text-danger" href="#">
                    <i class="fa fa-trash mr-1"></i> Excluir
                  </a>
                </div>
              </div>
            </div>
            <p>
              Prioridade:<span class="mb-0">{todolist.prioridade}</span>
            </p>
            <div class="d-flex justify-content-between mt-4">
              <div>
                <h5 class="mb-0">
                  06:00 PM
                  <small class="ml-1">2 Feb 2021</small>
                </h5>
              </div>
              <span class="text-success font-weight-bold">Consult</span>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
    </Link>
  );
};

export default TodolistCard;
