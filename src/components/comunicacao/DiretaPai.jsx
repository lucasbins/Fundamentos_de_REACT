import React from 'react';

import DiretaFilho from './DiretaFilho';

function DiretaPai(props) {
  return <div>
    <DiretaFilho nome="junior" idade={20} nerd={true}></DiretaFilho>
    <DiretaFilho nome="neto" idade={18} nerd={false}></DiretaFilho>
    
  </div>;
}

export default DiretaPai;