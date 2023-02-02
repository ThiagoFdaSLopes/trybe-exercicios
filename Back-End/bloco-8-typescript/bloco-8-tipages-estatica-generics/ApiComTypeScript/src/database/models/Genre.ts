import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Genre extends Model {
  declare id: number;
  declare genre: string;
}

Genre.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  genre: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'authors',
  timestamps: false,
});

export default Genre;