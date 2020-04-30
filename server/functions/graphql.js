
const { createLambdaServer } = require("./bundle/server")

const graphQLServer = createLambdaServer();

exports.handler = graphQLServer.createHandler({
  cors: {
    origin: '*'
  }
});

