import mysql from 'promise-mysql';
import config from '../config';

export default () => {
  return new Promise((resolve, reject) => {
    mysql.createConnection(config.db).then(
      connection => {
        resolve(connection);
      },
      error => {
        reject(error);
      }
    );
  });
};
