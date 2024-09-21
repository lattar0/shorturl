import express from 'express';
import { databaseConnect } from './config/database';
import { routes } from './routes/index';

const connection = databaseConnect().then((connection) => {
  connection.on('error', (err) => {
    console.error('Connection error:', err)
  });
  
  connection.once('open', () => {
    console.log('Database connection success!')
  });
});

export const app = express();
routes(app)
