import mongoose from "mongoose";
const speedSchema = new mongoose.Schema(
{
    CurrentSpeed:{
    type:String,
    required:true,
},
speedLimit:{
    type:String,
    required:true,
    default:"60",
},
speedStatus:{
    type:String,
    required:true,
    default:"Normal",
},
},
{timestamps:true}
);
const speedModel=mongoose.model("Speed",speedSchema);
export default speedModel;
// speedModel.createIndexes({ CurrentSpeed: 1, speedLimit: 1 }, { unique: true });