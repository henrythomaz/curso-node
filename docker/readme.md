## Docker

Instalação:

acesse: [docker](https://hub.docker.com/) e faça a instalação.

<div>
<h2 style="text-align: center;">Como o Docker funciona?</h2>
<p> O docker veio pra resolver um problema de equipe, onde cada uma pode ter a sua versão do node mysql ou o qu for que não vai interferir no projeto, pois antes, se na minha máquina o projeto rodasse tudo certo, na maquina do meu colega de equipe o projeto podia quebrar completamente se as versões do node, mysql e etc estivessem diferentes.</p>
<br>
<p> Agora tudo ficou mais fácil, o Docker fuciona por meio de containers, onde eu posso encapsular o node lá dentro, o mysql lá dentro e uma aplicação inteira, assim eu só preciso do Docker na minha máquina!<p>
</div>
<hr>

<h2 style="text-align: center;">Mão na massa</h2>
<p> Antes de começarmos, você tem que entender que o docker funciona com imagens. <br>
    Bom, quando vamos criar um pendrive bootável pro linux, nós não usamos uma imagem ISO, então aqui funciona da mesma forma, nós pegamos uma imagem do sql por exemplo pra criarmos um container de sql.</p>
<br>

você pode encontrar mais sobre a documentação da [imagem docker mysql](https://hub.docker.com/_/mysql) clicando no link.

<br>
<p>Agora, verifique se você instalou, instale a extensão sql client e docker e crie um container docker como está abaixo:</p>
<br>
<h2>Verifique se instalou:</h2>

    docker -v

<hr>
<br>
<p>Agora instale as extensões docker, mysql client</p>
<br>
<hr>
<h2>Chegou a vez de criar o container:</h2>
<p>Para criar o container usaremos <b><em>docker run</em></b>, e depois o <em><b>--name</b></em> para dar um nome ao container que pode ser o que você quiser, agora o <em><b>-e</b></em> que é uma flag para variáveis de ambiente nesse caso a senha que é passada como no dotenv: <b>MYSQL_ROOT_PASSWORD=root mysql</b>, e por fim, passamos o nome da imagem docker que queremos usar, mais detalhes na documentação já passada.

    docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root mysql

<br>
<p>Nós também podemos usar versões específicas da imagem só passando a <b>iamgem:versão</b> ex:</p>

    docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root mysql:5.7

<br>
<hr>

>Nota-se: ele bloqueia o terminal.

<br>
<p>Para resolvermos esse problema usamos <b>-d</b> para rodar o código em brackground:</p>

    docker run --name sql_container -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7

<br>
<h2>Listar, iniciar, parar e remover Containers:</h2>
<br>
<h3>Listar</h3>

    docker ps

>Nota-se: que a extensão do docker consegue visualizar isso fora do terminal.

<h3>Parar</h3>

    docker stop d3

<p>No seu caso ão é d3 acontece que se você usou o docker ps então você viu o id do container e você precisa expecificá-lo para parar o container mas só o comecinho dele, não necessariamente ele inteiro!</p>
<br>

>Notas-se: Se você der ps agora o container não aparece pois está parado, mas, isso não significa que ele deixou de existir, para listar ele mesmo estando parado use:

    docker ps -a

<h3>Iniciar</h3>

    docker start d3

<h3>remover</h3>

    docker rm d3

<br>
<hr>
<h2>Criando um container com mysql dentro</h2>
<p>Se você for no icone database, apertar em criar conexão, e em password escrever root mesmo e clicar em <b>+connect</b> vai dar erro pois mesmo você ja tendo um container ativo com mysql você não lincou a porta local com a porta do container que como tem mysql por padrão usa a porta 3306, para fazer isso usamos a flag <b>-p</b> na hora de criar o container e a porta local que você quer: a porta de execução do container (como ja mencionado: 3306) ex: 3000:3306 assim quando eu faço uma requisição na porta 3000 estou automaticamente me conectando ao servidor mysql:</p>

    docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

<p>Agora se você tentar conectar ao banco de dados novamente vai dar certo podm executar uma banco de dados sem problemas no container</p>
<hr>
<br>
<h2>Criando uam imagem local</h2>
<p>Para criar uma imagem local, se cria na raiz do projeto um (arquivo de configuração) chamado Dockerfile sem extensão, e dentro dele temos que passar algumas configurações:</p>
<br>

    FROM node:16-alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]

<p>explicação:</p>
<ul>
    <li>FROM - <b>passa a imagem base ao nosso arquivo de configuração</b></li>
    <br>
    <li>WORKDIR - dentro do docker tem muitas pastas e o workdir diz a onde a imagem vai ficar em execução.</li>
    <br>
    <li>COPY - copia um arquivo para o arquivo de configuração nesse caso porque vams executar o node dentro dessa imagem onde irá instalar as dependecias automáticamente assim copiaremos o package.json e o package-lock.json para não ficar redundante, usamos package*.json que diz pra pegar os arquivos que começam com package e terminam com .json e depois . que referencia o WORKDIR (app) ou seja para jogar todos os arquivos copiados dentro do app e nesse caso usamos o barra depois do ponto.</li>
    <br>
    <li>RUN - da o comando que a imagem executa antes de executar baixando primeiro as dependências no docker pra depois fazer o resto.</li>
    <br>
    <li>COPY - copia mas nesse caso todos os arquivos do projetos (indicado pelo primeiro ponto) depois temos que passar a pasta em que queremos colar o que foi copiado no caso o /app e para ficar mais curto simplesmente usamos ponto já que já a passamos no WORKDIR.</li>
    <br>
    <li>EXPOSE - expões uam porta no caso a 3000.</li>
    <br>
    <li>CMD - o comando executado no terminal após finalizar a iamgem.</li>
</ul>
<br>
<h3>Criando a Imagem:</h3>
<p>Primeiro  vamos buildar</p>
<p>No terminal:</p>

    docker build -t meu_app .

<p>Bom o -t é pra por um nome na imagem e o ponto é para mostrar o caminho pro arquivo de configuração "que como está na raiz do projeto" usamos apenas . mesmo.</p>
<br>

>Nota-se: Na extensão do docker o meu_app ja aparece como imagem baixada

<hr>
<br>

<h2>Rodando um container com uma imagem local</h2>

    docker run --name app_container -p 3000:3000 -d meu_app

<p>Nesse caso não precisamos de variáveis de ambiente como no mysql e nós lincamos a porta 3000 local com a porta exposta do container app_container</p>