const INITIMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWbDMtDygvRxsKqktoVTVjyw-wFhKqdYcAA&usqp=CAU"

module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/', (req, res)=>{res.render("home", {'ImageUrl' : INITIMAGE, 'result': "Night", 'percentage': "XX%", 'error': null})});
    app.get('/runUserImage', DayNightController.CheckUrlAndExecuteServiceForEJS);
    app.get('/api', DayNightController.CheckUrlAndExecuteServiceForAPI);
};
