import { OctoMiddleware } from '@hamistudios/octo';

class LoggerMiddleware extends OctoMiddleware {
  use() {
    console.log(this.getRequest().getMethod().toString(), this.getRequest().getOriginalUrl());
    this.nextHandler();
  }
}

export default LoggerMiddleware;
