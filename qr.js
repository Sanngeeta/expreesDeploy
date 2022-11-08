const qr = require('qrcode');
  
let data = {
    id: 2,
    name: "sangeeta",
    email: "user@gmail.com" 
};
  
let strData = JSON.stringify(data)
  
qr.toString(strData, {type:'terminal'},
                    function (err, code) {
   
    if(err) return console.log("error occurred")
   
    // console.log(code)    
});
   
qr.toDataURL(strData, function (err, code) {
    if(err) return console.log("error occurred")
   
    console.log(code) 
})





//key
// team+1-at-518033198055
// KXAYsRZ6jfHNdl5fPmPUY9xt68wpeUMajLAwqSGAvgw=

// git push https://git-codecommit.us-east-1.amazonaws.com/v1/repos/expressApiRepo --all
// git push https://git-codecommit.us-east-1.amazonaws.com/v1/repos/expressApiRepo --tags

// git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/myCloneExpressRepo


// User name,Password,Access key ID,Secret access key,Console login link
// nodejs-aws-s3-multer,,AKIAXRHJPJPTXXMGCZUD,O58chJsCpI+1orLAO/VM4mAzTkhE5ja+MBCunwJ/,https://518033198055.signin.aws.amazon.com/console




// teamLeader-at-800226134398
// QI4oHReUvLOVFaoAqD3+SNy+PnvpoVwAeKoeS9pWauE=


//sudo yum erase codedeploy-agent
// cd /opt
// ls
// sudo rm -r codedeploy-agent/
// cd
//ls
// sudo rm -r express-app/
// sudo ./install auto
//push the code again  ////


// [mongodb-org-5.0]
// name=MongoDB Repository
// baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/5.0/x86_64/
// gpgcheck=1
// enabled=1
// gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc



// AKIA3UUJRZF7GE4G5WGN
// K21P48KRz6Dd8KRVY/w2mMWZ1wCvKrj+QwETq1jV


// git push https://git-codecommit.us-east-2.amazonaws.com/v1/repos/deployExpreesApiRepo --all


//AKIA3UUJRZF7OBIOYL7Z
//oqpYUmB3U4ssoQEC0PRQeMC5U2LYfzgGpcSBmwLq