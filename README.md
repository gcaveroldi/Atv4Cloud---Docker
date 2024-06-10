# Aplicação Node.js com MySQL

## Passos para executar a aplicação

### 1. Executar o Banco de Dados
```sh
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest
