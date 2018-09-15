// npm
import fs from 'fs';
import { OctoServer, OctoRouter } from '@hamistudios/octo';

// routes
import IndexPage from './routes/IndexPage';

// api routes
import GetUser from './routes/api/GetUser';

// middlewares
import LoggerMiddleware from './middlewares/Logger';

const server = new OctoServer();

// add middlewares
server.middleware(LoggerMiddleware);

// add routes
server.route('/', IndexPage);

// api router
const apiRouter = new OctoRouter('/api');
apiRouter.route('/user', GetUser);

// add the router to the server
server.router(apiRouter);

// start the server
server.start((listener) => {
  const {
    address,
    port,
  } = listener.address();

  console.log(fs.readFileSync('./src/octo_ascii.txt').toString());

  console.log(`Server Started.\n  http://${address}:${port}`);
});
