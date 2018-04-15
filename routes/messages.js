const express = require("express");
const router = express.Router();

const Message = require("../models/message");

router.get("/", (req, res, next) => {
	Message.find()
		.exec((err, messages) => {
			if(err) {
				return res.status(500).json({
					title: "An error occured",
					error: err
				});
			}
			res.status(200).json({
				message: "Success",
				obj: messages
			});
		});
});

router.post("/", (req, res, next) => {
	var message = new Message({
		content: req.body.content
	});
	message.save((err, result) => {
		if(err) {
			return res.status(500).json({
				title: "An error occured",
				error: err
			});
		}
		res.status(201).json({
			message: 'Saved message',
			obj: result
		});
	});
});



module.exports = router;