const mongoose = require('mongoose');
const Category = require('./models/category');
const {Product} = require('./models/product');

mongoose.connect('mongodb://localhost:27017/ecomm').then(()=> console.log("DB Connected"))

const categories = [
  { cid: 'cat1', name: 'Electronics' },
  { cid: 'cat2', name: 'Clothing' },
  { cid: 'cat3', name: 'Books' },
];

const products = [
  {
    pid: 'prod1',
    title: 'Smartphone',
    price: 19999,
    description: 'High-end smartphone with advanced features.',
    category: 'cat1',
  },
  {
    pid: 'prod2',
    title: 'T-Shirt',
    price: 999,
    description: 'Comfortable cotton t-shirt.',
    category: 'cat2',
  },
  {
    pid: 'prod3',
    title: 'Laptop',
    price: 59999,
    description: 'Powerful laptop for work and entertainment.',
    category: 'cat1',
  },
];


Category.insertMany(categories)
.then((insertedCategories)=> {
  const productsWithCategoryIds = products.map(product => {
    const category = insertedCategories.find(category => category.cid === product.category);
    return { ...product, category: category._id };
  })

  Product.insertMany(productsWithCategoryIds);
})