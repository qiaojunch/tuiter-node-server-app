import posts from "./tuits.js"

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = parseInt((new Date()).getTime() + "")
    newTuit.likes = 0
    newTuit.liked = false
    tuits.push(newTuit)
    res.json(newTuit)
}
const findTuits  = (req, res) => {
    res.json(tuits)
}
const findTuitById = (req, res) => {
    const tid = parseInt(req.params.tid);   // need to convert string to int
    const tuit = tuits.find( t => t._id === tid );
    res.send(tuit);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = parseInt(req.params.tid)
    const updates = req.body         // get update content from HTTP body
    const tuitIndex = tuits.findIndex( t => t._id === tuitIdToUpdate)
    tuits[tuitIndex] = {
        ...tuits[tuitIndex], ...updates
    }
    console.log(tuits[tuitIndex])
    res.json(tuits[tuitIndex])       // response with the updated tuit
}

const deleteTuit = (req, res) => {
    const tuitId = parseInt(req.params.tid)
    tuits = tuits.filter( t => t._id !== tuitId )
    console.log(tuits)
    res.sendStatus(200)

}

const TuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.get('/api/tuits/:tid', findTuitById);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}


export default TuitsController;