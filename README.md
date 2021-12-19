<div align="center">
    <img src="src/docs/logo.png" width="250px;" alt=""/>
    <p>API Rest em NodeJs</p>
</div>
<br/>
<br/>
<div align="right">
    <div>
        <p><i>Desenvolvido por: <a href="mailto:caiov.messias@icloud.com">Caio Messias</a>
        <br/>
        Atualizado em: 20/12/2021
        </i></p>
    </div>
</div>


----

<div align="center">

[Sobre o projeto](#sobre-o-projeto) | [Tecnologias Utilizadas](#Tecnologias-utilizadas) | [Execução](#execução)
</div>

----  

## Sobre o Projeto  

O projeto consiste em ser uma API Rest desenvolvida em NodeJs que realiza o CRUD de Laboratórios e Exames.  
Além do CRUD é possível realizar a associação e desassociação de Exames e Laboratórios.  

## Tecnologias Utilizadas

Foram utilizadas as seguintes tecnologias na API.  
- NodeJs
- Express
- Sequelize
- Mysql
- Docker

## Execução

Para executar o projeto em sua máquina é necessário possuir o Docker e o Docker compose instalados e configurados.

### Primeira execução do projeto

1. Clone o projeto  
`git clone https://github.com/caiovmessias/node_api.git`

2. Suba o container do Mysql  
`docker-compose up -d mysql-5.7`

3. Rode o comando abaixo para realizar a configuração do projeto  
`make setup`

4. Agora basta subir o container da API  
`make up`

Comandos uteis após a configuração do projeto:

- Iniciar o container da API e do Mysql  
`make up`

- Baixar os containers sda API e do Mysql  
`make down`

Para visualizar outros comandos, acesse o arquivo `Makefile`  