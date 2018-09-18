// npm
import path from 'path';

/**
 * Serve static files
 *
 * @param {OctoServer} server The server to serve the files on
 */
export default function serveStatic(server) {
  // serve /public as static files (/assets/*)
  server.static(path.resolve(__dirname, '../public'), '/assets');

  // serve fomantic as static (/assets/fomantic-ui-css/*)
  server.staticModule('fomantic-ui-css', '/assets');
}
