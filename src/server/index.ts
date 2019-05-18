import { GraphQLServer } from 'graphql-yoga'
import 'reflect-metadata'
import * as TypeGraphQL from 'type-graphql'
import Container from 'typedi'
import { createConnectionToDb } from './db'
import { resolvers } from './resolvers'

const bootstrap = async () => {
  try {
    await createConnectionToDb()

    const schema = await TypeGraphQL.buildSchema({
      resolvers,
      container: Container
    })

    const server = new GraphQLServer({ schema })

    server.start(
      {
        port: process.env.PORT
      },
      () => {
        console.log('Server running')
      }
    )
  } catch (e) {
    console.error(e)
  }
}

bootstrap()
