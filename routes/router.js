const exppress = require("express");
// const {
//   createCategory,
//   allCategory,
//   updateCategory,
//   deleteCategoryById,
//   getCategoryByID,
// } = require("../controller/category");
// const {
//   profileLogin,
//   allProfile,
//   profileSignup,
// } = require("../controller/profile");
// const Auth = require("../authentication/auth-jwt");
// const { getOders, orderCreate, getOrderById } = require("../controller/order");
// const {
//   organiz_Signup,
//   get_profileOrg,
// } = require("../controller/organization");
// const {
//   // uploadFile,
//   getAllListFiles,
//   deleteFile,
//   downloadFile,
// } = require("../controller/uploadFiles");
const router = exppress.Router();
// // Clients APIs
// router.post("/profile/create", profileSignup);
// router.post("/profile/login", profileLogin);
// router.get("/profile/all", allProfile);

// // Category APIs
// router.post("/categorys/create", Auth, createCategory);
// router.get("/", Auth, allCategory);
// router.put("/categorys/update/:id", Auth, updateCategory);
// router.delete("/categorys/:id", Auth, deleteCategoryById);
// router.get("/categorys/details/:id", Auth, getCategoryByID);

// router.get("/orders", Auth, getOders);
// router.post("/orders/post", Auth, orderCreate);
// router.get("/orders/:id", Auth, getOrderById);

// // organization
// router.post("/organiz", organiz_Signup);
// router.get("/organiz/orgProfile", get_profileOrg);








// //auload images
// const { S3Client } = require('@aws-sdk/client-s3');
// const multer = require('multer');
// const multerS3 = require('multer-s3');



// let s3 = new S3Client({
//   region: "ap-northeast-1",
//   credentials: {
//     accessKeyId: 'AKIAXRHJPJPTWZZQETF6',
//     secretAccessKey: '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',
//   },
//   sslEnabled: false,
//   s3ForcePathStyle: true,
//   signatureVersion: 'v4',
// });


// const upload = multer({


//   storage: multerS3({
//     bucket: "s3-express-app-bucket",
//     s3: s3, 
//     acl: "public-read", //access publicly /Access control for the file	
//     key: (req, file, cb) => {
//       cb(null, Date.now()+file.originalname);
//     },
//   }),
// });


// router.post("/file/upload",upload.single('file'), (req, res) => { 
//   console.log(req.file, 'dcggg');
//   res.send({
//     message: "Successfully uploaded",
//     file: req.file.location, 
//   });

// })






  
router.get('/',(req,res)=>{
  res.send({
    message:'welcome to my page'
  })
})

// router.get("/files", getAllListFiles);
// router.delete("/file/delete/:filename", deleteFile);
// router.get("/file/download/:filename", downloadFile);

module.exports = router; 
