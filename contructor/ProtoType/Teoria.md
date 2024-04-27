# Sobre Javascript e Typescript

* JS/TS são linguagens baseadas em protótipos
* Objetos estão diretamente ligados a outros objetos 
* Você pode literalmente fazer um objeto "Herdar" de outro:
 - `const x = {valor: 1 , valor: 2}; const y = object.create(x); log(y.valor1) `
* A "herança" é obtida via delegação (um objeto delega algo para seu protótipo)
* Uma das maneiras mais simples para manipular o protótipo de um objeto é usando:
 - `object.create(prototypeObject)`  
* Também temos o costume de usar classes e funções construtoras para manipular os protótipos (isso faz com que Js/Ts pareçam estar usando
  o padrão orientado a objetos clássico) 

 # Visão geral

 * O tipo de objeto a ser criado é determinado pelo objeto protótipo
 * É tipicamente usado para evitar a recriação de objetos "caros" 
 * Ajuda a evitar a explosão de subclasses 
 * Pode (ou não) manter um registro de objetos protótipo em um objeto separado
 * Geralmente é criado apenas com um método "clone" dentro do objeto protótipo
 * Evita que o cliente conheça as classes que criam os objetos 

 # Aplicabilidade 

 * Use o padrão prototype quando precisar que seu código não dependa de classes concretas para a criação de noos objetos 
 * Use o padrão prototype quando quiser evitar explosão de subclasses para objetos muito similares 
 * Use o padrão prototype para evitar a recriação de objetos "caros"

 # consequências

 ## Boas:

* Oculta classes concretas do código cliente
* Ajuda na criação de objetos caros ou complexos 
* Evita a explosão de subclasses 

## Ruins 

* Clonar objetos que tem referências para outros objetos pode ser super complexo

