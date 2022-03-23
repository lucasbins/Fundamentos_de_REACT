import React from 'react';
import If from './If';

// import { Container } from './styles';

function UsuarioInfo(props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo Usuario <strong>{props.usuario.nome}</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo Usuario <strong>Amigao</strong>!
      </If>
      
    </div>
  );
}

export default UsuarioInfo;