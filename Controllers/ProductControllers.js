const Product = require('../Models/Product')

module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price
      })
      res.json(product)
    } catch (e) {
      res.json(e.message)
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id)
      res.json('Удалено')
    } catch (e) {
      res.json(e.message)
    }
  },
  getProduct: async (req, res) => {
    try {
      const products = await Product.find()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
}