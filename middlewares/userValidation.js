const { body, validationResult } = require("express-validator");

const userConditions =  [
    body("usuario").notEmpty().isString().withMessage("El Usuario es obligatorio"),
    body("password").notEmpty().withMessage("Necesitas una contraseña"),
    body("email").isEmail().withMessage("El email no es valido"),
  ];

const userValidationRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
};

module.exports = {userConditions, userValidationRules};