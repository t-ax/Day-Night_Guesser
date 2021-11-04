
const app = require('express')();
require("./App/Routes/DayNight.routes")(app);
app.listen(process.env.PORT || 8080);