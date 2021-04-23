/* eslint-disable @typescript-eslint/ban-types */
import { createServer, Model, Registry, Server } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

type TripType = {
  type: string;
  imagePath: string;
};

type Continent = {
  name: string;
  description: string;
};

type AppRegistry = Registry<
  {
    tripType: ModelDefinition<TripType>;
    continent: ModelDefinition<Continent>;
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
      continent: Model,
    },

    seeds(server: AppServer) {
      // trip types
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
      // continents
      server.create('continent', {
        title: 'Europa',
        description: 'O continente mais antigo.',
        imagePath:
          'https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      });
      server.create('continent', {
        title: 'América do Norte',
        description: 'O continente mais antigo.',
        imagePath:
          'https://images.unsplash.com/photo-1547410828-723fb37ffffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      });
      server.create('continent', {
        title: 'Ásia',
        description: 'O continente mais antigo.',
        imagePath:
          'https://images.unsplash.com/photo-1589394857527-07c9c14fc87f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
      server.create('continent', {
        title: 'África',
        description: 'O continente mais antigo.',
        imagePath:
          'https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      });
      server.create('continent', {
        title: 'Oceania',
        description: 'O continente mais antigo.',
        imagePath:
          'https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      });
    },

    routes() {
      this.namespace = 'api';
      this.passthrough('/_next/**');
      this.get('/trip-types', (schema: AppSchema) => {
        return schema.all('tripType');
      });
      this.get('/continents', (schema: AppSchema) => {
        return schema.all('continent');
      });
    },
  });

  return server;
}
