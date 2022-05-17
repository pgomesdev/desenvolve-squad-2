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
        notEmpty: {
          msg: 'Name must not be empty'
        },
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
        notEmpty: {
          msg: 'Nickname must not be empty'
        },
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
        name: 'email',
        msg: 'E-mail already in use'
      },
      validate: {
        notEmpty: {
          msg: 'E-mail must not be empty'
        },
        isEmail: {
          msg: 'Provide a valid e-mail'
        },
      }
    },
    phone: DataTypes.STRING,
    company: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Company must not be empty'
        },
        len: {
          args: [2, 15],
          msg: 'Company name must have a maximum length of 15 characters'
        }
      }
    },
    password_hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};