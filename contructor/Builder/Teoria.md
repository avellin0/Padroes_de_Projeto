# INTENÇÃO OFICIAL: 

> Separar a contrução de um objeto complexo da sua representação 
> De modo que o mesmo processo de construção possa criar diferentes representações

## Visão geral do builder 

* O padrão sugere a separação do código que cria e o código que usa o objeto 
* Trata da criação de objetos complexos (Complexos de verdade):
  - Construtores muito complexos
  - Composição de vários objetos para criar um maior(composite)
  - Algoritmo de criação do objeto complexo
* Permite a criação de um objeto em etapas (criar primeiro o dados pessoais, depois autenticação , verificação...)
* Permite method chaining (`correr().pular().atirar()`)
* O objeto final pode variar de acordo com a necessidade 

