import mongoose from 'mongoose';

export async function databaseConnect() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}
