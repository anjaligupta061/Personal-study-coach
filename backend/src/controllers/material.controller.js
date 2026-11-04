import asynchHandler from "../utils/asynchHandler.js";
import ApiResponse from "../utils/responseHandler.js";
import ApiError from "../utils/errorHandler.js";
import moongose from "mongoose";
import StudyMaterial from "../models/StudyMaterial.js";


const savePastedMaterials = asynchHandler(async (req, res) => {
    const {title, text} = req.body;
    if(!title || !text){
        throw new ApiError(400, "Title & text are required!");
    }

    const userId = "TEMPORARY_ID_REPLACE_IT";
    const materiail = StudyMaterial.create({
        userId,
        title : title.trim(),
        sourceType: "paste",
        status:'completed'
    })
    return res.status(201).json(
        new ApiResponse(201,materiail,"Material Saved Successfully")
    );
});

export  {savePastedMaterials};