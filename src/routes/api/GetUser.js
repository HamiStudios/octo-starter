import { OctoRoute } from '@hamistudios/octo';

class GetUser extends OctoRoute {
  get() {
    this.getResponse().json({
      name: 'Octo Pus',
      created_at: new Date(),
    });
  }
}

export default GetUser;
