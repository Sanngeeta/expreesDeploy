const mongoose=require('mongoose');
const validator=require('validator')
const { ObjectId } = require('bson')


const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1/userAWSDB'
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
