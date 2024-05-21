//gestion de usuarios
const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controllers/userControllers");
const {
  userConditions,
  userValidationRules,
} = require("../middlewares/userValidation");
const { requireAuth } = require("../middlewares/requireAuth");
const router = express.Router();

//POST: /usuarios crear un usuario desde la base de datos
router.post("/", userConditions, userValidationRules, requireAuth, createUser);

// GET: /usuarios/ver-usuarios obtiene todos los ususarios
router.get("/ver-usuarios", getAllUsers);

// GET: /usuarios/:idUsuario obtiene un usuario
router.get("/:idUsuario", requireAuth, getUserById);

//PUT: /usuarios edita un usuario existente ne la base de datos
router.put(
  "/:idUsuario",
  userValidationRules,
  userConditions,
  requireAuth,
  updateUser
);

//DELETE: /usuarios/:id elimina un usuario existente
router.delete("/:idUsuario", requireAuth, deleteUser);

router.post("/login", loginUser);

router.post("/register", registerUser);

//exportacion por default de router
module.exports = router;
