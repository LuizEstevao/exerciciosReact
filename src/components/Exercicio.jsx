import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Saudacao from "./Exercicio01";
import MeuNome from "./Exercicio02";
import Autenticacao from "./Exercicio03";
import Maioridade from "./Exercicio04";
import VerificarEstudante from "./Exercicio05";
import Resultado from "./Exercicio06";
import VerificarDesconto from "./Exercicio07";
import Usuario from "./Exercicio08";
import NivelEx from "./Exercicio09";
import Login from "./Exercicio10";

function Exercicio() {
  const { numero } = useParams(); // Obtém o número do exercício da URL
  const [exerciseNumber, setExerciseNumber] = useState(Number(numero));
  const navigate = useNavigate(); // Hook para redirecionamento

  // Atualiza o estado toda vez que o número na URL muda
  useEffect(() => {
    const num = Number(numero);
    if (!isNaN(num) && num > 0 && num <= 10) {
      setExerciseNumber(num); // Define o número do exercício no estado
    } else {
      setExerciseNumber(-1); // Define -1 caso o número não seja válido
    }
  }, [numero]);

  // Função para voltar para a página inicial
  const voltarParaInicio = () => {
    navigate("/"); // Navega para a página inicial
  };

  // Renderiza o componente de acordo com o número do exercício
  const renderExercise = () => {
    switch (exerciseNumber) {
      case 1:
        return <Saudacao />;
      case 2:
        return (
          <MeuNome
            nome="Luiz"
            containerStyle={{
              backgroundImage:
                "linear-gradient(to right top, #ffff00, #ffee00, #ffdc00, #ffcc00, #ffbb00, #ffab00, #ff9b00, #ff8b00, #ff7600, #ff5f00, #ff4100, #ff0000)",
            }}
          />
        );
      case 3:
        return <Autenticacao autenticada={true} />;
      case 4:
        return (
          <Maioridade
            idadeVerificada={18}
            containerStyle={{
              backgroundImage:
                "linear-gradient(to right, #00ff00, #00f0a9, #00d6ff, #00b4ff, #0087ff, #6970f8, #9e4fe4, #c500c3, #ec009b, #ff006f, #ff0041, #ff0000)",
            }}
          />
        );
      case 5:
        return <VerificarEstudante estudanteOuNao={true} />;
      case 6:
        return (
          <Resultado
            notaVerificada={60}
            containerStyle={{
              backgroundImage:
                "linear-gradient(to left top, #ff00ff, #da07e9, #b609d2, #9407bb, #7404a3, #6c039f, #64029a, #5c0196, #6902a5, #7702b4, #8501c4, #9400d3)",
            }}
          />
        );
      case 7:
        return <VerificarDesconto temDesconto={true} />;
      case 8:
        return (
          <Usuario
            online={true}
            containerStyle={{
              backgroundImage:
                "radial-gradient(circle, #ff0000, #ff3312, #ff4a21, #ff5c2f, #ff6c3d, #f4693c, #ea653c, #df623b, #c74d2c, #af371e, #972010, #800000)",
            }}
          />
        );
      case 9:
        return <NivelEx nivel="avançado" />;
      case 10:
        return <Login logado={true} />;
      default:
        return (
          <h2>Exercício não encontrado. Por favor, verifique o número.</h2>
        );
    }
  };

  return (
    <div>
      <h1>Exercício {exerciseNumber}</h1>
      {renderExercise()} {/* Renderiza o componente do exercício */}
      {/* Botão para voltar à tela inicial */}
      <button onClick={voltarParaInicio} id="voltar">
        Voltar para a Tela Inicial
      </button>
    </div>
  );
}

export default Exercicio;
