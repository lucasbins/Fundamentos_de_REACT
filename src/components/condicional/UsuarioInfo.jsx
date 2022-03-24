import React from 'react';
import If, { Else } from './If';

// import { Container } from './styles';

function UsuarioInfo(props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo Usuario <strong>{props.usuario.nome}</strong>!
        <Else>
          Seja bem vindo <strong>Amigao</strong>!
        </Else>
      </If>
      
    </div>
  );
}

export default UsuarioInfo;