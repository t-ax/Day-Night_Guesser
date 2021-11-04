module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/:ImageUrl', DayNightController.CheckUrlAndExecuteService);
};