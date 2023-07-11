import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    done:{
        type:Boolean,
        default:false
    }
})


export default mongoose.model("user", UserSchema)
