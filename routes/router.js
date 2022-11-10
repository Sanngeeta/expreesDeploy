const exppress = require("express");

const {
  profileLogin,
  allProfile,
  profileSignup,
  getProfileById,
} = require("../controller/profile");
const Auth = require("../authentication/auth-jwt");

const {
  getAllListFiles,
  deleteFile,
  downloadFile,
} = require("../controller/uploadFiles");
const router = exppress.Router();
// // Clients APIs
router.post("/profile/create", profileSignup);
router.post("/profile/login", profileLogin);
router.get("/profile/all", allProfile);

router.get('/profile/details/:id',getProfileById)



// //auload images
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');



let s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: 'AKIA3APL7AFKJ4VOTFMH',
    secretAccessKey: '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',
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});



const upload = multer({


  storage: multerS3({
    bucket: "expressnode-app-bucket",
    s3: s3,
    // acl: "public-read", //access publicly /Access control for the file	
    key: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  }),
});


router.post("/file/upload", upload.single('file'), (req, res) => {
  console.log(req.file, 'dcggg');
  res.send({
    message: "Successfully uploaded",
    file: req.file.location,
  });

})







router.get('/', (req, res) => {
  res.send({
    message: 'Welcome to my page.This is my first deploy api on AWS THANK YOU!........'
  })
})

router.get("/files", getAllListFiles);
router.delete("/file/delete/:filename", deleteFile);
router.get("/file/download/:filename", downloadFile);

module.exports = router; 
