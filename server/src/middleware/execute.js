import connectDB, { optionQuery } from '../db';

export default async (res, sql, body = {}) => {
  try {
    const connection = await connectDB();
    const result = await connection.execute(sql, body, optionQuery);
    connection.close();
    const rows = result.rows || [];
    res(rows);
  } catch (err) {
    throw new Error(err);
  }
};
