# Script utilizado para o setup e configuração do projeto

# Inicia o container do mysql para execução das migrations e seeds
docker-compose up -d mysql-5.7

# Instala as dependências do projeto e cria node_modules
yarn

# Cria banco de dados que será utilizado pelo projeto
npx sequelize db:create

# Executa as migrations
npx sequelize db:migrations

# Executa o seed para preenchimento do tipo do exame
npx sequelize db:seed:all