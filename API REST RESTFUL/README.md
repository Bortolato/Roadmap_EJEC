# API, REST e RESTFUL

## API

API - Aplication Programming Interface é basicamente um conjunto de rotinas e padrões estabelecidos por um aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação

- Cliente (Client)
- Garçon (API)
- Cozinha (Server)

Responsável por estabelecer comunicação entre os diferentes serviços
Meio de campo entre as tecnologias 
Intermediador para trocar informações

## REST

REST - REpresentational State Transfer

A transferência de dados, geralmente, usando protocolo HTTP

O REST delimita algumas obrigações nessa transferência de dados

### 6 necessidades (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma poderemos ter uma portabilidade do nosso sistema usando react para Web e React Nativa para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para que o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: a sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicação.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade e de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.





## RESTFUL

RESTful é a aplicação dos padrões REST.


## Boas práticas 

Utilizar verbos HTTP para as requisições
Não deixar barras no final dos endpoints
Nunca deixe o cliente sem resposta

### Verbos HTTP

- GET: receber dados de um resource.
- POST: enviar dados ou inforções para serem processados por um resource.
- PUT: atualizar dados de um resource.
- DELETE: deletar um resource. 

### Status das respostas

- 1xx: Informação
- 2xx: Sucesso
    - 200: OK
    - 201: CREATED
    - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5xx: Server Error
    - 500: Internal Server Error