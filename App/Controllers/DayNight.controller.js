const DayNightService = require("../Services/DayNight.service.js");
var getPixels = require("get-pixels") //Image to get pixels from Image URL


function CheckIfImageExistsAndGetPixels (ImageUrl)  {
    return new Promise((resolve, reject) => {
      getPixels(ImageUrl, function(err, pixels) {
        if(err) {reject("400"); return}
        resolve(pixels.shape)
      })
    })
}
exports.TESTFUNCTION_CheckIfImageExistsAndGetPixels = (ImageUrl) => {
  return new Promise((resolve, reject) => {
    CheckIfImageExistsAndGetPixels(ImageUrl).then((pixels)=>{resolve(pixels)}).catch((error)=>{reject(error)})
  })
}


exports.CheckUrlAndExecuteService = (req, res) => {
    console.log(req.query.ImageUrl)
    CheckIfImageExistsAndGetPixels(req.query.ImageUrl).then((pixels)=>{
      // DayNightService.IsTheImageDayOrNight(pixels).then(result => {
      //   res.status(200).send(result);
      // })
      // console.log("ok")
      res.status(200).send({ message: "Ok" });

    }).catch((error)=>{
      if(error="400"){
        res.status(400).send({ message: "Image could not be loaded, please check URL" });
      }
    })
}

