# Tutorial para Iniciar o Servidor Node.js com Express

Este tutorial guia você na configuração e execução de um servidor Node.js simples usando Express, que inclui uma API `/ping`.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o Node.js instalado em sua máquina. Você pode verificar isso executando `node -v` no terminal. Se não estiver instalado, você pode baixá-lo e instalá-lo de [Node.js website](https://nodejs.org/).

## Configuração do Projeto

1. **Criar uma nova pasta para o projeto**: Crie uma pasta em seu computador onde deseja armazenar os arquivos do projeto.

2. **Inicializar um novo projeto Node.js**: Abra um terminal, navegue até a pasta do projeto e execute o comando `npm init -y`. Isso criará um arquivo `package.json` com as configurações padrão.

3. **Instalar o Express**: Ainda no terminal, instale o Express usando o comando `npm install express`.

4. **Criar o arquivo do servidor**: Crie um arquivo chamado `server.js` na raiz do projeto e cole o código boilerplate fornecido acima.

## Executando o Servidor

1. **Iniciar o servidor**: No terminal, execute o comando `node server.js`. Isso iniciará o servidor na porta 1234.

2. **Testar a API**: Abra um navegador e acesse `http://localhost:1234/ping`. Se tudo estiver configurado corretamente, você verá a resposta "pong!".

## Próximos Passos

Após configurar e testar seu servidor, você pode começar a adicionar mais funcionalidades e endpoints conforme necessário para o seu projeto.
