const animals = require("../controllers/animals.js");
const getAnimals = (req, res) => {
  animals.getAll()
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(200).send({ "msg: this page is empty" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};
const getanimal = (req, res) => {
  const id = req.params.id;
  HomeProducts.getById(id)
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(404).send({ "msg: product not found" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};
const createAnimal = (req, res) => {
  const { name, Especie, Tutora, Motivo, Hospitalizacion, Tratamiento, Estado } = req.body;
  const product = new HomeAnimals(name, Especie, Tutora, Motivo, Hospitalizacion, Tratamiento, Estado);
  product
    .create()
    .then(() => res.status(201).send({ data: product }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};
const updateAnimal = (req, res) => {
  const id = req.params.id;
  const { name, type, description, price, image } = req.body;
  const product = new HomeProducts(name, type, description, price, image);
  product
    .update(id)
    .then(() => res.status(200).send({ data: product }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};
const deleteAnimal = (req, res) => {
  const id = req.params.id;
  HomeProducts.delete(id)
    .then(() => {
      res.status(200).send({ msg: "product deleted" });
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};
module.exports = { getProducts, getProduct, deleteProduct, createProduct, updateProduct };