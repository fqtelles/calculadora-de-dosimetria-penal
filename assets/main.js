// Função para realizar a operação de soma ou subtração de uma fração a um valor em dias, meses e anos
function calcularResultado() {
    // Obter valores do formulário
    const anosInicial = parseFloat(document.getElementById("anos").value);
    const mesesInicial = parseFloat(document.getElementById("meses").value);
    const diasInicial = parseInt(document.getElementById("dias").value);
  
    const numerador = parseInt(document.getElementById("numerador").value);
    const denominador = parseInt(document.getElementById("denominador").value);
  
    const operacao = document.querySelector('input[name="operacao"]:checked').value;

// implementar aqui como lidar com valor de meses > 12 e dias > 30
  
    if (operacao === "soma") {
      const anosMeio = anosInicial / denominador * numerador;
      const mesesMeio = mesesInicial / denominador * numerador;
      const diasMeio = diasInicial / denominador * numerador;
        
      var anosTotal = anosInicial + anosMeio;
      var mesesTotal = mesesInicial + mesesMeio;
      var diasTotal = diasInicial + diasMeio;

    } else if (operacao === "subtracao") {
      const anosMeio = anosInicial / denominador * numerador;
      const mesesMeio = mesesInicial / denominador * numerador;
      const diasMeio = diasInicial / denominador * numerador;
        
      var anosTotal = anosInicial - anosMeio;
      var mesesTotal = mesesInicial - mesesMeio;
      var diasTotal = diasInicial - diasMeio;
      
    }

    // Obter valores quebrados das operações

    var anosResto = anosTotal % 1;
    var mesesResto = mesesTotal % 1;

    // Converter anos e meses quebrados em meses e dias

    var mesesExtra =  anosResto * 12;
    var diasExtra = mesesResto * 30;

    var anosFinal = Math.floor(anosTotal);
    var mesesFinal = mesesTotal + mesesExtra;
    var diasFinal = diasTotal + diasExtra;

    // Converter resultados maiores que 12 meses em ano
    if (mesesFinal > 11) {
      anosFinal++;
      var mesesFinalFinal = mesesFinal % 12;
    }

    // Converter resultados maiores que 30 dias em mês
    if (diasFinal > 29) {
      mesesFinal++;
      var diasFinalFinal = diasFinal % 30;
    }

    // Converter mes > 11 && dia > 29
    // if (diasFinal > 29 && mesesFinal > 11) {
    //   mesesFinal++;
    //   anosFinal++;
    //   var diasFinalFinal = diasFinal % 30;
    //   var mesesFinalFinal = mesesFinal % 12;
    // }


    // Exibir o resultado detalhado
    let resultadoDetalhado = "";

    // o Resultado depende do uso da variável FinalFinal ou não
    if (typeof mesesFinalFinal === 'undefined' && diasFinalFinal === 'undefined') {
      resultadoDetalhado += Math.floor(anosFinal) + " ano(s), " + Math.floor(mesesFinal) + " mês(es), " + Math.floor(diasFinal) + " dia(s)";
    }
    
    else if (typeof mesesFinalFinal === 'undefined'){
      resultadoDetalhado += Math.floor(anosFinal) + " ano(s), " + Math.floor(mesesFinal) + " mês(es), " + Math.floor(diasFinalFinal) + " dia(s)";
    }

    else if (typeof diasFinalFinal === 'undefined'){
      resultadoDetalhado += Math.floor(anosFinal) + " ano(s), " + Math.floor(mesesFinalFinal) + " mês(es), " + Math.floor(diasFinal) + " dia(s)";
    }

    else if (typeof mesesFinalFinal !== 'undefined' && diasFinalFinal !== 'undefined') {
      resultadoDetalhado += Math.floor(anosFinal) + " ano(s), " + Math.floor(mesesFinalFinal) + " mês(es), " + Math.floor(diasFinalFinal) + " dia(s)";
    }

    document.getElementById("resultado").textContent = resultadoDetalhado;
  
    // Impedir o envio do formulário
    return false;
  }
  