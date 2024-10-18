function MeuNome(props) {
  return (
    <>
      <p id="exercicio">Exercicio 02</p>
      <div className="fundo" style={props.containerStyle}>
        <h3>Olá {props.nome}, bem vindo!!</h3>
      </div>
    </>
  );
}

export default MeuNome;
