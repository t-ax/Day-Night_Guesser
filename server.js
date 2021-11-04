const express = require('express');
const app = express();

require("./app/routes/kpi.routes")(app);


app.listen(process.env.PORT || 8080);