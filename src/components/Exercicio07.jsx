function VerificarDesconto(props) {
  const isDesconto = props.temDesconto;

  function DescontoSim() {
    return <h1>Desconto Aplicado</h1>;
  }

  function Descontonao() {
    return <h1>Sem Desconto</h1>;
  }

  return (
    <>
      <p id="exercicio">Exercicio 07</p>
      <div className="fundo">
        {isDesconto ? <DescontoSim /> : <Descontonao />}
      </div>
    </>
  );
}

export default VerificarDesconto;


// Crie um componente que receba uma prop chamada temDesconto. Usando o operador ternário, renderize "Desconto Aplicado" se temDesconto for true, e "Sem Desconto" se for false.
