// Função para realizar a operação de soma ou subtração de uma fração a um valor em dias, meses e anos
function calcularResultado() {
    // Obter valores do formulário
    const anosInicial = parseFloat(document.getElementById("anos").value);
    const mesesInicial = parseFloat(document.getElementById("meses").value);
    const diasInicial = parseInt(document.getElementById("dias").value);
  
    const numerador = parseInt(document.getElementById("numerador").value);
    const denominador = parseInt(document.getElementById("denominador").value);
  
    const operacao = document.querySelector('input[name="operacao"]:checked').value;


  
    if (operacao === "soma") {
      const anosMeio = anosInicial / denominador * numerador;
      const mesesMeio = mesesInicial / denominador * numerador;
      const diasMeio = diasInicial / denominador * numerador;
        
      anosTotal = anosInicial + anosMeio;
      mesesTotal = mesesInicial + mesesMeio;
      diasTotal = diasInicial + diasMeio;

    } else if (operacao === "subtracao") {
      const anosMeio = anosInicial / denominador * numerador;
      const mesesMeio = mesesInicial / denominador * numerador;
      const diasMeio = diasInicial / denominador * numerador;
        
      anosTotal = anosInicial - anosMeio;
      mesesTotal = mesesInicial - mesesMeio;
      diasTotal = diasInicial - diasMeio;
      
    }
  
    // Obter valores quebrados das operações

    // const anosResto = anosTotal % 1;
    // const mesesResto = mesesTotal % 1;

    // Converter anos e meses quebrados em meses e dias

    // const mesesExtra =  anosResto * 12;
    // const diasExtra = mesesResto * 30;
  
    // Exibir o resultado detalhado
    let resultadoDetalhado = "";
    if (anosTotal > 0) {
      resultadoDetalhado += anosTotal + " ano(s), ";
    }
    if (mesesTotal > 0) {
      resultadoDetalhado += mesesTotal + " mês(es), ";
    }
    if (diasTotal > 0) {
    resultadoDetalhado += diasTotal + " dia(s)";
    }
  
    document.getElementById("resultado").textContent = resultadoDetalhado;
  
    // Impedir o envio do formulário
    return false;
  }
  