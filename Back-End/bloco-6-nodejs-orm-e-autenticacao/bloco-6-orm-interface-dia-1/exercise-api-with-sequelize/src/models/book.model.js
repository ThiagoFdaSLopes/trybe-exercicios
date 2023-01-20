const BookModel = (sequelize, DataTypes) => {
  const book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return book;
}