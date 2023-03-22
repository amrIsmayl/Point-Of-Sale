const { Schema, model, Types } = require('mongoose');

const schema = Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
        trim: true, // to remove all spaces between words
        minlength: [3, 'too short user name']
    },
    lastName: {
        type: String,
        required: [true, 'last name is required'],
        trim: true, // to remove all spaces between words
        nimlength: [4, 'too short last name']
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
        trim: true,
        minlength: [16, ' minimum age is 16 years'],
        maxlength: [80, ' maximum age is 80 years']
    },
    email: {
        type: String,
        required: [true, ' email is required'],
        trim: true,
        unique: [true, ' email must be unique']
    },
    phone: {
        type: String,
        required: [true, ' phone number is required'],
    },
    password: {
        type: String,
        required: [true, ' password is required'],
        minlength: [4, ' minimum password length is 4 characters']
    },
    passwordChangeAt: Date,
    profileImage: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],// enum to Just choose between the two options 
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    wishlist: {
        type: Object
    },
    addresses: [{
        name: String,
        street: String,
        city: String,
        phone: String
    }]
}, { timestamps: true }) // timestamps to create ( createdAt and updatedAt) by default

module.exports = model('user', schema)