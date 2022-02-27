//requiring request 
const request = require('request')
//requiring cheerio
const cheerio = require('cheerio')
//url of the website for web scrapping
let url = "https://www.worldometers.info/coronavirus/";

console.log("Before");
//getting request
request(url,cb);
//extracting html from websites
function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        extractHTML(html);
    }
}
//extracting Process
function extractHTML(html){
    let $ = cheerio.load(html)
    //all element which contains maincounter-wrap id will be stored in elementArr
    let elementArr = $("#maincounter-wrap");
    //loop through element array and extracting text
    for(let i=0;i<elementArr.length;i++){
        let data = $(elementArr[i]).text();
        console.log(data);
    }
}

console.log("After");