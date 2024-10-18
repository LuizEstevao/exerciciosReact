function Maioridade(props) {
 const verificacao = props.idadeVerificada
  function Adulto() {
    return <h1>Você é adulto</h1>;
  }

  function NaoAdulto() {
    return " ";
  }

  function VerificarIdade() {
    if (verificacao >= 18) {
      return <Adulto />;
    }
    return <NaoAdulto />;
  }

  return (
    <>
      <p id="exercicio">Exercicio 04</p>
      <div className="fundo" style={props.containerStyle}>
        <VerificarIdade />
      </div>
    </>
  );
}

export default Maioridade
