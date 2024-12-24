var express = require('express');
var router = express.Router();
const upload = require('../middleware/multer_middleware')
var productController = require("../controller/productController")
router.post(
    "/createProduct",
    upload.fields([
      {
        name: "productImage",
        maxCount: 1,
      },
    ]),
    productController.createProduct
  );
  router.get('/getProducts',productController.getProducts)
  router.get('/singleProduct/:id',productController.singleProduct)



module.exports = router;