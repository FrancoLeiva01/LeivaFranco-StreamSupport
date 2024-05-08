const { body, validationResult } = require("express-validator");

const productConditions = [
  body("name")
    .notEmpty()
    .isString()
    .withMessage("Nombre del producto invalido"),
  body("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numerico"),
];

const productValidationRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { productConditions, productValidationRules };
