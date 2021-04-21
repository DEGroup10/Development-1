const Product = require('../../models/store/product');
const slugify = require('slugify')



exports.createProduct = (req, res) => {

    const {
        name, price, description, category, quantity, createdBy
    } = req.body;   

   
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        category,
        createdBy: req.store._id,

    });

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            res.status(201).json({ product });
        }
    }));

}