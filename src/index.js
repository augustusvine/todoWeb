import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// index o arquivo principal que vai ser chamdo quando solicitar API
// denttro do index havera taskroutes. onde havera o dia mes ano semana
// dentro do task routes, vai ter a funcao que sera o task controller
// assim o task controller ira solicitar o taskmodel onde é conectado com o banco de dados 
// o taskmodel vai no banco de dados solicita as informacoes e devolve para o taskcontroller
// onde o task controller devolve inforcao para usuario 

//-------------------------------------------------------------------------------------------//

// * useEffect ele é uma funcao do react que sera executada antes da tela aparecer para usuario
// toda vez que a tela é carregada, antes do usuario conseguir ver os elemntos visuais
// e é no useEffect que o sera criada a funcao para poder carregada as tarefas
// ele vai la na API solicita pra API devolve as tarefas que estao no banco de dados, devolve pra tela e mostra as cadastradas

//----------------------------------------------------------------------------------------------//


