import React, { Component } from "react";
import "./Formulario.css";

class Formulario extends Component {
  render() {
    return (
      /* Título */
        <div className=" container col-md-6 order-md-1">
          <h1 className="mb-3 display-4 my-5">inscrição Vestibular</h1>

          {/*   Input de NOME COMPLETO  */}
          <form className="needs-validation my-5" novalidate>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="primeiroNome">Nome Completo</label>
                <input
                  type="text"
                  className="form-control"
                  id="primeiroNome"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  É obrigatório inserir um nome válido.
                </div>
              </div>

              {/*   Input do CPF  */}
              <div className="col-md-4 mb-6">
                <label for="sobrenome">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  id="sobrenome"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  É obrigatório inserir um sobre nome válido.
                </div>
              </div>

              {/*   Input do E-MAIL  */}
            </div>
            <div className="row">
              <div className="col-md-8 mb-4">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="fulano@exemplo.com"
                />
                <div className="invalid-feedback">
                  Por favor, insira um endereço de e-mail válido, para
                  atualizações de entrega.
                </div>
              </div>

              {/*   Input dO CELULAR  */}
              <div className="col-md-4 mb-4">
                <label for="cep">Celular</label>
                <input
                  type="text"
                  className="form-control"
                  id="celular"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  É obrigatório inserir um Celular.
                </div>
              </div>
            </div>

            {/*   Input do CURSO  */}
            <div className="row">
              <div className="col-md-5 mb-4">
                <label for="pais">Curso</label>
                <select
                  className="custom-select d-block w-100 form-control"
                  id="curso"
                  required
                >
                  <option value="">Escolha...</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, escolha um Curso válido.
                </div>
              </div>

              {/*   Input da UNIDADE  */}
              <div className="col-md-4 mb-4">
                <label for="estado">Unidade</label>
                <select
                  className="custom-select d-block w-100 form-control"
                  id="estado"
                  required
                >
                  <option value="">Escolha...</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, insira uma Unidade válido.
                </div>
              </div>

              {/*    Input do VESTIBULAR   */}
              <div className="col-md-3 mb-4">
                <label for="estado">Vestibular</label>
                <select
                  className="custom-select d-block w-100 form-control"
                  id="estado"
                  required
                >
                  <option value="">Escolha...</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, insira um Vestibular válido.
                </div>
              </div>

              {/*        BOTÃO   */}
              <div class="form-row text-center">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                  Inscrição
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Formulario;
