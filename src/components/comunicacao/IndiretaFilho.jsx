import React from 'react';

function IndiretaFilho(props) {
  const callBack = props.quandoClicar
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5

  return <div>
    <div>Filho</div>
    <button onClick={ _ => callBack('joao',gerarIdade(), gerarNerd())}>
      fornecer informacoes
    </button>
    
  </div>;
}

export default IndiretaFilho;