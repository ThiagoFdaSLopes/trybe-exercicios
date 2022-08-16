import React from "react";

class Content extends React.Component {
    conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composicao de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composicao de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ];

      renderConteudos = (arr) => arr.map((element) => <div>{ `O conteúdo é: ${element.conteudo}\n
      Status: ${ element.status }\n
      Bloco: ${element.bloco }` }</div>)
    render() {
        return (
            <div>
                <ol>
                    { this.renderConteudos(this.conteudos) }
                </ol>
            </div>
        );
    }
}

export default Content;