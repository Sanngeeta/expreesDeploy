const mongoose=require('mongoose');
const validator=require('validator')
const { ObjectId } = require('bson')



// const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://user:user@cluster0.kkcyd7x.mongodb.net/userDB?retryWrites=true&w=majority'
// mongoose.connect(MONGO_URL,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     // useCreateIndex:true,
//     // useFindAndModify:false
// })
// .then(()=>{
//     console.log('DB Connection...');
// }).catch((err)=>{
//     console.log(err); 
// })

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/userAWSDB'
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB Connection...');
}).catch((err)=>{
    console.log(err);
})
 
const profile=mongoose.Schema({
    name:{
        type:String,
        required:true

    },
   
    phoneNumber: {
        type: String,
        // required: [true, 'User phone number required'],
        // validate: {
        //     validator: function(v) {
        //     return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        // },
    },
    email:{
        type:String,
        // required:true,
        // unique:[true,'Email id already exits'],
        // // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error ('Email is invalid!')
        //     }
        // }
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'Your password be bhi 8 characters']
    },  

   
   
    created_at:{
        type:Date
    },
    
   

}, { collection: 'profile' })

const Profile= mongoose.model('profile',profile)


module.exports=Profile


// [mongodb-org-4.0]
// name=MongoDB Repository baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/ gpgcheck=1 enabled=1 gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc 
// sudo rm -rf /etc/yum.repos.d/mongod*
// sudo yum clean all

// https://800226134398.signin.aws.amazon.com/console


// git push https://git-codecommit.us-east-2.amazonaws.com/v1/repos/deployExpreesApiRepo --all

