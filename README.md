# GoFinances
![GoFinances](https://github.com/Kwan13/gofinances/blob/master/web/src/assets/capa.gif)

### Sobre
GoFinances é uma aplicação que permite o usuário acompanhar sua própria vida financeira cadastrando transações.

A versão inicial deste projeto incluía apenas a página de "dashboard" e foi disponibilizada como desafio para os alunos do Bootcamp GoStack da Rocketseat, porem nesta versão <strong>tomei minhas proprias decisões durante o desenvolvimento </strong>adicionando um backend em NodeJS e páginas adicionais para tornar o projeto mais completo.

<a href="https://www.figma.com/file/EgOhyj1Inz14dhWGVhRlhr/GoFinances?node-id=1%3A863">Design proposto pela Rocketseat</a>

### Tecnologias:

- Typescript
- NodeJS
- ReactJS
- TypeORM

### Instruções:

#### Backend:
1. Baixe e instale o [Docker](https://www.docker.com/get-started) e crie um container com o  Postgres.
	```
	docker run --name gofinances -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
	```
	após criar o container, dentro dele crie um banco de dados com o nome "gofinances", utilize o software que preferir para gerenciar o banco, recomento o [DBeaver](https://dbeaver.io/).
	
2. Vá até a pasta "./backend" e utilize o comando abaixo para baixar todas as dependências do projeto.
	```
	yarn
	```
	e em seguida o comando abaixo para criar o banco de dados e startar o servidor respectivamente:
	```
	yarn typeorm migration:run
	```
	```
	yarn dev:server
	```

#### Front-end:

1. Entre no diretório "./web"  e utilize os comandos abaixo para baixar as dependências e startar o projeto respectivamente.
	```
	yarn
	```
	```
	yarn start
	```
	
