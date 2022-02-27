const request = require('request')
const cheerio = require('cheerio')
let url = "https://www.espn.in/cricket/series/20365/game/1278685/india-vs-sri-lanka-2nd-t20i-sri-lanka-in-india-2021-22"
console.log("Before");
request(url,cb)

function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let $ = cheerio.load(html);
    let element = $(".description");
    let text = $(element[0]).text();
    let htmlData = $(element[0]).html();
    console.log(text);
    console.log(htmlData);
}

console.log("After");