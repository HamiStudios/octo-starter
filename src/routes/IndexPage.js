import { OctoRoute, OctoMethod } from '@hamistudios/octo';

class IndexPage extends OctoRoute {
  static method = OctoMethod.GET;
  static path = '/';

  render() {
    this.getResponse()
      .render('index');
  }
}

export default IndexPage;
