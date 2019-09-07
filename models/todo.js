
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    note: DataTypes.TEXT,
  }, {});
  return todo;
};
