const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

//funciona
const updateUser = async (req, res) => {
  const { idUsuario } = req.params;
  const user = req.body;
  await User.update(user, {
    where: {
      idUsuario: idUsuario,
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

// const loginDemo = (req, res) => {
//   const { user, password } = req.body;
//   console.log(password);
//   const userBusqueda = findByUserName(user);
//   console.log(userBusqueda);
//   const valid = compareSync(password, userBusqueda.password);
//   if (valid) {
//     res.send("Logeado exitosamente");
//   }
//   res.send("Contraseña incorrecta");
// };

const registerUser = async (req, res) => {
  const newUser = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    await User.create({ ...newUser, password: hashedPassword });
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ where: { user: username } });
    if (!user) {
      return res.status(404).json({ message: "Credenciales invalidas" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }
    const token = jwt.sign(
      {
        test: "test",
      },
      "secret",
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    return res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

//exportamos un objeto de funciones
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  registerUser,
  loginUser,
};
