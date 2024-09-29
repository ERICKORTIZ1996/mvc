const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Asegúrate de importar jwt correctamente

const User = require('../models/user.model');

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        const token = jwt.sign({ userId: userFound._id }, 'secretKey', { expiresIn: '1h' }); // Genera el token JWT correctamente
        res.json({
            message: 'Login Exitoso',
            email: userFound.email,
            userName: userFound.userName,
            token: token
        });
    } else {
        res.status(400).json({ message: 'Login Fallido' }); // Corregido el mensaje de error
    }
}