import express from 'express'
import HelloController from './controllers/hello-controller.js'
import UserController from './controllers/users/users-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js'
import cors from 'cors'    // cross origin resource sharing among domains
import mongoose from 'mongoose'

const CONNECTION_STRING = 'mongodb+srv://cs5610:cs5610@cluster0.4l3ujxx.mongodb.net/?retryWrites=true&w=majority'
|| 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())            // configure cors 
app.use(express.json())    // parse JSON from http request body

TuitsController(app)
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000);