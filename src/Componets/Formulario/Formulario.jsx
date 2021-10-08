import React, { Component } from 'react';
import './Formulario.css'

class Formulario extends Component{
    render(){
        return(
            // Início do Título do Formulário
            
            <div className=" container col-md-6 order-md-1">
          <h1 className="mb-3 display-4 my-5">inscrição vestibular - UNIP</h1>

          <form className="needs-validation my-5" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="primeiroNome">Nome Completo</label>
                <input type="text" className="form-control" id="primeiroNome" placeholder="" required />
                <div className="invalid-feedback">
                  É obrigatório inserir um nome válido.
                </div>
              </div>
              <div className="col-md-3 mb-6">
                <label for="sobrenome">CPF</label>
                <input type="text" className="form-control" id="sobrenome" placeholder="" required />
                <div className="invalid-feedback">
                  É obrigatório inserir um sobre nome válido.
                </div>
              </div>
            </div>

            <div className="col-md-9 mb-3">
              <label for="nickname">Nickname</label>
              <div className="input-group">
                <input type="text" className="form-control" id="nickname" placeholder="Nickname" required />
                <div className="invalid-feedback">
                  Seu nickname é obrigatório.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Opcional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="fulano@exemplo.com" />
              <div className="invalid-feedback">
                Por favor, insira um endereço de e-mail válido, para atualizações de entrega.
              </div>
            </div>

            <div className="mb-3">
              <label for="endereco">Endereço</label>
              <input type="text" className="form-control" id="endereco" placeholder="Rua dos bobos, nº 0" required />
              <div className="invalid-feedback">
                Por favor, insira seu endereço de entrega.
              </div>
            </div>

            <div className="mb-3">
              <label for="endereco2">Endereço 2 <span className="text-muted">(Opcional)</span></label>
              <input type="text" className="form-control" id="endereco2" placeholder="Apartamento ou casa" />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="pais">País</label>
                <select className="custom-select d-block w-100 form-control" id="pais" required>
                  <option value="">Escolha...</option>
                  <option>Brasil</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, escolha um país válido.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="estado">Estado</label>
                <select className="custom-select d-block w-100 form-control" id="estado" required>
                  <option value="">Escolha...</option>
                  <option>Acre</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, insira um estado válido.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cep">CEP</label>
                <input type="text" className="form-control" id="cep" placeholder="" required />
                <div className="invalid-feedback">
                  É obrigatório inserir um CEP.
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <button type="button" class="btn btn-primary form-control" required>inscrição</button>
              </div>
            </div>
            </form>
            </div>
            
              
        )
    }
}

export default Formulario;