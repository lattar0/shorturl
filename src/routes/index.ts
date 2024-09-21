import { Express, json } from 'express';
import { urlRoutes } from './urlRoutes';

export const routes = (app: Express) => {
  app.use(json(), urlRoutes)
}
