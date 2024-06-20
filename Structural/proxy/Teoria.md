# Intenção Oficial

proxy é um padrão de projeto que tem a intenção de fornecer um subtituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto

# Sobre o proxy 

* Usa composição, portanto tem a estrutura muito semelhante ao "Composite" e "Decorator" (as intenções são completamente diferentes).
* Usa um objeto "proxy" que finge ser o objeto real.
* É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais.
* Pode escolher como e quando repassar chamadas de métodos para objeto real. 
* Pode executar ações antes e depois das chamadas dos métodos do objeto real.
* Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente...

# Variações de proxy

* Proxy virtual: controla acesso a recursos que podem ser caros para criação ou utilização.
(ex: ao invés de sempre que eu for buscar um usuario eu ter que ir no meu banco de dados, eu faço um cache do objeto real e entrego o proxy = copia)

* Proxy remoto: Controla acesso a recursos que estão em servidores remotos
(obs: não precisa ser fora do seu computador/servidor , pode ser que um serviço remoto esteja em seu pc , porém , fora do seu código atual, um exemplo é a conexão com banco de dados)

* Proxy de proteção: Controla acesso a recursos que possam necessitar autenticação ou permissão
(ex: token, autenticação, login...)

* Proxy inteligente: Além de controlar acesso ao objeto real, também executa tarefas adicionais para saber quando e como executar determinadas ações 

# Use o padrão Proxy quando:

* Você tem um objeto caro para ser criado e não quer permitir acesso direto a esse objeto (proxy virtual)
* Você quer restringir acesso a partes da sua aplicação (proxy de proteção)
* Você quer uma ligação entre seu sistema e um sistema remoto (proxy remoto)
* Você quer fazer caches de chamadas ja realizadas (proxy inteligente ou proxy de cache)
* Você quer interceptar quaisquer chamadas de metodos no objeto real por qualquer motivo (ex: criar logs)

# Consequencias:

## Bons:

- O código cliente nem precisa saber se está ou não usando um proxy (ele finge ser o objeto real)
- Você pode adicionar novos Proxies sem mudar códigos ja testado (OCP)
- O proxy funciona mesmo se o objeto real não estiver operacional ou pronto para uso
- Você pode controlar o ciclo de vida de objetos reais dentro do proxy

## Ruim

- Introduz mais classes ao sistema isso o torna mais complexo (basicamente não tem nada de ruim)