//gestion de usuarios clase mati

const { addUser } = require("../model/User");

const getAllUsers = (req, res) =>{
  res.send("lista de usuarios");
}

const getUserById = (req, res) => {
  const { idUsuario } = req.params;
  res.send(`usuario id: ${idUsuario}`)
}

const createUser =(req, res) => {
    const { usuario, password } = req.body;
    const newUser = {
      usuario, 
      password,
    };
    addUser(newUser)
    res.send("usuario creado exitosamente");
  };

const updateUser = (req, res) => {
  const { idUsuario } = req.params;
  res.send(`usuario id: ${idUsuario}, editado`)
}

const deleteUser = (req, res) => {
  const { idUsuario } = req.params;
  res.send(`usuario id: ${idUsuario}, eliminado`)
};

 

  //exportamos un objeto de funciones
  module.exports = {
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers,
    createUser,
  }