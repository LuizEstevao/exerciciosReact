import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaInicial() {
  // Estado para armazenar o número do exercício escolhido pelo usuário
  const [exerciseNumber, setExerciseNumber] = useState(1);
  // Estado para armazenar uma mensagem de erro caso o número do exercício seja inválido
  const [errorMessage, setErrorMessage] = useState('');
  // Hook do react-router-dom para navegar entre as rotas
  const navigate = useNavigate();

  // Função chamada ao clicar no botão para escolher o exercício
  const handleChooseExercise = () => {
    // Verifica se o número do exercício está entre 1 e 10
    if (exerciseNumber >= 1 && exerciseNumber <= 10) {
      // Se estiver no intervalo válido, navega para a página do exercício específico
      navigate(`/exercicio/${exerciseNumber}`);
      // Limpa a mensagem de erro, caso tenha sido exibida anteriormente
      setErrorMessage('');
    } else {
      // Se o número for inválido, exibe uma mensagem de erro
      setErrorMessage('Por favor, selecione um exercício válido.');
    }
  };

  return (
    <div id="pagInicial">
      {/* Título da página inicial */}
      <div id='tituloInicial'>
        <h1>Bem-vindo!!!</h1>
        <h2>Aos exercícios feitos por mim, DevZiul</h2>
      </div>
      {/* Orientação para o usuário escolher entre ver todos os exercícios ou um específico */}
      <h5>
        Escolha entre ver todos os exercícios de uma vez, <br />
        ou escolher um exercício específico
      </h5>

      {/* Botão para navegar para a página com todos os exercícios */}
      <button className='todosOsExercicios' onClick={() => navigate('./Todos')}>
        Ver Todos os Exercícios
      </button>
      <br /><br />

      {/* Campo para escolher o número do exercício */}
      <label>
        Escolha o número do exercício:
        <input
          type="number"
          value={exerciseNumber}
          onChange={(e) => setExerciseNumber(Number(e.target.value))} // Atualiza o estado com o valor digitado
          min="1" max="10" // Limita o valor mínimo e máximo do campo de entrada
          className='escolhaDoExercicio'
        />
      </label>

      {/* Botão para exibir o exercício selecionado */}
      <button className="exibirExercicioSelecionado" onClick={handleChooseExercise}>
        Exibir Exercício
      </button>
      
      {/* Exibe uma mensagem de erro se o número do exercício for inválido */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default TelaInicial;
