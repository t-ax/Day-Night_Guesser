const express = require('express');
const app = express();
app.set('view engine', 'ejs') 
app.use(express.static('public'))
require("./App/Routes/DayNight.routes")(app);
app.listen(process.env.PORT || 8080);