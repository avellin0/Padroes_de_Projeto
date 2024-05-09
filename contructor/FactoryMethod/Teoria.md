# intenção oficial

*Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O factory Method permite adiar a instanciação para as subclasses*

# Factory (fábricas) em geral

* Factorys são simplesmente operações que criam objetos 

## Sobre o Factory Method 

* É um padrão de projeto de criação (lida com a criação de objetos)
* Oculta a lógica de intanciação do código cliente. O método fábrica será responsavel pot instanciar as classes desejadas. 
* É obtido através de herança. O metodo fabrica pode ser criado ou sobrescrito por subclasses.
* Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar código já escrito (open close principle = OCP).
* Pode usar parametros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados.

## Aplicabilidade 

* Use o factory method quando não souber com certeza quais os tipos de objetos o seucódigo vai precisar 
  - assim você pode criar novos objetos sem ter que mexer nos que já criou
* Use o Factory Method para permitir a extensão de suas factories para a criação de novos objetos
  - Isso ajuda a aplicar o Open/Closed Principle
* Use o Factory Method para desacoplar o código que cria, do código que usa as classes (SRP)   
* Use Factory Method para dar um hook (gancho) às subclasses para permitir que elas decidam a lógica de criação de objetos
* Use o Factory Method para eliminar duplicações de código na criação de objetos 

## Consequências

### Boas:
  * Ajuda a aplicar o Open/Closed principle, seu código vai estar aberto para extensão 
  * Ajuda na aplicação do Single Responsability Principle. Separa o código que cria do código que usa o objeto
  * Ajuda na desacoplamento do seu código

### Ruins: 
  * Se usado sem necessidade, pode causar uma explosão de subclasses. 
    - Será necessário uma classe ConcreteCreator para cada ConcreteProduct 
