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

    // Exibir o resultado detalhado
    let resultadoDetalhado = "";
    resultadoDetalhado += Math.floor(anosFinal) + " ano(s), " + Math.floor(mesesFinal) + " mês(es), " + Math.floor(diasFinal) + " dia(s)";
  
    document.getElementById("resultado").textContent = resultadoDetalhado;
  
    // Impedir o envio do formulário
    return false;
  }
  