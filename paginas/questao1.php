<header class="masthead bg-primary text-white text-center">
  <div class="container d-flex align-items-center flex-column">
      <h1 class="masthead-heading mb-0">Questão – 1</h1>
      <p class="mt-3">Faça um programa que receba o nome do aluno, duas notas e o nome de uma disciplina, calcule e mostre o resultado com a média e sua situação do aluno(<= 3 = Reprovado, > 3 e < 7 = Recuperação, >= 7 = Aprovado).</p>
      <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-arrow-down"></i></div>
          <div class="divider-custom-line"></div>
      </div>
      <div class="container d-flex align-items-center flex-column">
        <div class="col-12 col-md-6">
          <form action="" class="form questao1">
            <div class="form-group text-left">
              <label for="nome">Nome do aluno:</label>
              <input type="text" class="form-control" name="nome" plasceholder="Informe o nome do aluno" required>
            </div>
            <div class="form-group text-left">
              <label for="disciplina">Disciplina:</label>
              <input type="text" class="form-control" name="disciplina" plasceholder="Informe a disciplina" required>
            </div>
            <div class="form-group text-left">
              <label for="nota1">Nota 1:</label>
              <input type="number" step="0.01" class="form-control" name="nota1" plasceholder="Informe a nota 1" required>
            </div>
            <div class="form-group text-left">
              <label for="nota2">Nota 2:</label>
              <input type="number" step="0.01" class="form-control" name="nota2" plasceholder="Informe a nota 2" required>
            </div>
            <div class="form-group text-center">
              <button class="btn btn-success btn-block">Mostrar Resultado</button>
            </div>
          </form>
        </div>
      </div>
  </div>
</header>
<!-- Resultado -->
<div class="portfolio-modal modal fade" id="modalResultado" tabindex="-1" role="dialog" aria-labelledby="#modalResultadoLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
          <div class="modal-body text-center">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <h2 class="portfolio-modal-title text-secondary mb-0">Resultado</h2>
                          <div class="divider-custom">
                              <div class="divider-custom-line"></div>
                              <div class="divider-custom-icon"><i class="fas fa-arrow-down"></i></div>
                              <div class="divider-custom-line"></div>
                          </div>
                          <p class="mb-5 resultado text-break"></p>
                          <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Fechar</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>