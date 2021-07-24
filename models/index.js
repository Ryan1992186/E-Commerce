// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProducts = require('../seeds/product-seeds');

// Products belongsTo Category
Product.belongTo(Category, {
    foreignKey: 'category_id'
});

// Categories have many Products
Category.haveMany(Product, {
    foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.haveMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    }
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};