// routes
import IndexPage from '../routes/IndexPage';
import AllPage from '../routes/AllPage';

/**
 * Set the routes on the specified server
 *
 * @param {OctoServer} server The server
 */
export default function setRoutes(server) {
  // add routes
  server.route('/', IndexPage);
  server.route('/all', AllPage);
}
