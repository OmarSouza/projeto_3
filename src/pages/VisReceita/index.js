import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import './VisReceita.css';

class VisReceita extends Component {
    render() {
        return (
            <div className="componentVisRec">
                {/* Criação de Container para Titulo e Botões */}
                <div className="containerHeaderVisRec">
                    <label>Visualizar Receita</label>
    
                    {/* Criação de Container para Botões */}
                    <div className="containerBotaoHeaderVisRec">
                        <Link to='/receita'>
                            <FiCornerDownLeft className="botaoHeaderVisRec"/>
                        </Link>
                    </div>
                </div>

                {/* Criação de Container de Informações */}
                <div class="containerInfoVisRec">
                    <div class="formVisRec">
                        <label for="inputNome">Nome da Receita: Receita A</label>
    
                        <label for="inputPreparo">Tempo de Preparo: X Minutos</label>
    
                        <label for="inputTipo">Tipo de Receita: Vegetariano</label>
    
                        <label for="inputData">Data de Inclusão: 26/06/200</label>              
    
                        <label for="preparo">Comentarios</label>
                        <textarea name="textComment" id="txtComment" cols="30" rows="10"/>
                    </div>
    
                    <div class="containerBotaoVisRec">
                        <Link to='./receita' className="botaoVisRec linkVisRec primarioVisRec">Realizada</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisReceita;