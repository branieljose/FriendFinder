const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

//setting up router for implementation...
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

router.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "../public/home.html"));
});
router.use("/survey", function(request, response){
	response.sendFile(path.join(__dirname, "../public/survey.html"));
})

module.exports = router;