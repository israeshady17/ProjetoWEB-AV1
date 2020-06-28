<header class="masthead bg-primary text-white text-center">
  <div class="container d-flex align-items-center flex-column">
      <h1 class="masthead-heading mb-0">Questão – 2</h1>
      <p class="mt-3">Faça um programa que possibilite gerar um CARNÊ DE PAGAMENTO para um cliente de uma loja de eletrodomésticos. O programa deve receber o nome do cliente, o (1)produto que ele deseja comprar, valor do produto, quantidade, qtd de parcelas (máximo em 6x). O programa deve gerar a quantidade de carnes de acordo com a quantidade de parcelas. Cada carnê deve conter as seguintes informações:<br /><br />Requisitos de Negócios:<br />Se o pagamento for parcelado em 3 vezes deve ser dado um acréscimo de 5% no total a ser pago. Se o parcelamento for em 6 vezes, o acréscimo será de 12%.</p>
      <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-arrow-down"></i></div>
          <div class="divider-custom-line"></div>
      </div>
      <div class="container d-flex align-items-center flex-column">
        <div class="col-12 col-md-6">
          <form action="" class="form questao2">
            <div class="form-group text-left">
              <label for="nome">Nome do cliente:</label>
              <input type="text" class="form-control" name="nome" plasceholder="Informe o nome do cliente" required>
            </div>
            <div class="form-group text-left">
              <label for="produto">Nome do produto:</label>
              <input type="text" class="form-control" name="produto" plasceholder="Informe o nome do produto" required>
            </div>
            <div class="form-group text-left">
              <label for="valor">Valor do produto:</label>
              <input type="number" step="0.01" class="form-control" name="valor" plasceholder="Informe o valor do produto" required>
            </div>
            <div class="form-group text-left">
              <label for="quantidade">Quantidade:</label>
              <input type="number" step="0.01" class="form-control" name="quantidade" plasceholder="Informe a quantidade do produto" required>
            </div>
            <div class="form-group text-left">
              <label for="parcelas">Quantidade de parcelas:</label>
              <input type="number" class="form-control" name="parcelas" plasceholder="Informe a quantidade de parcelas" max="6" required>
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