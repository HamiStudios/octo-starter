// npm
import { OctoErrorHandler } from '@hamistudios/octo';

class Error404 extends OctoErrorHandler {
  static error = 404;

  handle() {
    this.getResponse().send('404 - Page not found');
  }
}

export default Error404;
