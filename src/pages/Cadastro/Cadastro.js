import React from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // target = quem disparou o evento
    console.log(evento.target);
    const titulo = evento.target.titulovalue;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const incone = evento.target.incone.value;
    const prazo = evento.target.prazo.value;
    const data = evento.target.data.value;

    const lista = {
      titulo,
      descricao,
      prioridade,
      incone,
      prazo,
      data
    }

    const request = await Api.fetchPost(lista);
    if (request.status === 500) {
      alert('Falha na conexão')
    }
    const result = await request.json();
    if (result.error) {
      console.log(result.error);
    } else {
      alert(result.message);
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Cadastro</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título:</label>
                  <input id="titulo" className="form-control" type="text" placeholder="Título" name="titulo" />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input id="descricao" type="text" className="form-control" placeholder="Descricao" name="descricao" />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input id="prioridade" type="text" className="form-control" placeholder="Prioridade" name="prioridade" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="incone">Imagem:</label>
                  <input id="incone" type="text" className="form-control" placeholder="URL da capa do album" name="incone" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="duracao">Status:</label>
                <input id="status" type="time" className="form-control" placeholder="Duraçao da música" name="status" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="prazo">Prazo:</label>
                <input id="prazo" type="time" className="form-control" placeholder="Prazo" name="prazo" />
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="data">Data de criação:</label>
                  <input id="data" type="time" className="form-control" placeholder="Data de criação" name="data" />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="button" className="btn btn-danger">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
