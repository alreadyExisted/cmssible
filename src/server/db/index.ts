import { Container } from 'typedi'
import * as TypeORM from 'typeorm'
import { entities } from '../entities'

export const createConnectionToDb = async () => {
  TypeORM.useContainer(Container)

  await TypeORM.createConnection({
    type: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    entities,
    synchronize: true,
    logger: 'advanced-console',
    logging: 'all',
    dropSchema: true,
    cache: true
  })
}
