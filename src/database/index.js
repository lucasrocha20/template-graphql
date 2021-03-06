import Sequelize from 'sequelize';

import User from '../app/models/UserModel';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
    // this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  associate() {
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
