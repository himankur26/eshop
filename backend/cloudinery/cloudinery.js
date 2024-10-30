const cloudinary = require('cloudinary').v2
const fs = require('fs')
cloudinary.config({
    cloud_name:"dea40uwoc",
    api_key:"323843781934778",
    api_secret:"3QdpWJ72psHfSo2QgdL6L5bl_2s"
})
const uploadFile = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const result = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath)
        return result
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath)
        return null
    }
}
module.exports = uploadFile