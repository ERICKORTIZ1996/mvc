const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

module.exports.createUser = async (request, response) => {
    const { userName, email, age, password } = request.body;
    console.log(request.body);
    if (!userName || !email || !age || !password) {
        return response.status(400).json({ message: "no has llenado todos los campos" });
    } else if (await User.findOne({ email })) {
        response.status(400).json({ message: "el usuario ya existe" });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        User.create({
            userName, email, age, password: hashedPassword
        })
        .then(user => response.status(200).json({email:user.email,userName:user.userName,age: user.age,password:user.password,message: "Usuario creado"}))
        .catch(err => response.status(400).json(err));
        console.log('Usuario creado');
    }
}
const generateToken = (id) => {return jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: '30d'})}
module.exports.getAllUsers = (_, response) => {
    User.find({})
    .then(users => response.json(users))
    .catch(err => response.json(err))
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
    .then(user => response.json(user))
    .catch(err => response.json(err))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedUser => response.json(updatedUser))
    .catch(err => response.json(err))
}


module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
    .then(userDeleted => response.json(userDeleted))
    .catch(err => response.json(err))
}
    