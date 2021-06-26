const Sequelize = require("sequelize");

const connection = new Sequelize("samuelprojeto","root","",{
    host: "localhost",
    dialect: "mysql"
});

connection.authenticate()
    .then(()=>{
        console.log('Conexão estabelecida com o banco de dados.');
    }).catch((erro)=>{
        console.error('Não foi possível conectar ao banco de dados:', error);
    });

module.exports = connection;
