import mongoose from "mongoose";
import moongose from "mongoose";

const generatedContentSchema = new moongose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    materialId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "studyMaterial",
        required: true
    },
    type:{
        type:String,
        enum:["summary","notes","quiz","flashcards"],
        required:true
    },
    content:{
        type : moonose.Schema.Types.Mixed,
        required:true
    }
},{
    timestamps: true
    }
);

const GeneratedContent = new moongose.Model("GeneratedContent",generatedContentSchema);
export  default  GeneratedContent;
