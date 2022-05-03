import React, { Component } from "react";
import './NovaRec.css';
import { FiCornerDownLeft, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class NovaReceita extends Component {
    render() {
        return (
            <div className="componentNovaRec">
                 {/* Criação de Container para Titulo e Botões */}
                <div className="containerHeaderNovaRec">
                    <label>Receita</label>
    
                    {/* Criação de Container para Botões */}
                    <div className="containerBotaoHeaderNovaRec">
                        <Link to='/receita'>
                            <FiCornerDownLeft className="botaoHeaderNovaRec"/>
                        </Link>
                    </div>
                </div>

                {/* Criação Container de Entrada de Dados */}
                <div class="containerInfoNovaRec">
                    <div class="formNovaRec">
                        <label for="inputNome">Nome:</label>
                        <input type="text" id="inputNome" autocomplete="off"/>
    
                        <label for="inputPreparo">Tempo de Preparo:</label>
                        <input type="time" id="inputPreparo" autocomplete="off"/>
    
                        <label for="inputTipo">Tipo de Receita:</label>
                        <select name="tipoReceita" id="tipoReceita" class="selectNovaRec">
                            <option value="">Selecione</option>
                            <option value="Vegetariano">Vegetariano</option>
                            <option value="Vegano">Vegano</option>
                            <option value="Ovolactovegetariano">Ovolactovegetariano</option>
                        </select>
    
                        <label for="inputData">Data de Inclusão:</label>
                        <input type="date" id="inputData" autocomplete="off"/>
    
                        <div className="ingredientesNovaRec">
                            <label for="inputIngredientes">Ingredientes:</label>
                            <FiPlus className="iconIngredientesNovaRec"/>
                        </div>                    
    
                        <label for="preparo">Modo de Preparo:</label>
                        <textarea name="textComment" id="txtComment" cols="30" rows="10"/>
                    </div>
    
                    <div class="containerBotaoNovaRec">
                        <Link to='./receita' className="botaoNovaRec linkNovaRec primarioNovaRec">Inserir</Link>
                        <Link to='./receita' className="botaoNovaRec linkNovaRec quartenarioNovaRec">Cancelar</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NovaReceita;