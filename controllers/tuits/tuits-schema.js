import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: {type: String, require: true},
    liked: {type: Boolean, default: false},
    likes: Number,
}, {collection: 'tuits'})           // collection name where tuits are stored in tuiter database

export default schema;