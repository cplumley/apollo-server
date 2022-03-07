'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Link.init(
    {
      url: DataTypes.STRING,
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Slug must be unique"
        },
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'Must be alphanumeric'
          },
          len: {
            args: [4],
            msg: 'Must be more than 4 characters'
          },
        }
      },
    },
    {
      sequelize,
      modelName: 'Link',
    }
  );
  return Link;
};
