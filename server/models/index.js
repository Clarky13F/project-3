const User = require( './User.js' )
// const User = model('User', userSchema);
const Post = require('./Post');
<<<<<<< HEAD
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
=======
const Comment = require('./Comment');

module.exports = { User, Post, Comment };
>>>>>>> e5a3fb9e5119af20076d79a161d8a166e26463aa
