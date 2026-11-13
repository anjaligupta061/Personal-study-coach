import asynchHandler from "../utils/asynchHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
// import moongose from "mongoose";
import StudyMaterial from "../models/StudyMaterial.js";
import extractWebsiteText from "../utils/extractWebsiteText.js";
import studyMaterial from "../models/StudyMaterial.js";


const savePastedMaterials = asynchHandler(async (req, res) => {
    console.log("checking");
    console.log(req.body);
    const {title, text} = req.body;
    if(!title || !text){
        throw new ApiError(400, "Title & text are required!");
    }

    const userId = "TEMPORARY_ID_REPLACE_IT";
    const materiail = await StudyMaterial.create({
        // userId , 
        title : title.trim(),
        extractedText : text.trim(),
        sourceType: "paste",
        status:'complete'
    })
    return res.status(201).json(
        new ApiResponse(201,materiail,"Material Saved Successfully")
    );
});

const saveLinkMaterial  = asynchHandler(async (req,res)=>{
        const {title , url } = req.body;
        
        if(!title || !url ) throw new ApiError(400 , "Title and URL required");

        let extractedText = await extractWebsiteText(url); 

        const material = await studyMaterial.create({
            title,
            sourceType:"link",
            sourceUrl:url.trim(),
            extractedText,
            status : "complete"

        });

          return res.status(201).json(
        new ApiResponse(201, material, "Link material saved successfully")
    );

});

export  {savePastedMaterials , saveLinkMaterial };