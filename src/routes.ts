import { Application } from 'express';
import { journeyRoutes } from './features/journey/journey.route';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, journeyRoutes.routes());
  };
  routes();
};
