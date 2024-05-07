//gestion de usuarios
const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginDemo,
} = require("../controllers/userControllers");
const {
  userConditions,
  validateUserId,
  userValidationRules,
} = require("../middlewares/userValidation");
const router = express.Router();

//POST: /usuarios crear un usuario desde la base de datos
router.post("/", userConditions, userValidationRules, createUser);

// GET: /usuarios/ver-usuarios obtiene todos los ususarios
router.get("/ver-usuarios", getAllUsers);

// GET: /usuarios/:idUsuario obtiene un usuario
router.get("/:idUsuario", validateUserId, getUserById);

//PUT: /usuarios edita un usuario existente ne la base de datos
router.put(
  "/:idUsuario",
  userValidationRules,
  userConditions,
  validateUserId,
  updateUser
);

//DELETE: /usuarios/:id elimina un usuario existente
router.delete("/:idUsuario", validateUserId, deleteUser);

router.post("/loginDemo", loginDemo);

//exportacion por default de router
module.exports = router;
