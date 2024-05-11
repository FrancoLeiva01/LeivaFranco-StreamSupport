const User = require("../models").User;
const bcrypt = require("bcrypt");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

// funciona
const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ data: users });
};

// funciona
const getUserById = async (req, res) => {
  const { idUsuario } = req.params;
  const user = await User.findByPk(idUsuario);
  res.json({ msg: `Usuario con id ${idUsuario}`, data: user });
};


// funciona
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

// no se actualiza bien
const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  await User.update(user, {
    where: {
      idUsuario: id,
    },
  });
  res.json({ msg: "Usuario actualizado correctamente" });
};

// funciona
const deleteUser = async (req, res) => {
  const { idUsuario } = req.params;
  await User.destroy({ where: { idUsuario: idUsuario } });
  res.json({ msg: "Usuario eliminado correctamente" });
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
