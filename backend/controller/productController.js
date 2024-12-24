const db = require('../modal/product.modal')
const uploadFile = require('../cloudinery/cloudinery')
module.exports = {
    createProduct: async(req,res) =>{
        try {
           // const {productName,originalPrice,discountPrice,productDescription,productQuantity,productCategory,productBrand,productRating,productImage} = req.body
            const productImageLocalPath = req.files?.productImage[0]?.path
            if (!productImageLocalPath) {
                return res.status(400).json({
                    message:"product image is required"
                })
            }
            const productImage = await uploadFile(productImageLocalPath)
            if (!productImage) {
                return res.status(500).json({
                    message:"failed to upload in cloudinary"
                
            })
        }
            const product = await db.create({
                productName: req.body.productName,
                originalPrice: req.body.originalPrice,
                discountPrice: req.body.discountPrice,
                productDescription: req.body.productDescription,
                productQuantity: req.body.productQuantity,
                productCategory: req.body.productCategory,
                productBrand: req.body.productBrand,
                productRating: req.body.productRating,
                productImage: productImage.url

            })
            res.status(200).json({
                status:200,
                success:true,
                message:"product added",
                body:product

            })
        } catch (error) {
            console.log(error)
        }
    },
getProducts: async (req,res) => {
    try {
        const product = await db.find({})
        res.status(200).json({
            status:200,
            success:true,
            message:"products fetched",
            body:product

        })
    } catch (error) {
        console.log(error,"failed fetching products")
    }
},
singleProduct: async (req,res) => {
    try {
        const product = await db.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                message:"product not found"
            })
        }
        res.status(200).json({
            status:200,
            success:true,
            message:"product fetched",
            body:product

        })
    } catch (error) {
        console.log(error,"failed fetching products")
    }
}
}