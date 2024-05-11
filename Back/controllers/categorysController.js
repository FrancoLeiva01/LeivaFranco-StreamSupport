const Category = require("../models").Category;

// funciona
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id_category", "name"],
    });
    res.json({ data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

//funciona
const getCategoryById = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const category = await Category.findByPk(idCategoria);
    return res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

// funciona
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name: name });
    return res
      .status(201)
      .json({ message: "Categoria creada correctamente", data: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

//funciona
const updateCategory = async (req, res) => {
  const oldCategory = req.body;
  const { idCategoria } = req.params;

  try {
    await Category.update(
      {
        name: oldCategory.name,
      },
      {
        where: {
          id_category: idCategoria,
        },
      }
    );
    return res.json({
      message: "Categoria actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

// funciona
const deleteCategory = async (req, res) => {
  const { idCategoria } = req.params;
  try {
    await Category.destroy({
      where: {
        id_category: idCategoria,
      },
    });
    return res.json({
      message: "Categoria eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
