function Resultado(props) {
  const corretor = props.notaVerificada;
  function Excelente() {
    return <h1>Excelente!!</h1>;
  }

  function Bom() {
    return <h1>Bom!</h1>;
  }
  function Ruim() {
    return <h1>Precisa Melhorar :(</h1>;
  }

  function ResultadoDaNota() {
    if (corretor >= 90) {
      return <Excelente />;
    } else if (corretor >= 70 && corretor <= 89) {
      return <Bom />;
    }
    return <Ruim />;
  }

  return (
    <>
      <p id="exercicio">Exercicio 06</p>
      <div className="fundo" style={props.containerStyle}>
        <ResultadoDaNota />
      </div>
    </>
  );
}

export default Resultado;

// Crie um componente que receba uma prop chamada nota. Se nota for maior ou igual a 90, renderize "Excelente". Se for entre 70 e 89, renderize "Bom". Se for menor que 70, renderize "Precisa melhorar".
