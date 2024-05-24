# Intenção Oficial

Converter a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossivel por causa de suas interfaces incompatíveis 

# Sobre o Adapter

* É um padrão de categoria estrutural  
* Faz exatamente o que uma adaptador da vida real faz (adaptador de tomadas) 
* É muito usado para definir limites dentro de camadas da aplicação 
* Também pode ser usado para adaptar interfaces de código legado para um novo código

# Aplicabilidade

* Você deve usar se não quiser que seu código dependa diretamente de código de terceiros ou legado
* Quando quiser uma class existente mas sua interface for incompativel com a interface que seu código ou domínio precisam 
* Você quiser reutilizar várias subclasses que não possuam determinada funcionalidade mas for impraticável estender o código de cada uma apenas para adicionar a funcionalidade desejada (o Decorator também faz isso)

# Consequencias

## Boas:

* Desacopla o código da aplicação de códigos de terceiro
* Aplica o SRP ao separar a conversão de interfaces da lógica da aplicação
* Aplica o OCP ao permitir introduzir novos Adapters para código existente 

## Ruins:

* Aumenta a complexidade da aplicação (Por outro lado, qual outra solução deveria ser aplicada?) 