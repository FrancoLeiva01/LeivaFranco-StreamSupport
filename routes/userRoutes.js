//gestion de usuarios clase mati
const express = require ("express");
const { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser 
} = require("../controllers/userControllers");
const router = express.Router();

// GET: /usuarios/ver-usuarios obtiene todos los ususarios
router.get ("/ver-usuarios", getAllUsers);

// GET: /usuarios/:idUsuario obtiene un usuario
router.get ("/:idUsuario", getUserById);

//POST: /usuarios crear un usuario desde la base de datos
router.post("/", createUser);
 
//PUT: /usuarios edita un usuario existente ne la base de datos
router.put ("/:idUsuario", updateUser);

//DELETE: /usuarios/:id elimina un usuario existente
router.delete ("/:idUsuario", deleteUser)

//exportacion por default de router
module.exports = router;