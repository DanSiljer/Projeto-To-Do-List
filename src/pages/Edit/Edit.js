import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  // acessa o id no parametro da url;
  const { id } = useParams();
  // inicializar o meu estado do objeto musica
  const [lista, setLista] = useState({});

  // use Effect chama a funcao que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getListaById();
  }, [])

  async function getListaById() {
    const request = await Api.fetchGetById(id);
    const lista = await request.json();
    setLista(lista);
  }

  const handleFieldsChange = (evento) => {
    // copia do objeto lista
    const campos = { ...lista }

    // para cada input eu atualizo o seu respectivo valor no obj
    campos[evento.target.name] = evento.target.value;

    console.log(campos);
    setLista(campos);

  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição da Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Titulo"
                    value={lista.titulo}
                    onChange={handleFieldsChange}
                    name="titulo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descricao"
                    value={lista.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    value={lista.prioridade}
                    onChange={handleFieldsChange}
                    placeholder="Prioridade"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="incone">Imagem:</label>
                  <input
                    id="incone"
                    type="text"
                    value={lista.incone}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="URL da capa do album"
                    name="incone"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <input
                    id="status"
                    type="time"
                    value={lista.status}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Status"
                    name="status"
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo:</label>
                  <input
                    id="prazo"
                    type="time"
                    value={lista.status}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Prazo"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="data">Data de criação:</label>
                  <input
                    id="data"
                    type="time"
                    value={lista.status}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Data de criação"
                    name="data"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
