# Composite

## Intenção oficial

Compor objetos em estruturas de árvore para representar hierarquias partes/todo. 
Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composição

(a.k.a - Podemos usar composição de objetos simples para formar uma estrutura bem mais complexa)


## Sobre o Composite 

* É um padrão de categoria estrutural (structural)
* Faz mais sentido em estruturas que podem ser tratadas hierarquicamente (objetos dentro de objetos = { user: { name: x } })
* Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme 
* Prioriza composição ao invés de herança 
* Exemplo: produto solto com preço e caixa com vários de mesmo produto também com preço 


## Aplicabilidade 

* Use quando sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estrututuras do tipo arvore
* Se você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira 


## Consequecias 

### Boas:

* É muito fácil criar objetos complexos por composição
* É fácil gerar uma hierarquia de objetos
* É fácil usar polimorfismo e recursão
* É fácil adicionar novos tipos de elementos na estrutura (OCP) 

### Ruins

* Dependendo da estrutura, pode quebrar a princípio da segregação de interface (ISP). 
Objetos de tipo "leaf" tendem a ter métodos que não usam ou não fazem nada. " No diagrama da para perceber isso nos métodos 'add' 'remove' 'getchild' "

### Padrões estruturais
> Se preocupam com a forma como os objetos são compostos para formar estruturas maiores