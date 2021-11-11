module.exports = app => {
    const DayNightController = require("../Controllers/DayNight.controller.js");
    
    app.get('/', (req, res)=>{res.render("home")});
    app.get('/api', DayNightController.CheckUrlAndExecuteService);
};
