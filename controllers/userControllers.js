const { addUser, findByID, findAll, update, deleteByUserName,  findByUserName } = require("../model/User");
const { uuid } = require("uuidv4");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

const getAllUsers = (req, res) => {
  const users = findAll();
  res.json({ data: users });
};

const getUserById = (req, res) => {
  const { idUsuario } = req.params;
  const user = findByID(idUsuario);
  res.json({ data: user });
};

const createUser = (req, res) => {
  const { usuario, password, email } = req.body;
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);
  const hash = hashSync(password, salt);
  const newUser = {
    id: uuid(),
    user: usuario,
    password: hash,
    email,
  };

  addUser(newUser);
  res.json({ msg: "Usuario creado exitosamente", data: newUser });
};

const updateUser = (req, res) => {
  const { idUsuario } = req.params;
  const { usuario, password } = req.body;
  const newUser = {
    user: usuario,
    password,
  };
  update(idUsuario, newUser);
  res.json({ msg: "usuario editado correctamente" });
};

const deleteUser = (req, res) => {
  const { idUsuario } = req.params;
  const usersFilter = deleteByUserName(idUsuario)
  res.send(`usuario id: ${idUsuario}, eliminado`);
};

const loginDemo = (req, res) => {
  const { usuario, password } = req.body;
  console.log(password)
  const userBusqueda = findByUserName(usuario)
  console.log(userBusqueda)
  const valid = compareSync(password, userBusqueda.password); // true
  if (valid){
    res.send("Logeado exitosamente")
  }
  res.send("Contraseña incorrecta")

}


//exportamos un objeto de funciones
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  loginDemo
};
