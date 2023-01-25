import sequelize from '../database/db.conf'
import { DataTypes, Model } from 'sequelize'

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  }
)
//  This creates the table if it doesn't exist (and does nothing if it already exists)
// see https://sequelize.org/docs/v6/core-concepts/model-basics/
User.sync()

export default User
