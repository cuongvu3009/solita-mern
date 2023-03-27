import { BadRequestError } from '@root/shared/error-handler';
import { Request, Response, NextFunction } from 'express';
import journeyService from './journey.service';

class JourneyController {
  public getAllJourneys = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, size } = req.query;
      const _page = +page! * +size! - +size!;
      const response = await journeyService.getAll(_page, Number(size));
      return res.json(response);
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request'));
      } else {
        next(error);
      }
    }
  };

  public getSingleJourney = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await journeyService.getOne(id);
      res.json(response);
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request'));
      } else {
        next(error);
      }
    }
  };
}

export const journeyController = new JourneyController();
