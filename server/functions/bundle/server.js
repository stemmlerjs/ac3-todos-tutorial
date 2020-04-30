"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const repos_1 = require("./modules/todos/repos");
function createLambdaServer() {
    return new apollo_server_lambda_1.ApolloServer({
        context: () => ({ todosRepo: repos_1.todosRepo }),
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        introspection: true,
        playground: true,
    });
}
exports.createLambdaServer = createLambdaServer;
function createLocalServer() {
    return new apollo_server_1.ApolloServer({
        context: () => ({ todosRepo: repos_1.todosRepo }),
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        introspection: true,
        playground: true,
    });
}
exports.createLocalServer = createLocalServer;
//# sourceMappingURL=server.js.map