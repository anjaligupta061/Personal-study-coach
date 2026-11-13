import axios from "axios";
import * as cheerio from "cheerio";
import ApiError from "./apiError";

const  extractWebsiteText = async (url)=>{
    const response = await axios.get(
        url,
        {timeout:10000}
    );
    
    const $ = cheerio.load(response);
    $('header','footer','nav','style','script','aside').remove();

    const extractedText = $('body').text()
    .replace(/\s+/g, " ")
    .trim();

    if(!extractedText) throw new ApiError(400,"Unable to extract text from this website");

    return extractedText;
}

export default extractWebsiteText;