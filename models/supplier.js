'use strict';
module.exports = function(sequelize, DataTypes) {
  var Supplier = sequelize.define('Supplier', {
    name: DataTypes.STRING,
    kota: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Supplier.associate = function (models) {
    Supplier.hasMany(models.SupplierItem)
    Supplier.belongsToMany(models.Item, {through: 'SupplierItem'});
  };
  return Supplier;
};
