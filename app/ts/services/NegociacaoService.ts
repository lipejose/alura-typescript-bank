import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<any> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err);
                throw new Error("Opss! Não foi possível estabelecer conexão com o servidor.")
            });

    }
}

export interface ResponseHandler {

  (res: Response): Response
}