'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    note: DataTypes.TEXT
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};
