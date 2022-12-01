import mongoose from 'mongoose';
import schema from './tuits-schema.js';

// create model from schema
// by passing the ModelName and schema
const TuitModel = mongoose.model('TuitModel', schema)  

export default TuitModel;