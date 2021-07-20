// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProducts = require('../seeds/product-seeds');

// Products belongsTo Category
Product.belongTo(Category)

// Categories have many Products
Category.haveMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.haveMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    }
})
// Tags belongToMany Products (through ProductTag)
Tag.belongtoMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    }
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};