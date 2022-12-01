import * as tuitsDao from "../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body
    newTuit.likes = 0
    newTuit.liked = false

    const insertedTuit = await tuitsDao.createTuit(newTuit)   // tuited inserted to database
    res.json(insertedTuit)
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()   // retreive data from database
    res.json(tuits)
}

// const findTuitById = (req, res) => {
//     const tid = parseInt(req.params.tid);   // need to convert string to int
//     const tuit = tuits.find( t => t._id === tid );
//     res.send(tuit);
// }

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid
    const updates = req.body         // get update content from HTTP body
    
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates)
    res.json(status)       // response with status
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid  
    const status = await tuitsDao.deleteTuit(tuitIdToDelete)
    
    res.json(status)
}

const TuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
//  app.get('/api/tuits/:tid', findTuitById);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;