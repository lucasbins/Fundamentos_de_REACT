import React, { useState } from 'react';

function Input( props ) {
  const [ valor, setValor] = useState('inicial')

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={valor} onChange={ e => {setValor(e.target.value)}}/>
        <input value={valor} readOnly />
        <input value={undefined} />        
      </div>
    </div>
  )
}

export default Input;