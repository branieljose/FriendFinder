const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const port = 8000;

const app = express();

const htmlRoutes = require("./routing/htmlRoutes.js");
const apiRoutes = require("./routing/apiRoutes.js");

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(port, function(){
	console.log('listening on port ' + port)

});
