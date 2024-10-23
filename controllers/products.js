const Product=require('../Models/product')

exports.getaddproducts=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postaddproducts=(req, res, next) => {
    const newproduct=new Product(req.body.title);
    newproduct.save();
    res.redirect('/');
  };

 exports.getproducts= (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
  });
    
  }