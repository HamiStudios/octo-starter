// npm
import fs from 'fs';
import { OctoServer } from '@hamistudios/octo';

// libs
import setRoutes from './init/routes';
import setMiddlewares from './init/middlewares';
import setRenderEngine from './init/renderEngine';
import serveStatic from './init/serveStatic';
import setErrorHandlers from './init/errorHandlers';

// create a new OctoServer
const server = new OctoServer({
  host: 'localhost',
  port: 8585,
});

// set render engine
setRenderEngine(server);

// set the routes & middlewares
setRoutes(server);
setMiddlewares(server);
setErrorHandlers(server);

// serve static content
serveStatic(server);

// start the server
server.start((listener) => {
  // get server details
  const {
    address,
    port,
  } = listener.address();

  // print ascii octopus and server url
  console.log(fs.readFileSync('./src/octo_ascii.txt').toString());
  console.log(`Server Started.\n  http://${address}:${port}`);
});
