import mongoose from 'mongoose';

export function connectDB(URI){

  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', (error) => {
        reject(error);
      })
      .on('close', () => {
        console.log('DB connection is closed.')
      })
      .once('open', () => {
        resolve(mongoose.connections[0]);
      });
      mongoose.connect(URI);
  });

}
