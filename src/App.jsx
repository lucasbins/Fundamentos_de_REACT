import React from "react"

import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos de REACT</h1>

            <div className="Cards">
                <Card title="#04 - Aleatorio">
                    <Aleatorio max={100} min={0} />
                </Card>

                <Card title="#03 - Fragmento">
                    <Fragmento />
                </Card>

                <Card title="#02 - Com Parametro">
                    <ComParametro
                        title="Situacao do Aluno"
                        aluno="Lucas"
                        nota={9.3}
                    />
                </Card>

                <Card title="#01 - Primeiro">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}


