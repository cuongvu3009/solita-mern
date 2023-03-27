import { model, Schema } from 'mongoose';

const journeySchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  Departure: { type: String },
  Return: { type: String },
  DepartureStationId: { type: Number },
  DepartureStationName: { type: String },
  ReturnStationId: { type: Number },
  ReturnStationName: { type: String },
  CoveredDistance: { type: Number },
  Duration: { type: Number }
});

const JourneyModel = model('journeys', journeySchema, 'journeys');

export { JourneyModel };
