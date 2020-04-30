
import { ApolloServer } from 'apollo-server'
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { todosRepo } from './modules/todos/repos';
import { TodoRepo } from './modules/todos/repos/todoRepo';

export type Context = { todosRepo: TodoRepo }

function createLambdaServer () {
  return new ApolloServerLambda({
    context: () => ({ todosRepo } as Context),
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

function createLocalServer () {
  return new ApolloServer({
    context: () => ({ todosRepo } as Context),
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

export { createLambdaServer, createLocalServer }