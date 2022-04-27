import React from "react";
import './Receita.css';
import { Link } from "react-router-dom";
//Importação de Icones da biblioteca React-Icons
import { FiCornerDownLeft, FiPlusCircle } from 'react-icons/fi'

function Receita() {
    return (
        <div className="componentReceita">
            {/* Criação de Container para Titulo e Botões */}
            <div className="containerHeaderReceita">
                <label>Receita</label>

                {/* Criação de Container para Botões */}
                <div className="containerBotaoHeaderReceita">
                    <Link to='/incluirRec'>
                        <FiPlusCircle className="botaoHeaderReceita"/>
                    </Link>

                    <Link to='/home'>
                        <FiCornerDownLeft className="botaoHeaderReceita"/>
                    </Link>
                </div>
            </div>

            {/* Criação de Container para Card de Receitas */}
            <div class="containerCardReceita">
                <div class="cardReceita">
                    <div class="tituloCardReceita">
                        <label>Receita A</label>
                    </div>
                        
                    <div class="infoCardReceita">
                        <label for="ruaCard">Rua A, 123</label>
                        <label for="cidadeCard">Cidade A</label>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Receita;