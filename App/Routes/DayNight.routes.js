const INITIMAGE = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/', (req, res)=>{res.render("home", {'ImageUrl' : INITIMAGE, 'result': "Day", 'percentage': "100%", 'error': null})});
    app.get('/runUserImage', DayNightController.CheckUrlAndExecuteServiceForEJS);
    app.get('/api', DayNightController.CheckUrlAndExecuteServiceForAPI);
};
