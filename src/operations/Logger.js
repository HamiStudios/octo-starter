// npm
import { OctoOperation, OctoMethod } from '@hamistudios/octo';
import morgan from 'morgan';

class LoggerOperation extends OctoOperation {
  static method = OctoMethod.GET;

  async execute() {
    // enable morgan (https://github.com/expressjs/morgan) to print http logs
    morgan('combined')(
      this.getContext().getRawRequest(), // request
      this.getContext().getRawResponse(), // response
      this.nextHandler, // next
    );
  }
}

export default LoggerOperation;
