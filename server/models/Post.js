const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  concertName: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Post = model('Post', postSchema);

module.exports = Post;