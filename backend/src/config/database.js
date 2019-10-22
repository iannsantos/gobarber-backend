require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // createdAt e updatedAt nas tabelas
    underscored: true, // cria as tabelas com underscore (user_group e não UserGroup)
    underscoredAll: true, // faz o mesmo, só que com as colunas
  },
};
