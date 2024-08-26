# Nest.js + Nestia + MikroORM

## Description

The goal was to explore Nestia and how to integrate it with MikroORM to replace `class-validator` and 
`class-transformer`.

Running the code will create a simple `UserController` that allows basic CRUD operations with schema validation.

## Dependencies

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [Fastify](https://fastify.dev/) as web server.
- [MikroORM](https://mikro-orm.io/) as ORM.
- [Nestia](https://nestia.io) for schema validation.

## Installation

```bash
$ cp .env.example .env
$ npm install
$ npx mikro-orm migration:fresh
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

Open an issue for any question

## License

[MIT No Attribution (MIT-0)](LICENSE.md)
