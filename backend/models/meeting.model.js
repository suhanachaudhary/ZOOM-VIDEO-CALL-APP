import mongoose from "mongoose";
const {Schema}=mongoose;
const meetingSchema=new Schema({
    user_id:{

        type:String,
    },
    meetingCode:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true,
    }
});
const Meeting=mongoose.model("Meeting",meetingSchema);
export { Meeting };
