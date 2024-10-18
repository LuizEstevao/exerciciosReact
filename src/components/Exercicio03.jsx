function Autenticacao(props) {
  const isAutenticado = props.autenticada;

  function Logado() {
    return <h1>Bem-vindo, usuário!</h1>;
  }

  function Deslogado() {
    return null;
  }

  function Verificar() {
    if (isAutenticado === true) {
      return <Logado />;
    }
    return <Deslogado />;
  }

  return (
    <>
      <p id="exercicio">Exercicio 03</p>
      <div className="fundo">
        <Verificar />
      </div>
    </>
  );
}

export default Autenticacao
