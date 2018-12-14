// node
import path from 'path';

// npm
import { OctoApp, OctoServer } from '@hamistudios/octo';
import Crather from '@hamistudios/crather';

// routes
import IndexPage from './routes/IndexPage';

// operations
import LoggerOperation from './operations/Logger';

// error handlers
import Error404 from './errorHandlers/Error404';

// create a new OctoServer
const server = new OctoServer();

// setup render engine (crather)
server.set('views', path.resolve(__dirname, './views'));
server.set('templates', path.resolve(__dirname, './views/templates'));
server.set('scripts', path.resolve(__dirname, './views/scripts'));
server.setRenderEngine('crather', Crather.express());
server.setDefaultRenderData({
  title: 'Octo Starter',
});

// create new OctoApp
const app = new OctoApp({
  sendSoftwareHeader: true,
  helmet: true,
});

// serve public directory as static content
server.static(path.resolve(__dirname, './public'), '/assets');
// serve fomantic-ui-css npm module as static content
server.staticModule('fomantic-ui-css', '/assets');

// add logger
app.addOperation(LoggerOperation);

// add index page route
app.addRoute(IndexPage);

// add 404 error handler
app.addErrorHandler(Error404);

// start the server
app.start(server)
  .then(() => {
    console.log('Server Started', server.getURL());
  })
  .catch(console.error);
