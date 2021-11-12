const DayNightService = require("../Services/DayNight.service.js");
var getPixels = require("get-pixels") //Image to get pixels from Image URL


function CheckIfImageExistsAndGetPixels (ImageUrl)  {
    return new Promise((resolve, reject) => {
      getPixels(ImageUrl, function(err, res) {
        if(err !== null) {reject("400"); return}
        const pixels=[0,0,0,0];
        const datalength = res.data.length;
        for(var i=0; i < datalength; i+=4){
          pixels[0]+= res.data[i]; //R
          pixels[1]+= res.data[i+1]; //G
          pixels[2]+= res.data[i+2]; //B
          pixels[3]+= res.data[i+3]; //A
        }
        resolve([pixels, datalength, ImageUrl])
      })
    })
}
exports.TESTFUNCTION_CheckIfImageExistsAndGetPixels = (ImageUrl) => {
  return new Promise((resolve, reject) => {
    CheckIfImageExistsAndGetPixels(ImageUrl).then((pixelsdata)=>{resolve(pixelsdata)}).catch((error)=>{reject(error)})
  })
}

function CheckImageGetPixelsAndDefineDayOrNight(ImageUrl){
  return new Promise((resolve, reject) => {
    CheckIfImageExistsAndGetPixels(ImageUrl).then((pixelsdata)=>{
      let result = DayNightService.IsTheImageDayOrNight(pixelsdata);
      resolve(result);
    }).catch((error)=>{if(error="400"){reject(error)}})
  })
}

exports.CheckUrlAndExecuteServiceForAPI = (req, res) => {
  CheckImageGetPixelsAndDefineDayOrNight(req.query.ImageUrl).then((result)=>{
    res.send({'result': result[0], 'percentage': result[1], 'ImageUrl' : req.query.ImageUrl});
  }).catch((error)=>{if(error="400"){res.status(400).send({ message: "Image could not be loaded, please check URL" });}})
}
exports.CheckUrlAndExecuteServiceForEJS = (req, res) => {
  CheckImageGetPixelsAndDefineDayOrNight(req.query.ImageUrl).then((result)=>{
    res.render("home", {'result': result[0], 'percentage': result[1], 'ImageUrl' : req.query.ImageUrl, 'error': null})
  }).catch((error)=>{
      if(error="400"){res.render("home", {'result': null, 'percentage': null, 'ImageUrl' : null, 'error': "Image could not be loaded, please check URL"})}
  })
}




