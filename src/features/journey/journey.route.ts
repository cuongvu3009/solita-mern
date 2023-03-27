import express, { Router } from 'express';
import { journeyController } from './journey.controller';

class JourneyRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/journeys', journeyController.getAllJourneys);
    this.router.get('/journeys/:id', journeyController.getSingleJourney);

    return this.router;
  }
}

export const journeyRoutes: JourneyRoutes = new JourneyRoutes();
