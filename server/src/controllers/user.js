import getConnection from '../db';
import user from '../models/user';

async function getUser (req, res) {
  const connection = await getConnection();
  try {
    const users = await connection.query(user.getUser());
    res(users);
  } catch (error) {
    throw new Error(error);
  } finally {
    connection.end();
  }
}

export default { getUser };
