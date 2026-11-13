import moongose from "mongoose";
import mongoose from "mongoose";

const studyMaterialSchema = new mongoose.Schema({
    userId : {
        // type: moongose.Schema.Types.ObjectId,
        // ref: "User",
        type:String,
        // required: true,

    },
    title :{
        type: String,
        required: true,
        trim: true,
    },
    sourceType:{
        type: String,
        enum : ["link","upload","paste"],
        required: true,
    },
    sourceUrl: {
        type: String,
        default: null
    },
    fileUrl: {
        type: String,
        default: null
    },
    extractedText:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["processing","complete","failed"],
        default: "processing"
    }
},
    {timestamps: true}
    );

const studyMaterial = mongoose.model("StudyMaterial",studyMaterialSchema);
export default studyMaterial;
