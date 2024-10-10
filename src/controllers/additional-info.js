'use strict';

const additionalInfoController = module.exports;

additionalInfoController.get = async function (req, res, next) {
	console.log('API route accessed');
	try {
		const data = {
			title: 'Your Custom Title',
			content: 'This is your additional information content.',
		};
		res.json(data);
	} catch (error) {
		next(error);
	}
};





