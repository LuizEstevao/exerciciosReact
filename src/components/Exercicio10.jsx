function Login(props) {
  const { logado } = props;

  function Entrar() {
    return <button id="botaoEntrar" type="submit">Entrar</button>;
  }

  function Sair() {
    return <button id="botaoSair" type="submit">Sair</button>;
  }

  return (
    <>
      <p id="exercicio">Exercicio 10</p>
      <div>
        {logado ? <Sair /> : <Entrar />}
      </div>
    </>
  );
}

export default Login;



// Crie um componente que receba uma prop chamada logado. Se for true, renderize um botão "Sair". Se for false, renderize um botão "Entrar". 