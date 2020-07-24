import faker from 'faker';

import Tweet from '../models/Tweet';
import User from '../models/User';

const TWEETS_TOTAL = 5;

const UER_TOTAL = 5;

export default async () => {
  try {
    await Tweet.remove();
    await User.remove();

    await Array.from({ length: UER_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        firstName: faker.name.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        lastName: faker.name.lastName(),
        avatar: `http://omerandomuer.me/api/potrait/boy${i}.jpg`,
        password: 'password',
      });
      await Array.from({ length: TWEETS_TOTAL }).forEach(async () => {
        return await Tweet.create({
          text: faker.lorem.sentence(),
          user: user._id,
        });
      });
    });
  } catch (error) {
    throw error;
  }
};
