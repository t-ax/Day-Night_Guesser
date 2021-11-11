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
        resolve([pixels, datalength])
      })
    })
}
exports.TESTFUNCTION_CheckIfImageExistsAndGetPixels = (ImageUrl) => {
  return new Promise((resolve, reject) => {
    CheckIfImageExistsAndGetPixels(ImageUrl).then((pixelsdata)=>{resolve(pixelsdata)}).catch((error)=>{reject(error)})
  })
}


exports.CheckUrlAndExecuteService = (req, res) => {
    CheckIfImageExistsAndGetPixels(req.query.ImageUrl).then((pixelsdata)=>{
      let result = DayNightService.IsTheImageDayOrNight(pixelsdata);
      res.send(result);
    }).catch((error)=>{
      if(error="400"){
        res.status(400).send({ message: "Image could not be loaded, please check URL" });
      }
    })
}

