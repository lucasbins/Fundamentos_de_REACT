import React from "react"

import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import MembroFamilia from "./components/basicos/MembroFamilia"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"

export default function App(props) {

    const color = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <div className="App">
            <h1>Fundamentos de REACT</h1>

            <div className="Cards">
                <Card title="#08 - Rederizacao Condicional" color={color()}>
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{ nome: "Lucas"}}/>
                    <UsuarioInfo usuario={{ email: "lu@cas.com"}}/>
                    <UsuarioInfo usuario={{ }}/>
                </Card>

                <Card title="#07 - Repeticao(Desafio)" color={color()}>
                    <TabelaProdutos />
                </Card>

                <Card title="#06 - Repeticao" color={color()}>
                    <ListaAlunos />
                </Card>

                <Card title="#05 - Componente com Filho" color={color()}>
                    <Familia sobrenome="Braga" >
                        <MembroFamilia nome="Lucas" />
                        <MembroFamilia nome="Laura" />
                        <MembroFamilia nome="Marcia" />
                    </Familia>
                </Card>

                <Card title="#04 - Aleatorio" color={color()}>
                    <Aleatorio max={100} min={0} />
                </Card>

                <Card title="#03 - Fragmento" color={color()}>
                    <Fragmento />
                </Card>

                <Card title="#02 - Com Parametro" color={color()}>
                    <ComParametro
                        title="Situacao do Aluno"
                        aluno="Lucas"
                        nota={9.3}
                    />
                </Card>

                <Card title="#01 - Primeiro" color={color()}>
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}


