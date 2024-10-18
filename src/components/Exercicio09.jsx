function NivelEx(props) {
  const estadoNivel = props.nivel;

  function Iniciante() {
    return <h1>Bem-vindo, iniciante!</h1>;
  }

  function Intermediario() {
    return <h1>Você está progredindo!</h1>;
  }

  function Avancado() {
    return <h1>Parabéns, especialista!</h1>;
  }

  return (
    <>
      <p id="exercicio">Exercicio 09</p>
      <div className="fundo" style={props.containerStyle}>
        {estadoNivel === "iniciante" ? (
          <Iniciante />
        ) : estadoNivel === "intermediário" ? (
          <Intermediario />
        ) : estadoNivel === "avançado" ? (
          <Avancado />
        ) : (
          <h1>Nível desconhecido</h1> // Mensagem padrão para nível inválido
        )}
      </div>
    </>
  );
}

export default NivelEx;
