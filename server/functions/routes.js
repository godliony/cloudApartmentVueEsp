const PowermetersController = require('./controllers/PowermetersController')
const UsersController = require('./controllers/UsersController')
module.exports = (app) => {
    //power meter
    app.post('/powermeter/:powermeterId/', PowermetersController.create)
    app.put('/powermeter/:powermeterId', PowermetersController.put)
    app.get('/powermeter/:powermeterId', PowermetersController.index)
    app.delete('/powermeter/:powermeterId', PowermetersController.remove)
    //user
    app.post('/user', UsersController.create)
    app.put('/user/:userId', UsersController.put)
    app.get('/users', UsersController.index)
    app.get('/user/:userId', UsersController.show)
    app.delete('/user/:userId', UsersController.remove)
}