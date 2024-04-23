const { readFileJSON, writeFileJSON } = require(".");
const dbPath = "users.json";

const findAll = () => {
  const data = readFileJSON(dbPath);
  return data;
};

const findByID = (id) => {
  const data = readFileJSON(dbPath);
  const user = data.find((userDb) => userDb.id === id);
  return user;
};

const findByUserName = (userBusqueda) => {
  const data = readFileJSON(dbPath);
  const user = data.find((userDb) => userDb.user === userBusqueda);
  return user;
};

// añade un usuariio a la base de datos
const addUser = (user) => {
  const data = readFileJSON(dbPath);
  data.push(user);
  writeFileJSON(dbPath, data);
};

const update = (id, newUser) => {
  const data = readFileJSON(dbPath);
  const index = data.findIndex((userDb) => userDb.id === id);
  data[index] = {
    ...data[index],
    ...newUser,
  };
  writeFileJSON(dbPath, data);
};

const deleteByUserName = (userBusqueda) => {
  const data = readFileJSON(dbPath);
  const usersFilter = data.filter((userDb) => userDb.id !== userBusqueda);
  writeFileJSON(dbPath, usersFilter);
  return usersFilter;
};


module.exports = {
  findAll,
  findByID,
  addUser,
  update,
  deleteByUserName,
  findByUserName,
};
