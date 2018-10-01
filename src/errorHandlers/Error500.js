import { OctoErrorHandler } from '@hamistudios/octo';

class Error404 extends OctoErrorHandler {
  error500() {
    console.log('500 error');
    this.getResponse().send('500 - internal server error');
  }
}

export default Error404;
