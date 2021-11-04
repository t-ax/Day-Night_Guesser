module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/', (req, res)=>{res.send("Insert the url of a sky image as a parameter -> https://ourwebsite/IMAGEURL; We'll tell you if it's Day or Night")});
    app.get('/:ImageUrl', DayNightController.CheckUrlAndExecuteService);
};