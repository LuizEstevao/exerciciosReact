import React from "react";
import { useNavigate } from "react-router-dom";
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

function Todos() {
  const navigate = useNavigate(); // Hook para navegação

  // Função para redirecionar para a tela inicial
  const voltarParaInicio = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div>
      <h1>Todos os Exercícios</h1>
      <div>
        <Saudacao />
      </div>
      <div>
        <MeuNome
          nome="Luiz"
          containerStyle={{
            backgroundImage:
              "linear-gradient(to right top, #ffff00, #ffee00, #ffdc00, #ffcc00, #ffbb00, #ffab00, #ff9b00, #ff8b00, #ff7600, #ff5f00, #ff4100, #ff0000)",
          }}
        />
      </div>
      <div>
        <Autenticacao autenticada={true} />
      </div>
      <div>
        <Maioridade
          idadeVerificada={18}
          containerStyle={{
            backgroundImage:
              "linear-gradient(to right, #00ff00, #00f0a9, #00d6ff, #00b4ff, #0087ff, #6970f8, #9e4fe4, #c500c3, #ec009b, #ff006f, #ff0041, #ff0000)",
          }}
        />
      </div>
      <div>
        <VerificarEstudante estudanteOuNao={true} />
      </div>
      <div>
        <Resultado
          notaVerificada={60}
          containerStyle={{
            backgroundImage:
              "linear-gradient(to left top, #ff00ff, #da07e9, #b609d2, #9407bb, #7404a3, #6c039f, #64029a, #5c0196, #6902a5, #7702b4, #8501c4, #9400d3)",
          }}
        />
      </div>
      <div>
        <VerificarDesconto temDesconto={true} />
      </div>
      <div>
        <Usuario
          online={true}
          containerStyle={{
            backgroundImage:
              "radial-gradient(circle, #ff0000, #ff3312, #ff4a21, #ff5c2f, #ff6c3d, #f4693c, #ea653c, #df623b, #c74d2c, #af371e, #972010, #800000)",
          }}
        />
      </div>
      <div>
        <NivelEx nivel="avançado" />
      </div>
      <div>
        <Login logado={true} />
      </div>
      <button onClick={voltarParaInicio} id="voltar">
        Voltar para a Tela Inicial
      </button>
    </div>
  );
}

export default Todos;



/*

Explicação dos componentes


Saudacao
Renderiza uma mensagem de boas-vindas.

MeuNome
Recebe uma prop nome e exibe uma saudação personalizada. O estilo do fundo pode ser alterado pela prop containerStyle.

Autenticacao
Verifica se o usuário está autenticado e exibe uma mensagem apropriada.

Maioridade
Verifica se a idade fornecida é maior ou igual a 18 para determinar se o usuário é adulto.

VerificarEstudante
Verifica se o usuário é um estudante, exibindo mensagens diferentes para cada caso.

Resultado
Compara a nota fornecida com intervalos para exibir "Excelente", "Bom" ou "Precisa melhorar".

VerificarDesconto
Usa um operador ternário para verificar se um desconto deve ser aplicado.

Usuario
Verifica se o usuário está online, exibindo o estado correspondente.

NivelEx
Exibe uma mensagem com base no nível do usuário (iniciante, intermediário ou avançado).

Login
Renderiza botões "Entrar" ou "Sair" dependendo do estado de autenticação do usuário. 
*/
