'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        checkSize(value) {
          const names = value.trim().split(' ')
          if (names.length < 2) {
            throw new Error("Full name should have at least two names")
          }
        }
      }
    },
    nickname: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 15],
          msg: 'Nickname must have a maximum length of 15 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'E-mail already in use'
      },
      validate: {
        isEmail: {
          msg: 'Provide a valid e-mail'
        },
      }
    },
    phone: DataTypes.STRING,
    company: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 15],
          msg: 'Company name must have a maximum length of 15 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 6,
          msg: 'Password must have at least 6 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};