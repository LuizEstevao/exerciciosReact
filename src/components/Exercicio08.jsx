function Usuario(props) {
  const estadoUsuario = props.online;

  function UsuarioOn() {
    return <h1>Usuario online!</h1>;
  }

  function UsuarioOff() {
    return <h1>Usuario Offline!</h1>;
  }

  return (
    <>
      <p id="exercicio">Exercicio 08</p>
      <div className="fundo" style={props.containerStyle}>
        {estadoUsuario === true ? <UsuarioOn /> : <UsuarioOff />}
      </div>
    </>
  );
}

export default Usuario;


// Crie um componente que receba uma prop chamada online. Use o operador ternário para renderizar "Usuário online" se for true, e "Usuário offline" se for false. 