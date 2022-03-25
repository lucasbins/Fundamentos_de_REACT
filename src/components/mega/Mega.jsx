import React, {useState} from 'react';
import './Mega.css';

function Mega( props ) {
  const [ qtde, setQtde] = useState( props.qtde || 6) 
  const numerosIniciais= Array(qtde).fill(0)
  const [ numeros , setNumeros] = useState([numerosIniciais])

  function geraNumero() {
    return Math.floor(Math.random() * ( 60 - 1) + 1 );
  }

  function geraMega ( qtde ){
    const listNum = []
    do{
      let num = geraNumero();
      if(listNum.length === 0){
        listNum.push(num);
      }else if (listNum.indexOf(num) === -1){
        listNum.push(num);
      }else{
        num = geraNumero();
      }  
    }while(listNum.length !== qtde)

    listNum.sort(function(a, b) {
      return a - b;
    });
  
    setNumeros(listNum);
  };

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de Numeros: </label>
        <input 
          min="6"
          max="15"
          type="number" 
          value={qtde}
          onChange={e => {
            setQtde(+e.target.value)
            geraMega(+e.target.value)}} />
      </div>
      <button onClick={_ => geraMega(qtde)}>Gerar Mega</button>
    </div>
  )
}

export default Mega;