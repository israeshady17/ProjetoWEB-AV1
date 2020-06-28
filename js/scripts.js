(function($) {
  "use strict"; // Start of use strict

  // Questão - 1
  if($(".questao1").length) {
    $(".questao1").on("submit", function(e){
      e.preventDefault();
      
      var nome = $("input[name='nome']").val();
      var disciplina = $("input[name='disciplina']").val();
      var nota1 = parseFloat($("input[name='nota1']").val());
      var nota2 = parseFloat($("input[name='nota2']").val());
      var media = parseFloat((nota1 + nota2) / 2);
      var situacao;

      if (media <= 3) {
        situacao = "<span class='text-danger'>Reprovado</span>";
      } else if (media > 3 && media < 7) {
        situacao = "<span class='text-warning'>Recuperação</span>";
      } else {
        situacao = "<span class='text-success'>Aprovado</span>";
      }

      $("#modalResultado .resultado").html(`<div class="text-left"><strong>Nome:</strong> ${nome}<br /><strong>Disciplina:</strong> ${disciplina}<br /><strong>Nota I:</strong> ${nota1}<br /><strong>Nota II:</strong> ${nota2}<br /><br /><strong>Resultado:</strong><br />
      <strong>${nome}</strong>, Você foi <strong>${situacao}</strong> na disciplina <strong>${disciplina}</strong> com Média <strong>${media.toFixed(2)}</strong>.</div>`);

      $('#modalResultado').modal('show');

      return false;
    });
  }

  // Questão - 2
  if($(".questao2").length) {
    $(".questao2").on("submit", function(e){
      e.preventDefault();

      var nome = $("input[name='nome']").val();
      var produto = $("input[name='produto']").val();
      var valor = parseFloat($("input[name='valor']").val());
      var quantidade = parseFloat($("input[name='quantidade']").val());
      var parcelas = parseInt($("input[name='parcelas']").val());
      var valorTotal = valor + quantidade;
      var resultado = [];

      if(parcelas === 3) {
        valorTotal = valor + (valor * 5 / 100);
      } else if (parcelas === 6) {
        valorTotal = valor + (valor * 12 / 100);
      }

      var valorParcelado = valorTotal / parcelas;

      for(var i = 1; i <= parcelas; i++) {
        resultado.push(`<div class="text-left w-100"><hr /><div class="text-center w-100"><strong>LOJA DE ELETRODOMÉSTICOS</strong></div><br><strong>CLIENTE:</strong> ${nome}<br><strong>PRODUTO:</strong> ${produto}<br><strong>VALOR:</strong> R$ ${valorParcelado.toFixed(2)}          PARCELA 0${i}/0${parcelas}</div>
        `);
      }

      $("#modalResultado .resultado").html(resultado.toString());

      $('#modalResultado').modal('show');

      return false;
    });
  }

  // Questão - 3
  if($(".questao3").length) {
    $(".questao3").on("submit", function(e){
      e.preventDefault();

      var nome = $("input[name='nome']").val();
      var salario = parseFloat($("input[name='salario']").val());
      var cargo = $("select[name='cargo']").val();
      var aumento;

      switch (cargo.toLowerCase()) {
        case "atendente":
          aumento = 8;
          break;
        case "estoquista":
          aumento = 6;
          break;
        case "gerente":
          aumento = 3;
          break;
        default:
          aumento = "Cargo informado não existe";
          break;
      }

      var novoSalario = salario + (salario * aumento / 100);
      var inss, salarioLiquido;

      if (novoSalario <= 1045 ) {
        inss = `${(novoSalario - (novoSalario - (novoSalario * 7.5 / 100))).toFixed(2)}  (7,50 %)`;
        salarioLiquido = novoSalario - (novoSalario * 7.5 / 100);
      } else if (novoSalario > 1045 && novoSalario <= 2089.60) {
        inss = `${(novoSalario - (novoSalario - (novoSalario * 9 / 100))).toFixed(2)}  (9 %)` ;
        salarioLiquido = novoSalario - (novoSalario * 9 / 100);
      } else {
        inss = `${(novoSalario - (novoSalario - (novoSalario * 12 / 100))).toFixed(2)}  (12 %)` ;
        salarioLiquido = novoSalario - (novoSalario * 12 / 100);
      }

      $("#modalResultado .resultado").html(`<div class="text-left"><hr><div class="text-center"><strong>CONTRA CHEQUE</strong></div><strong>FUNCIONÁRIO:</strong> ${nome}<br /><strong>CARGO:</strong> ${cargo}<br /><br /><strong>SALÁRIO ATUAL:</strong> R$ ${salario.toFixed(2)}<br /><strong>NOVO SALÁRIO:</strong> R$ ${salario.toFixed(2)} + ${aumento}% = R$ ${novoSalario.toFixed(2)}<br /><strong>DESCONTO INSS:</strong> R$ ${inss}<br /><br /><strong>SALÁRIO LÍQUIDO:</strong> R$ ${salarioLiquido.toFixed(2)}<br /><hr></div>`);

      $('#modalResultado').modal('show');

      return false;
    });
  }

  // Questão - 4
  if($(".questao4").length) {
    $(".questao4").on("submit", function(e){
      e.preventDefault();

      var nome = $("input[name='nome']").val();
      var peso = parseFloat($("input[name='peso']").val());
      var altura = parseFloat($("input[name='altura']").val());
      var imc = peso / (altura * altura);
      var nivel, problemas;

      if(imc < 18.5) {
        nivel = `Baixo peso`;
        problemas = `Peso baixo para a altura. Maior probabilidade de anorexia.`;
      } else if(imc >= 18.5 && imc < 24.9) {
        nivel = `Peso normal`;
        problemas = `Maior probabilidade de ser um indivíduo saldável.`;
      } else if(imc >= 25 && imc < 29.9) {
        nivel = `Pré-obesidade`;
        problemas = `Alguma probabilidade de problemas de saúde. Predisposição a tornar-se obeso.`;
      } else if(imc >= 30 && imc < 34.9) {
        nivel = `Obesidade Grau I`;
        problemas = `Risco moderado de deiabetes tipo II, hipertensão, colesterol, cardiopatia.`;
      } else if (imc >= 35 && imc < 39.9) {
        nivel = `Obesidade Grau II`;
        problemas = `Risco Grave. Aumenta o risco das doenças associadas. O risco de mortalidade aumenta 50%.`;
      } else if (imc > 40) {
        nivel = `Obesidade Grau I ou Obesidade mórbida`;
        problemas = `Risco Muito Grave. O risco de doenãs associadas assim como a mortalidade aumenta 90%.`;
      }

      $("#modalResultado .resultado").html(`<div class="text-left"><hr><div class="text-center"><strong>RESULTADO - IMC</strong></div>
      <strong>PACIENTE:</strong> ${nome}<br />
      <strong>PESO:</strong> ${peso} Kg<br />
      <strong>ALTURA:</strong> ${altura}<br />
      <strong>IMC:</strong> ${imc.toFixed(2)}<br /><br />
      Olá <strong>${nome}</strong>, você está no nível de obesidade: <strong>${nivel}</strong>. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: <strong>${problemas}</strong><hr></div>`);

      $('#modalResultado').modal('show');

      return false;
    });
  }

})(jQuery); // End of use strict
  