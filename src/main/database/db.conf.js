import { join } from 'path'
import { is } from '@electron-toolkit/utils'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(
    __dirname,
    is.dev && process.env['ELECTRON_RENDERER_URL']
      ? /* The path to the database file. */
        '../../resources/test.sqlite'
      : // NB: We exit once more because we want the database to be outside of the asar file.
        //this configuration is in the electron-builder.yml file and has the extraResources key.
        '../../../resources/test.sqlite'
  )
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error)
  })

export default sequelize
