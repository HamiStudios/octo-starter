import path from 'path';
import Crather from '@hamistudios/crather/index';

export default function setRenderEngine(server) {
  // set the views, templates and scripts paths
  server.set('views', path.resolve(__dirname, '../views'));
  server.set('templates', path.resolve(__dirname, '../views/templates'));
  server.set('scripts', path.resolve(__dirname, '../views/scripts'));

  // define crather as the render engine
  server.setRenderEngine('crather', Crather.express());

  // set the default data
  server.setDefaultRenderData({
    title: 'Octo Framework',
  });
}
