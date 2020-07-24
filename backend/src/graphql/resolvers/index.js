import GraphQLDate from 'graphql-date';
import User from '../../models/User';
import TweetResolvers from './tweet-resolvers';
import UserResolver from './user-resolver';

export default {
  Date: GraphQLDate,

  Tweet: {
    user: ({ user }) => User.findById(user),
  },

  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    getUserTweets: TweetResolvers.getUserTweets,
    //user me query
    me: UserResolver.me,
  },

  Mutation: {
    //Tweets
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,

    //Users
    signup: UserResolver.signup,
    login: UserResolver.login,
  },
};
