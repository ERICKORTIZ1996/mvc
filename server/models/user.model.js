const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required: [ true, "Username is required"]
        },
    email: {
        type: String,
        required: [
            true,
            "Email is required"
        ],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "email no valido "
        },
                   
},
age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "debes ser mayor de edad"]
},
password: {
    type: String,
    required: [true, "passw obligatorio"],
}
}, { timestamps: true

});

const User = mongoose.model('User', UserSchema);
module.exports = User;
