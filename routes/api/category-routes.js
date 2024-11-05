const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  await Category.findAll({
    attributes: ["id", "category_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]
  })
  .then((categories) => {
    res.json(categories);
  })
});

router.get('/:id', async (req, res) => {
 await Category.findByPk(req.params.id, {
  attributes: ["id", "category_name"],
  include: [{
    model: Product,
    attributes: ["id", "product_name", "price", "stock", "category_id"],
  }]
 })
 .then((category) => {
    res.json(category);
 })
 .catch((err) => {
  res.json(err);
 });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
