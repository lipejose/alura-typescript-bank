System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(negociacoes) {
                    return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>

          ${negociacoes.toArray().map(negociacao => (`<tr>
                        <td>${negociacao.data.getDate()} de ${this.getMonth()[(negociacao.data.getMonth())]}, ${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                        <td>${negociacao.volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>                        
                `)).join('')}

          </tbody>

          <tfoot>
          </tfoot>
      </table>               
      `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
