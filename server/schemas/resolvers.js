const { User, Post } = require('../models');
const { signToken, AuthenticationError, UserInputError } = require('../utils/auth');
const { dateScalar } = require('./scalar');

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await User.findById(context.user._id)
    },
    getAllPosts: async () => {
      return await Post.find().populate('user', 'email');
    },
  },
  Mutation: {
    addUser: async (parent, argObj) => {
      try {
        const user = await User.create(argObj);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw UserInputError;
      }
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    createPost: async (parent, { concertName, message, image }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      try {
        const user = await User.findById(context.user._id);

        const post = await Post.create({
          concertName,
          message,
          image,
          user: user._id,
        });

        const populatedPost = await Post.findById(post._id).populate('user', 'email');

        return {
          _id: populatedPost._id,
          concertName: populatedPost.concertName,
          message: populatedPost.message,
          image: populatedPost.image,
          user: populatedPost.user,
          userEmail: populatedPost.user.email,
        };

      } catch (err) {
        console.error(err);
        throw UserInputError;
      }
    },
  },
};

module.exports = resolvers;
