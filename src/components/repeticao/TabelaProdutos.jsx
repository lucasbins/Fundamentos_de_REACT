import React from 'react';
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
                    <td>{produto.id} </td>
                    <td>{produto.produto}</td>
                    <td>{produto.preco}</td>
                </tr>
            );
        });
    };

    return (
        <div className="TabelaProdutos">
            <h3>Tabela de Produtos</h3>
            <table>
            <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>

    )
}