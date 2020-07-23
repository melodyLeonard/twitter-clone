import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

mongoose.connection
  .once('open', () => console.log('Mongodb connected and runing'))
  .on('error', (err) => {
    throw err;
  });
