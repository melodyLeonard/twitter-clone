import moongose, { Schema } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      minlength: [5, 'The text is too short'],
      maxlength: [150, 'Text is too long']
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    favoriteCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  },
);

export default moongose.model('Tweet', TweetSchema);
