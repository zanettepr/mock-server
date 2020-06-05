<div align="center">
 <img src="https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/get-sandbox-getsandbox-logo.png" >
</div>

# Respositório de Mock Server com getSandbox

Este repositório tem como objetivo a criação de mocks de API's Rest.

Rotas mockadas:

 - #baseUrl: localhost:8080
 - Rota 1: baseURL/pessoa
    - Método: GET
    - Parâmetro: pessoaId
    - Valores com resultado: 1 ou 2
 - Rota 2: baseURL/pessoa
    - Método: POST
    - Body: {
              "pessoaId": ""
            }
    - Valores com resultado: 1 ou 2
 - Rota 3: baseURL/carro/{}
    - Método: GET
    - Valores com resultado: 1 ou 2

### Para este projeto, você precisará das seguintes ferramentas:
```bash
Java 8
VS Code
Postman
```

### Para subir os mocks localhost, use os comandos abaixo configurados no arquivo package.json:
```terminal
Windows
$~ npm run mock-win
ou
Mac ou Linux
$~ npm run mock-lin-mac
```

### Paulo Zanette
- Quality Assurance Engineer
- Linkedin: https://www.linkedin.com/in/paulo-zanette-ctfl-a19b36b6/
- E-mail: paulozanette2020@gmail.com
