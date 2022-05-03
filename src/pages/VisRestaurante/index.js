import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import './VisRestaurante.css';

class VisRestaurante extends Component {
    render() {
        return (
            <div className="componentVisRest">
                {/* Criação de Container para Titulo e Botões */}
                <div className="containerHeaderVisRest">
                    <label>Visualizar Restaurante</label>
    
                    {/* Criação de Container para Botões */}
                    <div className="containerBotaoHeaderVisRest">
                        <Link to='/Restaurante'>
                            <FiCornerDownLeft className="botaoHeaderVisRest"/>
                        </Link>
                    </div>
                </div>

                {/* Criação de Container de Informações */}
                <div class="containerInfoVisRest">
                    <div class="formVisRest">
                        <label for="nome">Nome do Restaurante: Restaurante A</label>
                        <label for="endereco">Endereço: Rua A, 123 - Cidade A</label>
                        <label for="nome">Tipo de Restaurante: Vegano</label>
                        <label for="nome">Data de Visita: 26/06/2022</label>
                        <label for="nome">Telefone: (12) 34567-8901</label>
                        <label for="comment">Comentarios:</label>
                        <textarea name="textComment" id="txtComment" cols="30" rows="10"></textarea>
                    </div>
    
                    <div class="containerBotaoVisRest">
                        <Link to='./restaurante' className="botaoVisRest linkVisRest primarioVisRest">Visitado</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisRestaurante;