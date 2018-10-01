import { OctoRoute } from '@hamistudios/octo';

class AllPage extends OctoRoute {
  all() {
    this.getResponse().status(500);
    this.nextHandler();
  }
}

export default AllPage;
