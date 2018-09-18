// npm
import { OctoMiddleware } from '@hamistudios/octo';
import morgan from 'morgan';

class LoggerMiddleware extends OctoMiddleware {
  use() {
    // enable morgan (https://github.com/expressjs/morgan) to print http logs
    morgan('combined')(
      this.getRequest().getExpressRequest(), // request
      this.getResponse().getExpressResponse(), // response
      () => this.nextHandler(), // next
    );
  }
}

export default LoggerMiddleware;
