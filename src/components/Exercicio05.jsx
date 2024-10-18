function VerificarEstudante(props) {
  const isEstudante = props.estudanteOuNao;

  function Estudante() {
    return <h1>Você é um estudante</h1>;
  }

  function NaoEstudante() {
    return <h1>Você não é um estudante</h1>;
  }

  function VerificacaoEstudante() {
    if (isEstudante === true) {
      return <Estudante />;
    }
    return <NaoEstudante />;
  }

  return (
    <>
      <p id="exercicio">Exercicio 05</p>
      <div className="fundo">
        <VerificacaoEstudante />
      </div>
    </>
  );
}

export default VerificarEstudante
