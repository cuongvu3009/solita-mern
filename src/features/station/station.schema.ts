import { model, Schema } from 'mongoose';

const stationSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  FID: { type: String },
  ID: { type: String },
  Nimi: { type: String },
  Namn: { type: String },
  Name: { type: String },
  Osoite: { type: String },
  Adress: { type: String },
  Kaupunki: { type: String },
  Stad: { type: String },
  Operaattor: { type: String },
  Kapasiteet: { type: String },
  x: { type: String },
  y: { type: String }
});

const StationModel = model('stations', stationSchema, 'stations');

export { StationModel };
