# 🐳 Docker - Guia Prático

## 📦 Instalação

Acesse o site oficial e siga as instruções:  
👉 [https://hub.docker.com/](https://hub.docker.com/)

---

## 🚀 Como o Docker Funciona?

O Docker resolve um problema comum em equipes de desenvolvimento: a diferença entre ambientes.

> "Na minha máquina funciona!"  
> "Na do colega não!"

Com Docker, isso acaba. Ele utiliza **containers**, que são ambientes isolados e padronizados. Assim, toda a stack (Node, MySQL, etc.) roda da mesma forma para todos os membros da equipe.

---

## 📁 Entendendo Imagens e Containers

Imagens são como um "modelo". Containers são instâncias dessas imagens em execução.

> Exemplo: Assim como usamos uma imagem ISO para criar um pendrive bootável, usamos imagens Docker para criar containers.

🔗 Documentação da imagem do MySQL:  
[https://hub.docker.com/_/mysql](https://hub.docker.com/_/mysql)

---

## ✅ Verificando Instalação

```bash
docker -v
```
Se esse comando retornar a versão do Docker, a instalação foi concluída com sucesso.

##  🧩 Extensões Recomendadas (VS Code)
Docker

SQL Client (ex: MySQL)

Essas extensões ajudam a visualizar containers, volumes e bancos de dados diretamente no editor.

## 🛠 Criando um Container MySQL
```bash
docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root mysql
```
### Usando uma versão específica
```bash
docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root mysql:5.7
```
### Rodando em segundo plano
```bash
docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```
## 📋 Comandos Básicos de Containers
### Listar containers ativos
```bash
docker ps
```
### Listar todos (inclusive os parados)
```bash
docker ps -a
```
### Parar container
```bash
docker stop <id ou nome>
```
### Iniciar container
```bash
docker start <id ou nome>
```
### Remover container
```bash
docker rm <id ou nome>
```
## 🌐 Conectando ao MySQL (com mapeamento de porta)
```bash
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```
Agora é possível conectar usando:

- Host: localhost

- Porta: 3306

- Usuário: root

- Senha: root

## 🧱 Criando uma Imagem Local com Node.js
Crie um arquivo chamado Dockerfile com o seguinte conteúdo:

```Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```
### Explicação das instruções:
- `FROM:` Define a imagem base

- `WORKDIR:` Define o diretório de trabalho

- `COPY`: Copia arquivos para o container

- `RUN`: Executa comandos dentro do container (ex: instalar dependências)

- `EXPOSE`: Expõe uma porta

- `CMD`: Comando que será executado ao iniciar o container

## 🏗 Buildando a Imagem
```bash
docker build -t meu_app .
```
## ▶️ Executando a Imagem
```bash
docker run --name app_container -p 3000:3000 -d meu_app
```
## ✅ Conclusão
Você aprendeu como:

- Instalar e verificar o Docker

- Rodar um container com MySQL

- Mapear portas para conectar com clientes

- Criar sua própria imagem com Node.js

- Executar containers a partir de imagens locais

Use Docker para padronizar ambientes e eliminar o clássico "na minha máquina funciona".

---