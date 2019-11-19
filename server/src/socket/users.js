import faker from 'faker';

const users = [];

const addUser = item => {
  const image = faker.image.avatar();
  let { id, name, room } = item;
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    user => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: 'Username is already taken' };
  }

  const user = { id, name, room, image };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

export { addUser, removeUser, getUser };
