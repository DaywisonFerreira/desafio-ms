<<<<<<< HEAD
<h1 align="center">
  <br>
  <img src="https://i.ibb.co/MD8jH60/apptrade-logo.jpg" alt="" width="200">
  <br>
  Desafio - Serviços
  <br>
</h1>

<h4 align="center">Desafio para Seleção de Desenvolvedor Back-End</h4>


<p align="center">
  <a href="#descrição">Descrição</a> •
  <a href="#requisitos">Requisitos</a> •
  <a href="#observações">Observações</a> •
  <a href="#guia">Guia</a>
</p>

## Descrição

Deverão ser desenvolvidos dois serviços que recebem dados JSON, armazenam em um sistema de mensageria para então ser consumido e armazenado em um banco NoSQL.

## Requisitos

### Serviço 01

1. Deverá ser desenvolvido em NestJS (Typescript).
2. Rest ou GraphQL.
3. Deve ter um endpoint para receber um objeto JSON.
4. Deve publicar esse objeto para um tópico do Kafka.
5. Este serviço **NÃO PODE USAR NENHUM BANCO DE DADOS**.


### Serviço 02

1. Deverá ser desenvolvido em NestJS (Typescript).
2. Este serviço deve usar um banco de dados NoSQL (MongoDB ou Cassandra).
3. Deve consumir e remover objetos no tópico do Kafka.
4. Os objetos consumidos devem ser inseridos no banco de dados.

### Infraestrutura

1. O banco e os sistemas devem estar containerizados.
2. Toda a infraestrutura deve estar online na máquina local com, no máximo, 10 comandos em qualquer máquina Linux com Docker instalado.
3. O Docker deve ser utilizado como base da infraestrutura.

## Observações

* Todos os recursos devem estar nesse único repositório.
* Não é necessário e não será avaliado nenhum recurso de Front-End.
* Os padrões de projetos e tecnologias aplicadas serão avaliadas.
* A modelagem de banco e estratégias de manipulação de dados serão avaliadas.
* Documentação não é obrigatória, mas a facilidade no uso dos recursos será avaliada e a presença de uma documentação simplificada pode impactar positivamente.
* A organização do repositório será avaliada.
* Os commits serão avaliados. Atente-se aos padrões que deseja utilizar.

## Guia

1. Faça um fork privado do repositório.
2. Desenvolva os recursos.
3. Conceda permissão de leitura para membros indicados.
4. Aguarde a avaliação.
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
>>>>>>> ms2
