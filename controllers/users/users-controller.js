import people from './users.js';

let users = people

const UserController = (app) => {
    app.get('/api/users', findUsers)               // Retrieve data from server
    app.get('/api/users/:uid', findUsersById)      
    app.post('/api/users', createUser)             // Send data to server
    app.delete('/api/users/:uid', deleteUser)     // Delete data from server
    app.put('/api/users/:uid', updateUser)        // Update user info to server
}

// Send query parameters to server
// ex: http://localhost:4000/api/users?type=STUDENT
const findUsers = (req, res) => {
    // retrieve type parameter from query
    const type = req.query.type
    // // if type param in query
    if (type) {
        const usersOfType = users.filter( u => u.type === type )
        res.json(usersOfType)
        return
    }
    // otherwise response with all users
    res.json(users)
}

// Send path parameters to server
// ex:  http://localhost:4000/api/users/123 
const findUsersById = (req, res) => {
    // get uid from request parameter map
    const uid = req.params.uid;
    // find user that matches the uid
    const user = users.find(u => u._id === uid)

    res.json(user)
}

// Map URL pattern to handler function
const createUser = (req, res) => {
    const newUser = req.body
    console.log(newUser)
    newUser._id = (new Date()).getTime() + ''
    users.push(newUser)
    res.json(newUser)
}

// delete data from server 
const deleteUser = (req, res) => {
    // get user id from path parameter
    const uid = req.params['uid'] 
    users = users.filter(u => u._id !== uid)  // check if uid is number type!
    res.sendStatus(200)
}

// update data to server
const updateUser = (req, res) => {
    // get user id from path parameter
    const uid = req.params.uid
    // BODY includes the updated fields
    const updates = req.body
    // create new array for updated user
    users = users.map( usr => 
        usr._id === uid ? {...usr, ...updates} : usr)
    res.sendStatus(200)
}


export default UserController;