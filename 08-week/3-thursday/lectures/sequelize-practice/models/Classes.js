'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    className: DataTypes.STRING,
    type: DataTypes.STRING,
    book: DataTypes.STRING
  }, {});
  Classes.associate = function(models) {
    // associations can be defined here
  };
  return Classes;
};