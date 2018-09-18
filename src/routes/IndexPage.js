import { OctoRoute } from '@hamistudios/octo';

class IndexPage extends OctoRoute {
  get() {
    this.getResponse()
      .render('index');
  }
}

export default IndexPage;
