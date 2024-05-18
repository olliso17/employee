
## Installation

```bash
$ npm install
```

## Running the api

```bash
# development
$ npm start

# build
$ npm run build
```
## Running the front_end
```bash
# development
$ npm run dev
```
## docker

```bash
#run docker
$ docker-compose up
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

# Endpoints
##  Criar Funcionário
```bash

    URL: /employee/create
    Método: POST
    Descrição: Cria um novo registro de funcionário com os dados fornecidos.
    Corpo da Requisição: Deve conter os dados do funcionário a serem criados.
    Resposta de Sucesso: Retorna o novo funcionário criado.
    Resposta de Erro: Retorna uma mensagem de erro se a criação do funcionário falhar.
```
##  Obter Todos os Funcionários
```bash
    URL: /employees
    Método: GET
    Descrição: Retorna uma lista de todos os funcionários cadastrados.
    Resposta de Sucesso: Retorna uma lista de funcionários.
    Resposta de Erro: Retorna uma mensagem de erro se a busca de funcionários falhar.
```
##  Obter Funcionário por ID
```bash
    URL: /employees/:id
    Método: GET
    Descrição: Retorna os dados de um funcionário específico com base no ID fornecido.
    Parâmetros de URL: id - ID do funcionário a ser buscado.
    Resposta de Sucesso: Retorna os dados do funcionário correspondente ao ID fornecido.
    Resposta de Erro: Retorna uma mensagem de erro se a busca do funcionário falhar.
```
## Editar Funcionário
```bash
    URL: /employee/edit/:id
    Método: PUT
    Descrição: Atualiza os dados de um funcionário com base no ID fornecido.
    Parâmetros de URL: id - ID do funcionário a ser editado.
    Corpo da Requisição: Deve conter os novos dados do funcionário a serem atualizados.
    Resposta de Sucesso: Retorna os dados do funcionário atualizados.
    Resposta de Erro: Retorna uma mensagem de erro se a edição do funcionário falhar.
```
## Deletar Funcionário
```bash
    URL: /employee/delete/:id
    Método: DELETE
    Descrição: Remove um funcionário com base no ID fornecido.
    Parâmetros de URL: id - ID do funcionário a ser deletado.
    Resposta de Sucesso: Retorna uma mensagem de confirmação de exclusão bem-sucedida.
    Resposta de Erro: Retorna uma mensagem de erro se a exclusão do funcionário falhar.
```
## Stay in touch

- Author - [Patricia Oliveira](https://www.linkedin.com/in/patricia-silva-oliveira-/)

