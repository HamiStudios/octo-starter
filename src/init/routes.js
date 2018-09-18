// routes
import IndexPage from '../routes/IndexPage';

/**
 * Set the routes on the specified server
 *
 * @param {OctoServer} server The server
 */
export default function setRoutes(server) {
  // add routes
  server.route('/', IndexPage);
}
