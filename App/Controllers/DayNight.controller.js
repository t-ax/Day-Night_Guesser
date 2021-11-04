const DayNightService = require("../Services/DayNight.service.js");

exports.CheckIfImageCanLoad = (ImageUrl) => {
    return new Promise((resolve, reject) => {
        let imageToLoadAndCheckIfError = new Image();
        imageToLoadAndCheckIfError.onload(() => resolve(ImageUrl));
        imageToLoadAndCheckIfError.onerror((error) => reject(error));
        imageToLoadAndCheckIfError.src=ImageUrl;
    })
}


exports.CheckUrlAndExecuteService = (req, res) => {

    CheckIfImageCanLoad(req.params.ImageUrl).then((ImageUrl)=>{


    })


    DayNightService.IsTheImageDayOrNight(ImageUrl)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Error with following image " + ImageUrl });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving kpi with id=" + id });
      });
}
