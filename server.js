const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('1.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.use(jsonServer.defaults);
server.use('/db1', router);

server.listen(port);
