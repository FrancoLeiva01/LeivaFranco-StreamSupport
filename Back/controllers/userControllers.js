
const User = require("../models").usuarios;
const bcrypt = require("bcrypt");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ data: users });
};

const getUserById = (req, res) => {
  const { idUsuario } = req.params;
  const user = findByID(idUsuario);
  res.json({ data: user });
};

const createUser = async (req, res) => {
  const { usuario, password, email } = req.body;
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);
  const hash = hashSync(password, salt);
  const newUser = {
    user: usuario,
    password: hash,
    email,
  };
  try {
    await User.create(newUser);
    res.json({ msg: "Usuario creado exitosamente", data: newUser });
  } catch (error) {
    console.log(error);
    res.json("Error: User not created.");
  }
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
  const usersFilter = deleteByUserName(idUsuario);
  res.send(`usuario id: ${idUsuario}, eliminado`);
};


const loginDemo = (req, res) => {
  const { usuario, password } = req.body;
  console.log(password);
  const userBusqueda = findByUserName(usuario);
  console.log(userBusqueda);
  const valid = compareSync(password, userBusqueda.password); // true
  if (valid) {
    res.send("Logeado exitosamente");
  }
  res.send("Contraseña incorrecta");
};

//exportamos un objeto de funciones
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  loginDemo,
};