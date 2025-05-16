
import  mongoose,{ Schema ,Document } from "mongoose";
export interface Message extends Document{
    content:string;
    createdAt:Date;

}
const MessageSchema : Schema<Message> =  new Schema({
     content:{
        type:String,
        required:true
     },
     createdAt:{
        type:Date,
        default:Date.now
     }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerifed:boolean;
    isAcceptingMessage:boolean;
    messages:Message[];
    createdAt:Date;
    updatedAt:Date;
}

const UserSchema: Schema<User> = new Schema ({

    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true,
        trim:true,
        minlength:3,
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/.+\@.+\..+/,"Please provide a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    verifyCode:{
        type:String,
        required:[true,"Please provide a verification code"],
    },
    isVerifed:{
        type:Boolean,
        default:false
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Please provide a verification code expiry date"]
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    messages:[MessageSchema],
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const UserModel =(mongoose.models.User  as mongoose.Model<User>)|| mongoose.model<User>("User",UserSchema);

export default UserModel;
