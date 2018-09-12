import { OctoRoute } from '@hamistudios/octo';

class IndexPage extends OctoRoute {
  constructor(context) {
    super(context);

    this.date = new Date();
  }

  get() {
    this.getResponse().json({
      message: 'Hello World',
      date: this.date,
    });
  }
}

export default IndexPage;
