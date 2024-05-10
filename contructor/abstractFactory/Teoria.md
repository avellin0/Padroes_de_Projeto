# Abstract Fectory

## Intenção oficial

Fornecer uma interface para criação de familias de objetos relacionados ou dependentes sem especificar suas classes concretas 

## Sobre a Abstract Factory

* É um padrão de criação, portanto lida com a criação de objetos
* É uma fabrica, assim como o Factory Method e geralmente é composto por múltiplos Factory Methods
* Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis
* Separa o código que cria do que usa os objetos (SRP) um objeto cria oque você quer usar e o outro aplica 
* Permite fácil implementação de novas famílias de objetos (OCP)   
* Toda a programação fica focada nas interfaces e não nas implementações  

## Aplicabilidade

* um sistema deve ser independente de como seus produtos  são criados, compostos ou reprepresentados (a.k.a desacoplar código)
* um sistema deve ser configurado com uma família produtos que podem (ou não) trabalhar juntos 
* uma familia de objetos for projetada para ser usada com conjunto e você necessita garantir essa restrição
* Você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações 

## Consequencias 

### Boas:

* Os produtos sempre serão comaptiveis entre si
* Aplicação clara do Open/Closed principle, é fácil adicionar novas fábricas e produtos 
*  Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

### Ruins 

* Muitas classes e maior complexidade será introduzida no código