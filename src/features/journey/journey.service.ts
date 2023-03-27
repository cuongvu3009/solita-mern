import { JourneyModel } from './journey.schema';

const getAll = async (_page: number, size: number) => {
  try {
    return JourneyModel.find({}).skip(_page).limit(size);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

const getOne = async (id: string) => {
  try {
    return JourneyModel.findById(id);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default {
  getAll,
  getOne
};
