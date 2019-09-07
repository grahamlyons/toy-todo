
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('todos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    note: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    logging: console.log,
  }),
  down: (queryInterface) => queryInterface.dropTable('todos'),
};
