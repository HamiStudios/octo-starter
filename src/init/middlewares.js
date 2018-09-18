// middlewares
import LoggerMiddleware from '../middlewares/Logger';

/**
 * Set the middlewares on the specified server
 *
 * @param {OctoServer} server The server
 */
export default function setMiddlewares(server) {
// add middlewares
  server.middleware(LoggerMiddleware);
}
