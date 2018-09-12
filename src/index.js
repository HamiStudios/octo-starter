import { OctoServer } from '@hamistudios/octo';

// routes
import IndexPage from './routes/IndexPage';

// middlewares
import LoggerMiddleware from './middlewares/Logger';

const server = new OctoServer();

// add middlewares
server.middleware(LoggerMiddleware);

// add routes
server.route('/', IndexPage);

// start the server
server.start((listener) => {
  const {
    address,
    port,
  } = listener.address();

  console.log(`Server Started.\n  http://${address}:${port}`);
});
