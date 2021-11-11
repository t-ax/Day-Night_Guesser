module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/', (req, res)=>{res.render("home", {'ImageUrl' : null, 'result': "", 'percentage': "", 'error': null})});
    app.get('/runUserImage', DayNightController.CheckUrlAndExecuteServiceForEJS);
    app.get('/api', DayNightController.CheckUrlAndExecuteServiceForAPI);
};
