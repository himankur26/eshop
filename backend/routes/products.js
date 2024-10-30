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
module.exports = router;