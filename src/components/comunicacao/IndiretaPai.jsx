import React, { useState } from 'react';

import IndiretaFilho from './IndiretaFilho';

function IndiretaPai(props) {
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [ nerd, setNerd] = useState(false)

  function fornecerInformacoes(name , age, nerd){
    setName(name)
    setAge(age)
    setNerd(nerd)
  }

  return <div>
    <div>Pai</div>
    <span>{name} </span>
    <span><strong>{age} </strong></span>
    <span>{nerd ? 'Eh Nerd' : 'N eh Nerd'}</span>
    <IndiretaFilho quandoClicar={fornecerInformacoes}/>
  </div>;
}

export default IndiretaPai;