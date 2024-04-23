//gestion de usuarios clase mati
const express = require ("express");
const { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser,
    loginDemo 
} = require("../controllers/userControllers");
const { userConditions, userValidationRules } = require("../middlewares/userValidation");
const router = express.Router();

//POST: /usuarios crear un usuario desde la base de datos
router.post("/", userConditions, userValidationRules, createUser);

// GET: /usuarios/ver-usuarios obtiene todos los ususarios
router.get ("/ver-usuarios", getAllUsers);

// GET: /usuarios/:idUsuario obtiene un usuario
router.get ("/:idUsuario", getUserById);

//PUT: /usuarios edita un usuario existente ne la base de datos
router.put ("/:idUsuario", updateUser);

//DELETE: /usuarios/:id elimina un usuario existente
router.delete ("/:idUsuario", deleteUser)

router.post ("/loginDemo", loginDemo)



//exportacion por default de router
module.exports = router;