// error handlers
import Error500 from '../errorHandlers/Error500';

/**
 * Set the error handlers on the specified server
 *
 * @param {OctoServer} server The server
 */
export default function setErrorHandlers(server) {
  // add routes
  server.errorHandler(Error500);
}
