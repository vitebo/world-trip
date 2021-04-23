/* eslint-disable @typescript-eslint/ban-types */
import { createServer, Model, Registry, Server } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

type TripType = {
  type: string;
  imagePath: string;
};

type AppRegistry = Registry<
  {
    tripType: ModelDefinition<TripType>;
  },
  {}
>;

type AppSchema = Schema<AppRegistry>;

type AppServer = Server<AppRegistry>;

export function makeServer({ environment = 'test' } = {}): AppServer {
  const server = createServer({
    environment,

    models: {
      tripType: Model,
    },

    seeds(server: AppServer) {
      server.create('tripType', {
        type: 'vida noturna',
        imagePath: '/svgs/cocktail.svg',
      });
      server.create('tripType', {
        type: 'praia',
        imagePath: '/svgs/surf.svg',
      });
      server.create('tripType', {
        type: 'moderno',
        imagePath: '/svgs/building.svg',
      });
      server.create('tripType', {
        type: 'clássico',
        imagePath: '/svgs/museum.svg',
      });
      server.create('tripType', {
        type: 'e mais...',
        imagePath: '/svgs/earth.svg',
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/trip-types', (schema: AppSchema) => {
        return schema.all('tripType');
      });
    },
  });

  return server;
}
