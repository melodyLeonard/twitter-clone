import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, { fullName, username, email, ...rest }) => {
    try {
      const [firstName, ...lastName] = fullName.split(' ');
      const emailInUse = await User.findOne({ email });
      if (emailInUse) {
        throw new Error('User already exit');
      }
      const userNameInUse = await User.findOne({ username });
      if (userNameInUse) {
        throw new Error('Username taken');
      }

      const user = await User.create({
        firstName,
        username,
        email,
        ...lastName,
        ...rest,
      });
      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },

  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('User do not exist');
      }

      // if (!user.authenticateUser(password)) {
      //   throw new Error('Incorrect user passord');
      // }
      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },

  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);
      return me;
    } catch (error) {
      throw error;
    }
  },
};
