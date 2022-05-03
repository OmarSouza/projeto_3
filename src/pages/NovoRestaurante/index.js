import React, { Component } from "react";
import './NovoRestaurante.css';
import { FiCornerDownLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class NovoRestaurante extends Component {
    render() {
        return (
            <div className="componentNovoRest">
                {/* Criação de Container para Titulo e Botões */}
                <div className="containerHeaderNovoRest">
                    <label>Novo Restaurante</label>
    
                    {/* Criação de Container para Botões */}
                    <div className="containerBotaoHeaderNovoRest">
                        <Link to='/restaurante'>
                            <FiCornerDownLeft className="botaoHeaderNovoRest"/>
                        </Link>
                    </div>
                </div>
    
                {/* Criação de Container para entrada de Dados */}
                <div class="containerInfoNovoRest">
                    {/* Criação de Form para entrada de Texto */}
                    <form class="formNovoRest">
                        <label for="inputNome">Nome:</label>
                        <input type="text" id="inputNome" autocomplete="off"/>
    
                        <label for="inputEndereço">Endereço:</label>
                        <input type="text" id="inputEndereço" autocomplete="off"/>
    
                        <label for="inputTipo">Tipo de Restaurante:</label>
                        <select name="tipoRestaurante" id="tipoRestaurante" class="selectNovoRest">
                            <option value="">Selecione</option>
                            <option value="Vegetariano">Vegetariano</option>
                            <option value="Vegano">Vegano</option>
                            <option value="Ovolactovegetariano">Ovolactovegetariano</option>
                        </select>
    
                        <label for="inputData">Data de Visita:</label>
                        <input type="date" id="inputData" autocomplete="off"/>
    
                        <label for="inputTelefone">Telefone:</label>
                        <input type="text" id="inputTelefone" autocomplete="off"/>
                    </form>
    
                    {/* Criação de Container de Botões */}
                    <div class="containerBotaoNovoRest">
                        <Link to='./restaurante' className="botaoNovoRest linkNovoRest primarioNovoRest">Inserir</Link>
                        <Link to='./restaurante' className="botaoNovoRest linkNovoRest quartenarioNovoRest">Cancelar</Link>
                    </div>
                </div>
    
            </div>
        );
    }
}

export default NovoRestaurante;