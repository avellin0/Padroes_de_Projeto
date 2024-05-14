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


### Padrões estruturais
> Se preocupam com a forma como os objetos são compostos para formar estruturas maiores