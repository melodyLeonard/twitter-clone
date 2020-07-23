import Tweet from '../../models/Tweet';
import GraphQLDate from 'graphql-date';
import { requireAuth } from '../../services/auth';

export default {
  Date: GraphQLDate,

  //Queries
  getTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return await Tweet.findById(_id);
    } catch (error) {
      throw error;
    }
  },
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return await Tweet.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  getUserTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return await Tweet.find({ user: user._id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  //Mutations
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return await Tweet.create({ ...args, user: user._id });
    } catch (error) {
      throw error;
    }
  },

  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id })
      if (!tweet) {
        throw new Error('Not found')
      }
      Object.entries(rest).forEach(([key, value]) => {
        tweet[key] = value
      })

      return tweet.save()

    } catch (error) {
      throw error;
    }
  },

  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id })
      if (!tweet) {
        throw new Error('Not found')
      }
      await tweet.remove()
      return {
        message: 'Tweet has been deleted',
      };
    } catch (error) {
      throw error;
    }
  },
};
