const UserController = require('../controllers/user.controller');
const loginController = require('../controllers/login.controller'); 
const {protect} = require('../Midleware/auth.midleware');
module.exports = function(app){
    app.post('/api/user/new', UserController.createUser);
    app.get('/api/users',protect, UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id/', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
    app.post('/api/login',loginController.loginUser);
}
