const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require('aws-sdk')


aws.config.update({
  accessKeyId: 'AKIA3UUJRZF7FGJX2MNU',
   secretAccessKey: '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',
   region: "us-east-1",

})
 
const s3=new aws.S3()
  
 
exports.getAllListFiles = async (req, res) => {
  console.log('runnniiiii');
  files = await s3.listObjectsV2({ Bucket: "s3-express-app-bucket" }).promise();
  file=files.Contents.map(item=>item.Key)
  res.send(file);
};




exports.downloadFile = async (req, res) => {
  console.log(req.params.filename);
  downloadedFile = await s3.getObject({ Bucket: "s3-express-app-bucket", Key: req.params.filename }).promise();
  res.send(downloadedFile.Body);
};
 


 
exports.deleteFile = async (req, res) => {
  const filename= req.params.filename
  delFile= await s3.deleteObject({
    Bucket: "s3-express-app-bucket",
    Key:filename,
  }).promise();
 
  res.send({delFile:req.params.filename,message: "File Deleted Successfully"});
  
};



