(function () {

	'use strict';
	var express = require('express'),
	fileSystemService = require('./services/fileSystem/fileSystemService');

	var router = express.Router();

	/* GET home page. */
	router.get('/', function (req, res) {
		res.render('index');
	});
	
	router.post('/api/files', fileSystemService.getFiles);

	module.exports = router;
}
	());
