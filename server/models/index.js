const User = require( './User.js' )
// const User = model('User', userSchema);
const Post = require('./Post');
module.exports = { User, Post };
const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema(
    {
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    },
    {
    toJSON: {
        getters: true,
        virtuals: true,
    },
    }
    );

module.exports = { User };
