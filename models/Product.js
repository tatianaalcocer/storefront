module.exports = function(sequelize, DataTypes) { 
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    stock_quantity: DataTypes.INTEGER
  });

  return Product;
}