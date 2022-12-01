import TuitModel from "./tuits-model.js";

export const findTuits = () => TuitModel.find();
export const createTuit = (tuit) => TuitModel.create(tuit);
export const deleteTuit = (tid) => TuitModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => TuitModel.updateOne({_id: tid}, {$set: tuit});