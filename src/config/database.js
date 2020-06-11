// require('dotenv/config');

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "postgres",
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true, // não utiliza o padrão camel case
    underscoredAll: true,
  },
};
